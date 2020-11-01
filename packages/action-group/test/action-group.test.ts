/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import { fixture, elementUpdated, expect, html } from '@open-wc/testing';

import '../sp-action-group.js';
import { ActionGroup } from '..';

describe('ActionGroup', () => {
    it('loads default action-group accessibly', async () => {
        const el = await fixture<ActionGroup>(
            html`
                <sp-action-group label="Empty Group"></sp-action-group>
            `
        );

        await elementUpdated(el);

        await expect(el).to.be.accessible();
    });
});

// action with [selected] by default
// action with [selected] applied
// action without [selected] clicked
// group with `selected.length` by default
// group with `selected.length` applied
// group with [selects="one"] with `select.length > 1` by default
// group with [selects="one"] with `select.length > 1` applied
// tabIndex=-1 managed when tabbing past
// tabIndex=-1 managed when using arrow keys
// tabIndex=-1 managed when clicking with "mouse"
// tabIndex=-1 managed when clicking with "keyboard"
// selects="multiple"
