import * as React from 'react';
import * as ReactDOM from 'react-dom';
import pick from 'lodash.pick';
import { AppContainer } from 'react-hot-loader';
import { ThemeProvider, injectGlobal } from 'styled-components';

import App from './containers/App';
import defaultSettings from './constants/defaultSettings';
import defaultTheme from './constants/defaultTheme';
import { SettingsMap, ThemeMap } from './types';

const getRouteParams = ():any => {
  const params =  window.location.href.match(/(?:([^\?\=&]*)=([^\&\/]*))/g);
  if (params) {
    return params
      .map(pair => pair.split('='))
      .reduce(
        (output:any = {}, entry:[string]):any =>
          Object.assign(output, { [entry[0]]: entry[1] }),
        {},
      );
  }

  return {};
};

const routeParams:any = getRouteParams();

// Settings
const customSettings:SettingsMap = pick(routeParams, Object.keys(defaultSettings));
const settings:SettingsMap = Object.assign({}, defaultSettings, customSettings);

// Theme
const customTheme:ThemeMap = pick(routeParams, Object.keys(defaultTheme));
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

if (module.hot) {

}
