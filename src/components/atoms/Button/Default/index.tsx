import { Component, h, Prop } from '@stencil/core'

@Component({
    tag: 'button-default',
    styleUrl: 'Style.scss',
    shadow: true
})
export class ButtonDefault {
    @Prop() onClick: () => void
    render() {
        return (
            <button type="submit" onClick={ this.onClick } class="button-default">
                <slot />
            </button>
        );
    }
}
