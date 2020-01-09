import { Component, h } from '@stencil/core'

@Component({
    tag: 'template-default',
    styleUrl: 'Style.scss',
    shadow: true,
})
export class TemplateDefault {
    render() {
        return (
            <div class='template-default'>
                <slot />
            </div>
        )
    }
}
