/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import '../src/polyfills';
import { html } from 'lit-html'; // eslint-disable-line import/first
import addons from '@storybook/addons';
import { configure, addDecorator, addParameters } from '@storybook/polymer'; // eslint-disable-line import/first
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { withKnobs } from '@storybook/addon-knobs';
import './components/focus-trap/focus-trap';
import { CURRENT_THEME } from './addon-carbon-theme/shared';
import DocsPage from './DocsPage';
import theme from './theme';
import containerStyles from './_container.scss'; // eslint-disable-line import/first

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    theme: theme,
  },
});

addDecorator(story => {
  const result = story();
  const { hasMainTag } = result as any;
  return html`
    <style>
      ${containerStyles}
    </style>
    <bx-ce-demo-focus-trap href="#main-content" aria-label="Skip to main content">Skip to main content</bx-ce-demo-focus-trap>
    <div
      name="main-content"
      data-floating-menu-container
      role="${hasMainTag ? 'none' : 'main'}"
      class="bx--body bx-ce-demo-devenv--container"
    >
      ${result}
    </div>
    <bx-ce-demo-focus-trap href="#main-content" aria-label="End of content">End of content</bx-ce-demo-focus-trap>
  `;
});

addDecorator(withKnobs);

addDecorator((story, { parameters }) => {
  const { knobs } = parameters;
  if (Object(knobs) === knobs) {
    if (!parameters.props) {
      parameters.props = {};
    }
    Object.keys(knobs).forEach(name => {
      if (typeof knobs[name] === 'function') {
        parameters.props[name] = knobs[name]();
      }
    });
  }
  return story();
});

addons.getChannel().on(CURRENT_THEME, theme => {
  document.documentElement.setAttribute('storybook-carbon-theme', theme);
});

const req = require.context('../src/components', true, /\-story\.[jt]s$/);
configure(req, module);

if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, '', currentLocationHref);
    window.location.reload();
  });
}
