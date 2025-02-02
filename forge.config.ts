import type { ForgeConfig } from '@electron-forge/shared-types';
import { MakerSquirrel } from '@electron-forge/maker-squirrel';
import { MakerZIP } from '@electron-forge/maker-zip';
import { MakerDeb } from '@electron-forge/maker-deb';
import { MakerRpm } from '@electron-forge/maker-rpm';
import { WebpackPlugin } from '@electron-forge/plugin-webpack';

import { mainConfig } from './webpack.main.config';
import { rendererConfig } from './webpack.renderer.config';

const config: ForgeConfig = {
  packagerConfig: {
    icon: './assets/icon'
  },
  rebuildConfig: {},
  makers: [new MakerSquirrel({})/*, new MakerZIP({}, ['darwin']), new MakerRpm({}), new MakerDeb({})*/],
  plugins: [
    new WebpackPlugin({
      mainConfig,
      renderer: {
        config: rendererConfig,
        entryPoints: [
          {
            html: './src/app/app.html',
            js: './src/renderer.ts',
            name: 'main',
            preload: {
              js: './src/app/app.ts',
            },
          },
        ],
      },
    }),
  ],
};

export default config;
