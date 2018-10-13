import { config as dev } from './config.dev';
import { config as prod } from './config.prod';

const configs = {
  development: dev,
  production: prod,
};

const config = configs.development;

export { config };
