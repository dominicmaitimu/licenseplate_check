import { createProviderConsumer } from '@stencil/state-tunnel'
import { h } from '@stencil/core'
import { IProps } from './Interfaces'

export default createProviderConsumer<IProps>(
    {
        data: null,
        number: null,
    },
    (subscribe, child) => (
        <context-consumer
            renderer={ child }
            subscribe={ subscribe }
        />
    )
)
