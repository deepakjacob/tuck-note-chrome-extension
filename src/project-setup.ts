import ReactDOM, { Renderer } from 'react-dom';

import { checkIsExtension } from './services/environment-service';

chrome.runtime.onMessage.addListener(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (request, sender, sendResponse) => {
    if (request.message === 'activate_tuck_note_side_bar') {
      // eslint-disable-next-line no-console
      console.log(
        'activate tuck note sidebar received @ ',
        new Date(),
      );
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
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

const findElementInDOM = (selector: ContainerSelector) => {
  return document.querySelector(selector);
};

const renderAppToDOM = (
  element: RootElement,
  selector: ContainerSelector,
) => {
  ReactDOM.render(element, document.querySelector(selector));
};

const rootElementId = 'tuck-note-root';

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
