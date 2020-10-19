import Div from './Div'
import React, { CSSProperties, FC } from 'react'

const Text: FC<{
  type?: 'long' | 'short'
  inline?: boolean
  fontSize?: CSSProperties['fontSize']
  color?: CSSProperties['backgroundColor']
}> = ({ type = 'short', inline = false, fontSize = 16, color = 'lightgray' }) => (
  <Div
    css={{
      fontSize,
      display: inline ? 'inline-block' : 'block',
      marginTop: 8,
      width: type === 'short' ? '5em' : '15em',
      height: '1em',
      backgroundColor: color
    }}
  ></Div>
)
export default Text
