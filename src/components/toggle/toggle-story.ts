/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ifDefined } from 'lit-html/directives/if-defined';
import { html } from 'lit-element';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import './toggle';

export const defaultStory = ({ parameters }) => {
  const { checked, checkedText, disabled, labelText, name, small, uncheckedText, value, onInput } = parameters?.props?.[
    'bx-toggle'
  ];
  return html`
    <bx-toggle
      ?checked="${checked}"
      checked-text="${checkedText}"
      ?disabled="${disabled}"
      label-text="${labelText}"
      name="${ifDefined(!name ? undefined : name)}"
      ?small="${small}"
      unchecked-text="${uncheckedText}"
      value="${ifDefined(!value ? undefined : value)}"
      @input="${onInput}"
    ></bx-toggle>
  `;
};

defaultStory.story = {
  name: 'Default',
};

export default {
  title: 'Toggle',
  parameters: {
    knobs: {
      'bx-toggle': () => ({
        checked: boolean('Checked (checked)', false),
        checkedText: text('Text for checked state (checked-text)', 'On'),
        disabled: boolean('Disabled (disabled)', false),
        labelText: text('Label text (label-text)', 'Toggle'),
        name: text('Name (name)', ''),
        small: boolean('Use small variant (small)', false),
        uncheckedText: text('Text for unchecked state (unchecked-text)', 'Off'),
        value: text('Value (value)', ''),
        onInput: action('input'),
      }),
    },
  },
};
