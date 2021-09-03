/* eslint-disable @typescript-eslint/no-unused-vars */
// IMPORTANT: use the asset service module to incluse assets like
// images in your app. Find the usage below

// import * as AssetsService from "./services/assets-service";
// import logo from "./logo.svg";
// AssetsService.getResourceURL(logo)

import Frame, { FrameContextConsumer } from 'react-frame-component';
import {
  jssPreset,
  StylesProvider,
  ThemeProvider,
} from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import View from './components/View';
import './xmain.css';
import { create } from 'jss';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

// const responsiveTheme = responsiveFontSizes(theme);

interface XMainProps {
  document?: Document;
  window?: Window;
  isExtension: boolean;
}

const XMain = (props: XMainProps) => {
  const { document, window } = props;
  return (
    <div>
      <View />
    </div>
  );
};

const CustomHead = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <title>Previewer</title>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1"
      />
      <base target="_parent" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        key="key"
        type="text/css"
        rel="stylesheet"
        href={window.chrome?.runtime?.getURL(
          '/static/css/content.css',
        )}
      />
    </>
  );
};

const FramedApp = ({ children, ...props }: any) => {
  return (
    <Frame
      style={{ width: '100vw', height: '100vh' }}
      frameBorder={0}
      {...props}
      head={<CustomHead />}
    >
      <FrameContextConsumer>
        {({ document, window }) => {
          const jss = create({
            plugins: [...jssPreset().plugins],
            insertionPoint: document.head,
          });
          return (
            <StylesProvider jss={jss}>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
              </ThemeProvider>
            </StylesProvider>
          );
        }}
      </FrameContextConsumer>
    </Frame>
  );
};

const App = () => {
  return (
    <FramedApp>
      <XMain document={document} window={window} isExtension={true} />
    </FramedApp>
  );
};

export default App;
