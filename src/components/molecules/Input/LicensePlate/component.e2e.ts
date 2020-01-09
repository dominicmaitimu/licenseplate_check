import { newE2EPage } from '@stencil/core/testing';

describe('input-licenseplate', () => {
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent('<input-licenseplate />');
        const element = await page.find('input-licenseplate');
        expect(element).toHaveClass('hydrated');
    });
});
