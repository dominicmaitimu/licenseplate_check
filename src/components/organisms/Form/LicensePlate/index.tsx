import { Component, h, Prop } from '@stencil/core'
import { FormDefault } from '../../../molecules/Form/Default'
import Tunnel from '../../../../data/LicensePlate'
import { retrieveCarDetails } from '../../../../services/serviceDefault'

@Component({
    tag: 'form-licenseplate',
    styleUrl: 'Style.scss',
    shadow: true
})
export class FormLicensePlate {
    @Prop() data: object
    @Prop() number: string

    onSubmit = async () => {
        const results = await retrieveCarDetails(this.number)
        this.data = results
    }

    render() {
        return (
            <div>
                <form class="form-licenseplate">
                    { !this.number && <trigger-default /> }
                    <FormDefault>
                        <input-licenseplate />
                    </FormDefault>
                    { this.number && <trigger-check onClick={ () => this.onSubmit() } /> }
                </form>
                { this.data && <modal-default data={ this.data } /> }             
            </div>
        );
    }
}

Tunnel.injectProps(FormLicensePlate, ['data', 'number'])
