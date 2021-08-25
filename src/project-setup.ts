import ReactDOM, { Renderer } from 'react-dom';
import { checkIsExtension } from './services/environment-service';
import { ChromeRequest, MessageType } from './types';

const findElementInDOM = (selector: ContainerSelector) => {
  return document.querySelector(selector);
};

const rootElementId = 'tuck-note-root';

const toggle = () => {
  const rootElement = findElementInDOM(
    `#${rootElementId}`,
  ) as HTMLDivElement;
  if (rootElement?.style?.display === 'none') {
    rootElement.style.display = 'block';
  } else {
    rootElement.style.display = 'none';
  }
};

// TODO move this to someother chrome specific files
chrome.runtime.onMessage.addListener(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (request: ChromeRequest, sender: any, sendResponse: any) => {
    if (request.message === MessageType.ACTIVATE_SIDE_BAR) {
      toggle();
    }
  },
);

type RootElement = Parameters<Renderer>['0'][0];
type ContainerSelector = string;

interface AppSetupConfig {
  rootElement: RootElement;
  injectExtensionTo: ContainerSelector;
  injectWebAppTo: ContainerSelector;
}

const renderAppToDOM = (
  element: RootElement,
  selector: ContainerSelector,
) => {
  ReactDOM.render(element, document.querySelector(selector));
};

const injectExtensionToDOM = (
  element: RootElement,
  selector: ContainerSelector,
) => {
  const appContainer = document.createElement('div');
  appContainer.id = rootElementId;
  appContainer.style.display = 'none';

  const elementInDOM = findElementInDOM(selector);

  if (elementInDOM) {
    elementInDOM.append(appContainer);
    renderAppToDOM(element, `#${rootElementId}`);
  }
};

const initExtension = (
  element: RootElement,
  selector: ContainerSelector,
) => {
  const interval = setInterval(() => {
    // Can't inject the extension to DOM.
    if (!findElementInDOM(selector)) {
      return;
    }

    clearInterval(interval);
    injectExtensionToDOM(element, selector);
  }, 100);
}; // check every 100ms

const setupProject = (config: AppSetupConfig) => {
  if (checkIsExtension()) {
    initExtension(config.rootElement, config.injectExtensionTo);
  } else {
    renderAppToDOM(config.rootElement, config.injectWebAppTo);
  }
};

export { setupProject };
