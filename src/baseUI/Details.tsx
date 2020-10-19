/** @jsx jsx */
import { jsx, css, Interpolation } from '@emotion/core'

import { forwardRef, ForwardRefRenderFunction, ReactNode } from 'react'
import { MayArray } from 'typings/tools'

/**
 * 在`<details>`之上提供 emotion 的 css 属性
 */
const Details: ForwardRefRenderFunction<
  any,
  JSX.IntrinsicElements['details'] & { title?: ReactNode; css?: MayArray<Interpolation> }
> = ({ title = 'Detail Title', css: emotionCss, children, ...restProps }, ref) => (
  <details ref={ref} css={css(emotionCss)} {...restProps}>
    <summary>{title}</summary>
    {children}
  </details>
)

export default forwardRef(Details)
