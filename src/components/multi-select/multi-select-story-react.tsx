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
import BXMultiSelect from 'carbon-custom-elements/es/components-react/multi-select/multi-select';
// @ts-ignore
import BXMultiSelectItem from 'carbon-custom-elements/es/components-react/multi-select/multi-select-item';
import { defaultStory as baseDefaultStory } from './multi-select-story';

export { default } from './multi-select-story';

export const defaultStory = ({ parameters }) => {
  const {
    clearSelectionLabel,
    disabled,
    helperText,
    invalid,
    labelText,
    light,
    open,
    toggleLabelClosed,
    toggleLabelOpen,
    triggerContent,
    type,
    validityMessage,
    disableSelection,
  } = parameters?.props?.['bx-multi-select'];
  const beforeSelectedAction = action('onBeforeSelect');
  const handleBeforeSelect = (event: CustomEvent) => {
    beforeSelectedAction(event);
    if (disableSelection) {
      event.preventDefault();
    }
  };
  return (
    <BXMultiSelect
      disabled={disabled}
      invalid={invalid}
      light={light}
      open={open}
      clearSelectionLabel={clearSelectionLabel}
      helperText={helperText}
      labelText={labelText}
      toggleLabelClosed={toggleLabelClosed}
      toggleLabelOpen={toggleLabelOpen}
      triggerContent={triggerContent}
      type={type}
      validityMessage={validityMessage}
      onBeforeSelect={handleBeforeSelect}
      onAfterSelect={action('onAfterSelect')}>
      <BXMultiSelectItem value="all">Option 1</BXMultiSelectItem>
      <BXMultiSelectItem value="cloudFoundry">Option 2</BXMultiSelectItem>
      <BXMultiSelectItem value="staging">Option 3</BXMultiSelectItem>
      <BXMultiSelectItem value="dea">Option 4</BXMultiSelectItem>
      <BXMultiSelectItem value="router">Option 5</BXMultiSelectItem>
    </BXMultiSelect>
  );
};

defaultStory.story = baseDefaultStory.story;
