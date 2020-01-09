import { FunctionalComponent, h } from '@stencil/core'

interface IProps {
    children?: object
}

const wrapComponents = children => children.map(value => (
    <fieldset-default>
        { value }
    </fieldset-default>
))

export const FormDefault: FunctionalComponent<IProps> = (...props) => wrapComponents(props[1])
