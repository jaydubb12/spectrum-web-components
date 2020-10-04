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

import '@spectrum-web-components/action-menu/sp-action-menu.js';
import { ActionMenu } from '@spectrum-web-components/action-menu';
import '@spectrum-web-components/icon/sp-icon.js';
import '@spectrum-web-components/menu/sp-menu.js';
import '@spectrum-web-components/menu/sp-menu-item.js';
import '@spectrum-web-components/menu/sp-menu-divider.js';
import { fixture, elementUpdated, expect } from '@open-wc/testing';
import {
    iconOnly,
    Default,
    customIcon,
} from '../stories/action-menu.stories.js';

describe('Action menu', () => {
    it('loads', async () => {
        const el = await fixture<ActionMenu>(iconOnly());
        await elementUpdated(el);

        expect(el).to.not.be.undefined;

        await expect(el).to.be.accessible();
    });
    it('loads - [label]', async () => {
        const el = await fixture<ActionMenu>(Default());

        await elementUpdated(el);

        await expect(el).to.be.accessible();
    });
    it('loads - [custom icon]', async () => {
        const el = await fixture<ActionMenu>(customIcon());

        await elementUpdated(el);

        await expect(el).to.be.accessible();
    });
    it('stays `quiet`', async () => {
        const el = await fixture<ActionMenu>(Default());
        await elementUpdated(el);

        expect(el.quiet).to.be.true;

        el.quiet = false;
        await elementUpdated(el);

        expect(el.quiet).to.be.true;
    });
    it('stay `valid`', async () => {
        const el = await fixture<ActionMenu>(Default());

        await elementUpdated(el);

        expect(el.invalid).to.be.false;

        el.invalid = true;
        await elementUpdated(el);

        expect(el.invalid).to.be.false;
    });
    it('opens unmeasured', async () => {
        const el = await fixture<ActionMenu>(Default());

        await elementUpdated(el);
        const button = el.button as HTMLButtonElement;

        button.click();
        await elementUpdated(el);
        expect(el.open).to.be.true;
    });
});
