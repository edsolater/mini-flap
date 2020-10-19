import React, { FC, ReactNode } from 'react'

import { Text, Div, Details } from 'baseUI'

const AsideMenu: FC<{}> = () => (
  <Div
    css={{
      background: '#999',
      height: '100%',
      display: 'flow-root'
    }}
  >
    <Text />
    <Text />
    {/*  */}
    <Details title={<Text inline />} open>
      <Text />
      <Text />
      <Text />
      <Text />
    </Details>

    <Details title={<Text inline />} open>
      <Text />
      <Text />
      <Text />
      <Text />
    </Details>
  </Div>
)
export default AsideMenu
