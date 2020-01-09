import { Component, h } from '@stencil/core'

@Component({
    tag: 'page-home',
})
export class PageHome {
    render() {
        return (
            <template-default>
                <form-licenseplate />
            </template-default>
        )
    }
}
