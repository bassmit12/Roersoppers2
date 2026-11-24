import * as migration_20261124_163012_initial from './20261124_163012_initial';
import * as migration_20261124_163453_vercel_blob from './20261124_163453_vercel_blob';

export const migrations = [
  {
    up: migration_20261124_163012_initial.up,
    down: migration_20261124_163012_initial.down,
    name: '20261124_163012_initial',
  },
  {
    up: migration_20261124_163453_vercel_blob.up,
    down: migration_20261124_163453_vercel_blob.down,
    name: '20261124_163453_vercel_blob'
  },
];
