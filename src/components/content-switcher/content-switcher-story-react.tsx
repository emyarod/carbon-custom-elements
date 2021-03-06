/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { action } from '@storybook/addon-actions';
// Below path will be there when an application installs `carbon-custom-elements` package.
// In our dev env, we auto-generate the file and re-map below path to to point to the generated file.
// @ts-ignore
import BXContentSwitcher from 'carbon-custom-elements/es/components-react/content-switcher/content-switcher';
// @ts-ignore
import BXContentSwitcherItem from 'carbon-custom-elements/es/components-react/content-switcher/content-switcher-item';
import { defaultStory as baseDefaultStory } from './content-switcher-story';

export { default } from './content-switcher-story';

export const defaultStory = ({ parameters }) => {
  const { disabled, value, disableSelection } = parameters?.props?.['bx-content-switcher'];
  const beforeSelectedAction = action('bx-content-switcher-beingselected');
  const handleBeforeSelected = (event: CustomEvent) => {
    beforeSelectedAction(event);
    if (disableSelection) {
      event.preventDefault();
    }
  };
  return (
    <BXContentSwitcher
      disabled={disabled}
      value={value}
      onBeforeSelect={handleBeforeSelected}
      onAfterSelect={action('bx-content-switcher-selected')}>
      <BXContentSwitcherItem value="all">Option 1</BXContentSwitcherItem>
      <BXContentSwitcherItem value="cloudFoundry" disabled>
        Option 2
      </BXContentSwitcherItem>
      <BXContentSwitcherItem value="staging">Option 3</BXContentSwitcherItem>
      <BXContentSwitcherItem value="dea">Option 4</BXContentSwitcherItem>
      <BXContentSwitcherItem value="router">Option 5</BXContentSwitcherItem>
    </BXContentSwitcher>
  );
};

defaultStory.story = baseDefaultStory.story;
