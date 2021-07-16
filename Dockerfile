FROM node:14.17-alpine

RUN apk update && \
    apk add --update git
COPY ./ /app/
WORKDIR /app
RUN yarn install && \
    yarn build-demo:prod

# Expose
EXPOSE 3000

# Run
CMD [ "yarn", "start" ]
