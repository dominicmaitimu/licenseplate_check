import { Component, h, Prop } from '@stencil/core'

const reloadPage = () => {
    location.reload()
}

@Component({
    tag: 'modal-default',
    styleUrl: 'Style.scss',
    shadow: true
})
export class ModalDefault {
    @Prop() data: object
    render() {
        return (
            <div class="modal-default" onClick={ () => reloadPage() }>
                <div>
                    <p>
                        You have got
                        <br />
                        a <span>{ this.data[0].handelsbenaming }</span> type
                        <br /><span>{ this.data[0].inrichting }</span>
                        <br />
                        --- nice
                    </p>
                </div>
            </div>
        );
    }
}
