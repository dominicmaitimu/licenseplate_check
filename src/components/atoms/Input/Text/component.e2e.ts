import { newE2EPage } from '@stencil/core/testing';

describe('input-text', () => {
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent('<input-text />');
        const element = await page.find('input-text');
        expect(element).toHaveClass('hydrated');
    });

    it('renders right prop values', async () => {
      const page = await newE2EPage();
  
      await page.setContent('<input-text />');
      const component = await page.find('input-text');
      const element = await page.find('input-text >>> input');
  
      component.setProperty('id', 'Test');
      await page.waitForChanges();
      expect(element.getAttribute('id')).toEqual(`Test`);
    });
});
