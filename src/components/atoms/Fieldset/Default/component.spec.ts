import { newSpecPage } from '@stencil/core/testing';
import { FieldsetDefault } from './index';

it('slot should be equal to text', async () => {
    const page = await newSpecPage({
        components: [FieldsetDefault],
        html: `<fieldset-default>Test</fieldset-default>`,
    }); 
    expect(page.root.childNodes[0].nodeValue).toEqualText(`
        Test
    `);
});