/** @jsx jsx */
import { jsx, css, SerializedStyles } from '@emotion/core'
import { ForwardRefRenderFunction } from 'react'

/**
 * 在`<div>`之上提供 emotion 的 css 属性
 */
const Div: ForwardRefRenderFunction<
  any,
  JSX.IntrinsicElements['div'] & { css: SerializedStyles | SerializedStyles[] }
> = (props, ref) => <div ref={ref} css={css(props.css)}></div>

export default Div
