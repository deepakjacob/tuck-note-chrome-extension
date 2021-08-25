// IMPORTANT: use the asset service module to incluse assets like
// images in your app. Find the usage below

// import * as AssetsService from "./services/assets-service";
// import logo from "./logo.svg";
// AssetsService.getResourceURL(logo)

import Frame, { FrameContextConsumer } from 'react-frame-component';
import './xmain.css';

interface XMainProps {
  document?: Document;
  window?: Window;
  isExtension: boolean;
}
const XMain = (props: XMainProps) => {
  const { document, window } = props;
  return (
    <div>
      <div>this is XMain component</div>
      <div>${document?.baseURI}</div>
      <div>${window?.isSecureContext}</div>
    </div>
  );
};
const App = () => {
  return (
    <Frame
      head={[
        <link
          key="key"
          type="text/css"
          rel="stylesheet"
          href={chrome.runtime.getURL('/static/css/content.css')}
        ></link>,
      ]}
    >
      <FrameContextConsumer>
        {({ document, window }: any) => (
          <XMain
            document={document}
            window={window}
            isExtension={true}
          />
        )}
      </FrameContextConsumer>
    </Frame>
  );
};

export default App;
