import { newE2EPage } from '@stencil/core/testing';

describe('fieldset-default', () => {
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent('<fieldset-default />');
        const element = await page.find('fieldset-default');
        expect(element).toHaveClass('hydrated');
    });
});
