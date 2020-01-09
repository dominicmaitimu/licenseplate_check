import { newE2EPage } from '@stencil/core/testing';

describe('button-default', () => {
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent('<button-default />');
        const element = await page.find('button-default');
        expect(element).toHaveClass('hydrated');
    });
});
