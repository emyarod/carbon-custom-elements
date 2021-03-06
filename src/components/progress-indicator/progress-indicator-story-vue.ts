/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import createVueBindingsFromProps from '../../../.storybook/vue/create-vue-bindings-from-props';
import './progress-indicator';
import './progress-step';

const createProps = () => ({
  vertical: boolean('Vertical (vertical)', false),
});

const createStepProps = () => ({
  iconLabel: text('Icon label (icon-label)', ''),
  labelText: text('Primary label text (label-text)', 'Label'),
  secondaryLabelText: text('Secondary label text (secondary-label-text)', 'Secondary label'),
});

storiesOf('Progress indicator', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    template: `
      <bx-progress-indicator
        :vertical="vertical"
      >
        <bx-progress-step
          :icon-label="iconLabel"
          :label-text="labelText"
          :secondary-label-text="secondaryLabelText"
          state="invalid"
        ></bx-progress-step>
        <bx-progress-step
          :icon-label="iconLabel"
          :label-text="labelText"
          :secondary-label-text="secondaryLabelText"
          state="complete"
        ></bx-progress-step>
        <bx-progress-step
          :icon-label="iconLabel"
          :label-text="labelText"
          :secondary-label-text="secondaryLabelText"
          state="current"
        ></bx-progress-step>
        <bx-progress-step
          disabled
          :icon-label="iconLabel"
          :label-text="labelText"
          :secondary-label-text="secondaryLabelText"
        ></bx-progress-step>
        <bx-progress-step
          :icon-label="iconLabel"
          :label-text="labelText"
          :secondary-label-text="secondaryLabelText"
        ></bx-progress-step>
      </bx-progress-indicator>
    `,
    ...createVueBindingsFromProps({ ...createProps(), ...createStepProps() }),
  }));
