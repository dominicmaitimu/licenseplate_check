import { Component, h, Prop } from '@stencil/core'

@Component({
    tag: 'trigger-check',
    styleUrl: 'Style.scss',
    shadow: true
})
export class TriggerDefault {
    @Prop() onClick: () => void
    render() {
        return (
            <div class="trigger-check">
                <div>
                    <img src="assets/images/arrow_right.svg" height="100" />
                </div>
                <div>
                    <button-default onClick={ this.onClick }>Check it out</button-default>
                </div>
            </div>
        );
    }
}
