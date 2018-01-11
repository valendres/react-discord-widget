import * as React from 'react';
import * as ReactDOM from 'react-dom';
import pick from 'lodash.pick';
import omit from 'lodash.omit';
import { AppContainer } from 'react-hot-loader';
import { ThemeProvider, injectGlobal } from 'styled-components';

import App from './containers/App';
import defaultSettings from './constants/defaultSettings';
import defaultTheme from './constants/defaultTheme';
import { SettingsMap, ThemeMap } from './types';

const getConfigurationFromUrl = (url:string):any => {
  const params = decodeURIComponent(url).match(/(?:([^\?\=&]*)=([^\&\/]*))/g);
  if (params) {
    return params
      .map(pair => pair.split('='))
      .reduce(
        (output:any = {}, entry:string[]):any => {
          const [key, value] = entry;
          return Object.assign(output, {
            [key]: value === 'true' ? true : value === 'false' ? false : value,
          });
        },
        {},
      );
  }

  return {};
};

const handleUnknownConfiguration = (config:any):any => {
  const unknownConfigurationKeys = Object.keys(omit(config, [
    ...Object.keys(defaultSettings),
    ...Object.keys(defaultTheme),
  ]));
  if (unknownConfigurationKeys.length > 0) {
    console.warn(
      `Unknown configuration key${unknownConfigurationKeys.length > 1 ? 's' : ''}: ` +
      `"${unknownConfigurationKeys.join('", "')}".`,
    );
  }
};

const routeParams:any = getConfigurationFromUrl(window.location.href);
handleUnknownConfiguration(routeParams);

// Settings
const customSettings:any = pick(routeParams, Object.keys(defaultSettings));
const settings:SettingsMap = Object.assign({}, defaultSettings, customSettings);

// Theme
const customTheme:any = pick(routeParams, Object.keys(defaultTheme));
const theme:ThemeMap = Object.assign({}, defaultTheme, customTheme);


injectGlobal`
  body {
    margin: 0;
    font-family: "${theme.fontFamily}";
    background-color: ${theme.bodyBackgroundColor};
  }
`;

const rootEl = document.getElementById('root');
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <div>
      <AppContainer>
        <App settings={settings}/>
      </AppContainer>
    </div>
  </ThemeProvider>,
  rootEl,
);
