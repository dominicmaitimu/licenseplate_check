import { Component, h } from '@stencil/core'

@Component({
    tag: 'fieldset-default',
    styleUrl: 'Style.scss',
    shadow: true
})
export class FieldsetDefault {
    render() {
        return (
            <fieldset class='fieldset-default'>
                <slot />
            </fieldset>
        );
    }
}
