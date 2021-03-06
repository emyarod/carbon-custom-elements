/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { BUTTON_KIND } from './button';

const kinds = {
  [`Primary button (${BUTTON_KIND.PRIMARY})`]: BUTTON_KIND.PRIMARY,
  [`Secondary button (${BUTTON_KIND.SECONDARY})`]: BUTTON_KIND.SECONDARY,
  [`Danger button (${BUTTON_KIND.DANGER})`]: BUTTON_KIND.DANGER,
  [`Ghost button (${BUTTON_KIND.GHOST})`]: BUTTON_KIND.GHOST,
};

export const defaultStory = ({ parameters }) => {
  const { kind, disabled, small, href, onClick } = parameters?.props?.['bx-btn'];
  return html`
    <bx-btn kind=${kind} ?disabled=${disabled} ?small=${small} href=${ifDefined(href || undefined)} @click=${onClick}>
      Button
    </bx-btn>
  `;
};

defaultStory.story = {
  name: 'Default',
};

export default {
  title: 'Button',
  parameters: {
    knobs: {
      'bx-btn': () => ({
        kind: select('Button kind (kind)', kinds, BUTTON_KIND.PRIMARY),
        disabled: boolean('Disabled (disabled)', false),
        small: boolean('Small (small)', false),
        href: text('Link href (href)', ''),
        onClick: action('click'),
      }),
    },
  },
};
