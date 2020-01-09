import { Component, h, Prop } from '@stencil/core'

@Component({
    tag: 'input-text',
    styleUrl: 'Style.scss',
    shadow: true
})
export class InputText {
    @Prop() id: string
    @Prop() type: string
    @Prop() onChange: (event: Event) => void

    render() {
        return (
            <input
                class="input-text"
                id={ this.id }
                type={ this.type }
                onChange={ this.onChange }
            />
        );
    }
}
