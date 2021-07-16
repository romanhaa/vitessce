import configs from './datasets';

export function listConfigs(showAll) {
  return Object.entries(configs).filter(
    entry => showAll || entry[1].public,
  ).map(
    ([id, config]) => ({
      id,
      name: config.name,
      description: config.description,
      files: 'datasets' in config ? config.datasets[0].files : config.layers,
    }),
  );
}

export function getConfig(id) {
  return configs[id];
}
