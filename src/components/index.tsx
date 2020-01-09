import { Component, h, State } from '@stencil/core'
import Tunnel from '../data/LicensePlate'

@Component({
    tag: 'app-root',
})
export class AppRoot {
    @State() number: string
    @State() data: object

    onChange = (value: Array<string>) => {
        if (!value.includes(null)) {
            const newValue = value.toString().replace(/,/g, '').toUpperCase()
            if (newValue.length === 6) {
                this.number = newValue
            }
        }
    }

    render() {
        const state = {
            data: this.data,
            number: this.number,
            onChange: this.onChange,
        }

        return (
            <stencil-router>
                <stencil-route-switch scrollTopOffset={ 0 }>
                    <Tunnel.Provider state={ state }>
                        <stencil-route url='/' component='page-home' exact={ true } />
                    </Tunnel.Provider>
                </stencil-route-switch>
            </stencil-router>
        )
    }
}
