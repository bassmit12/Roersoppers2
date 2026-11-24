import * as migration_20261124_163012_initial from './20261124_163012_initial';

export const migrations = [
  {
    up: migration_20261124_163012_initial.up,
    down: migration_20261124_163012_initial.down,
    name: '20261124_163012_initial'
  },
];
