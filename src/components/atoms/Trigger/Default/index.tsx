import { Component, h } from '@stencil/core'

@Component({
    tag: 'trigger-default',
    styleUrl: 'Style.scss',
    shadow: true
})
export class TriggerDefault {
    render() {
        return (
            <div class="trigger-default">
                <div>Fill in 6 characters</div>
                <div>
                    <img src="assets/images/arrow_down.svg" width="100" />
                </div>
            </div>
        );
    }
}
