import Div from '../baseUI/Div'
import React, { FC } from 'react'

const FlexiableSpace: FC<{ weight?: number }> = ({ weight = 1 }) => (
  <Div
    css={{
      flex: weight.toString()
    }}
  ></Div>
)
export default FlexiableSpace
