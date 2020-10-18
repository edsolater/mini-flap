import React, { FC } from 'react'

import Div from 'baseUI/Div'
import { FlexiableSpace, Avatar, Text, Logo } from 'placeholderUI'
import { alignedFlexbox } from 'styles/base'
import { navTopBoard } from 'styles/boards'

// const styles: StyleNames<['board']> = {
//   board: {
//     height: 48,
//     padding: 8,
//     position: 'sticky',
//     top: 0,
//     display: 'flex',
//     gap: 8,
//     alignItems: 'center',
//     backgroundColor: 'white',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1)'
//   }
// }

const TopNavbar: FC<{}> = () => (
  <Div css={[alignedFlexbox, navTopBoard]}>
    {/* TODO 这也要封成一个组件 */}
    <Logo />
    <FlexiableSpace />
    <Avatar />
    <Text />
  </Div>
)

export default TopNavbar
