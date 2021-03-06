/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';
import baseStory, { defaultStory as baseDefaultStory, withInputBox as baseWithInputBox } from './slider-story';

export const defaultStory = ({ parameters }) => ({
  template: `
    <bx-slider
      [disabled]="disabled"
      [labelText]="labelText"
      [max]="max"
      [min]="min"
      [name]="name"
      [step]="step"
      [value]="value"
      (bx-slider-changed)="onAfterChange($event)"
    ></bx-slider>
  `,
  props: parameters?.props?.['bx-slider'],
});

defaultStory.story = baseDefaultStory.story;

export const withInputBox = ({ parameters }) => ({
  template: `
    <bx-slider
      [disabled]="disabled"
      [labelText]="labelText"
      [max]="max"
      [min]="min"
      [name]="name"
      [step]="step"
      [value]="value"
      (bx-slider-changed)="onAfterChange($event)"
    >
      <bx-slider-input aria-label="Slider value" type="number"></bx-slider-input>
    </bx-slider>
  `,
  props: parameters?.props?.['bx-slider'],
});

withInputBox.story = baseWithInputBox.story;

export default Object.assign(baseStory, {
  decorators: [
    moduleMetadata({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
});
