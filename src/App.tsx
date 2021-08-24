
// import "./App.css";

// IMPORTANT: use the asset service module to incluse assets like
// images in your app. Find the usage below

// import * as AssetsService from "./services/assets-service";
// import logo from "./logo.svg";
// AssetsService.getResourceURL(logo)
import Frame, { FrameContextConsumer }from 'react-frame-component';

interface XMainProps {
  document?: Document;
  window?: Window;
  isExtension: boolean; 
}
const XMain = (props: XMainProps)=> (
  <div>this is XMain component</div>
)


const App = () => {
  return (
    <Frame head={[<link type="text/css" rel="stylesheet" href={chrome.runtime.getURL("/static/css/content.css")} ></link>]}> 
      <FrameContextConsumer>
      {
        ({ document, window} :any) =>  <XMain document={document} window={window} isExtension={true}/> 
                  
      }
      </FrameContextConsumer>
    </Frame>
  )
}

export default App;