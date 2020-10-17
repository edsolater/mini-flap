import React, { FC } from 'react'
import Div from 'baseUI/Div'
import { StyleNames } from 'utils/type-functions'

const styles: StyleNames<['board']> = {
  board: {
    height: 48,
    width: '100%',
    padding: 8,
    position: 'sticky',
    top: 0,

    display: 'flex',
    alignItems: 'center',

    backgroundColor: 'lightgray'
  }
}

const TopNavbar: FC<{}> = () => {
  return <Div css={styles.board}>hello</Div>
}

export default TopNavbar
