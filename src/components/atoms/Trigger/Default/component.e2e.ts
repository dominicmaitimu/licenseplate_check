import { newE2EPage } from '@stencil/core/testing';

describe('trigger-default', () => {
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent('<trigger-default />');
        const element = await page.find('trigger-default');
        expect(element).toHaveClass('hydrated');
    });
});
