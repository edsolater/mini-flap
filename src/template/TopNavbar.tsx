import React, { FC } from 'react'
import Div from 'baseUI/Div'
import { StyleNames } from 'typings/tools'

const styles: StyleNames<['board']> = {
  board: {
    backgroundColor: 'white'
  }
}

const TopNavbar: FC<{}> = () => {
  return <Div css={styles.board}>hello</Div>
}

// export default TopNavbar
