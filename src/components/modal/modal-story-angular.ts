/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import baseStory, { defaultStory as baseDefaultStory } from './modal-story';

export const defaultStory = ({ parameters }) => ({
  template: `
    <bx-modal
      [danger]="danger"
      [open]="open"
      (bx-modal-beingclosed)="handleBeforeClose($event)"
      (bx-modal-closed)="handleClose($event)"
    >
      <bx-modal-header>
        <bx-modal-close-button></bx-modal-close-button>
        <bx-modal-label>Label (Optional)</bx-modal-label>
        <bx-modal-heading>Modal Title</bx-modal-heading>
      </bx-modal-header>
      <bx-modal-body><p>Modal text description</p></bx-modal-body>
      <bx-modal-footer>
        <bx-btn kind="secondary" data-modal-close>Cancel</bx-btn>
        <bx-btn kind="primary">Save</bx-btn>
      </bx-modal-footer>
    </bx-modal>
  `,
  props: (({ disableClose, ...rest }) => {
    const beforeSelectedAction = action('bx-modal-beingclosed');
    return {
      ...rest,
      handleBeforeClose: (event: CustomEvent) => {
        beforeSelectedAction(event);
        if (disableClose) {
          event.preventDefault();
        }
      },
      handleClose: action('bx-modal-closed'),
    };
  })(parameters?.props?.['bx-modal']),
});

defaultStory.story = baseDefaultStory.story;

export default Object.assign(baseStory, {
  decorators: [
    moduleMetadata({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
});
