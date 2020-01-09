import { newE2EPage } from '@stencil/core/testing';

describe('form-licenseplate', () => {
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent('<form-licenseplate />');
        const element = await page.find('form-licenseplate');
        expect(element).toHaveClass('hydrated');
    });
});
