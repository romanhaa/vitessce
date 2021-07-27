# ============================== node/build section ===========================
FROM node:14.17-alpine as build_section

RUN apk update && \
    apk add --update git
COPY ./ /app/
WORKDIR /app
RUN yarn install && \
    yarn build-demo:prod

# ============================== nginx section ================================
FROM nginx:1.19.8

COPY --from=build_section /app/dist-demo/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
