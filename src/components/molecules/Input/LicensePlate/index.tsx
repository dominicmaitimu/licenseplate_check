import { Component, h, Prop } from '@stencil/core'
import Tunnel from '../../../../data/LicensePlate'
import { RegexFirst, RegexSecond } from '../../../../data/LicensePlate/Regex'

const jumpNext = (value, regex) => {
    value = value.toUpperCase()

    for (let i in regex) {
        if (value.match(regex[i])) {
            return true;
        }
    }
    
    return value;
}

const getInputs = (getValues, onChange) => {
    let inputRow = []
    for (let i = 0; i < 3; i++) {
        inputRow.push(
            <div>
                <div onInput={ event => { getValues(event, i, onChange) } } contentEditable="true" />
            </div>
        )
    }
    return inputRow
}

@Component({
    tag: 'input-licenseplate',
    styleUrl: 'Style.scss',
    shadow: true
})
export class InputLicensePlate {

    plate: Array<string> = [null, null, null]

    getValues = (event: Event, position: number, onChange) => {
        const target = event.target as HTMLElement;
        let value = target.innerText
        if (position === 0) {
            if (jumpNext(value, RegexFirst) !== true) {
                target.innerText = value.substring(0, value.length - 1);
                value = target.innerText
                target.blur()
            }
        }
        if (position === 1) {
            if (value.length > 1 && jumpNext(value, RegexSecond) !== true) {
                target.innerText = value.substring(0, value.length - 1);
                value = target.innerText
                target.blur()
            }
        }
        this.plate[position] = value
        onChange(this.plate)
    }

    render() {
        return (
            <Tunnel.Consumer>
                {({ onChange }) => (
                    <div class="input-licenseplate">
                        <div class="input-licenseplate__container">
                            <div class="input-licenseplate__country">
                                <img src="assets/images/stars.svg" />
                                <span>NL</span>
                            </div>
                            <div class="input-licenseplate__number">
                                { getInputs(this.getValues, onChange) }
                            </div>
                        </div>
                    </div>
                )}
            </Tunnel.Consumer>
        );
    }
}
