import Div from '../baseUI/Div'
import React, { CSSProperties, FC } from 'react'

const Text: FC<{
  type?: 'long' | 'short'
  fontSize?: CSSProperties['fontSize']
  color?: CSSProperties['backgroundColor']
}> = ({ fontSize = 16, type = 'short', color = 'lightgray' }) => (
  <Div
    css={{
      fontSize,
      width: type === 'short' ? '5em' : '15em',
      height: '1em',
      backgroundColor: color
    }}
  ></Div>
)
export default Text
