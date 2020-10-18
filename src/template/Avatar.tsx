import Div from 'baseUI/Div'
import React, { CSSProperties, FC } from 'react'

const PlaceholderAvatar: FC<{
  size?: number
  color?: CSSProperties['backgroundColor']
}> = ({ size = 40, color = 'lightgray' }) => (
  <Div
    css={{
      width: size,
      height: size,
      borderRadius: '50%',
      backgroundColor: color
    }}
  ></Div>
)
// export default PlaceholderAvatar
