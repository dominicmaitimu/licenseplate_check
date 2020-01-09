import { newE2EPage } from '@stencil/core/testing';

describe('trigger-check', () => {
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent('<trigger-check />');
        const element = await page.find('trigger-check');
        expect(element).toHaveClass('hydrated');
    });
});
