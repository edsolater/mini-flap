import Div from '../baseUI/Div'
import React, { CSSProperties, FC } from 'react'

const Avatar: FC<{
  size?: CSSProperties['width']
  color?: CSSProperties['backgroundColor']
}> = ({ size = 40, color = 'gray' }) => (
  <Div
    css={{
      width: size,
      height: size,
      borderRadius: '50%',
      backgroundColor: color
    }}
  ></Div>
)
export default Avatar
