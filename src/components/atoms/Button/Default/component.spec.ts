import { newSpecPage } from '@stencil/core/testing';
import { ButtonDefault } from './index';

it('slot should be equal to text', async () => {
    const page = await newSpecPage({
        components: [ButtonDefault],
        html: `<button-default>Test</button-default>`,
    }); 
    expect(page.root.childNodes[0].nodeValue).toEqualText(`
        Test
    `);
});