import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

import AppNavbar from 'views/TopNavbar'
import AsideMenu from 'views/AsideMenu'
import TopicList from 'views/TopicList'
import ArticleDetail from 'views/ArticleDetail'
import ArticleList from 'views/ArticleList'
import { Div } from 'baseUI'

export default function App() {
  return (
    <Router>
      {/* TODO: 抽象成`<Grid>`组件 */}
      <Div
        css={{
          display: 'grid',
          gridTemplate: `
            'nav  nav    ' auto
            'menu content' 1fr / 200px 1fr`,
          height: '100vh'
        }}
      >
        <Div
          css={{
            gridArea: 'nav'
          }}
        >
          <AppNavbar />
        </Div>
        <Div
          css={{
            gridArea: 'menu'
          }}
        >
          <AsideMenu />
        </Div>
        <Div
          css={{
            gridArea: 'content'
          }}
        >
          <Switch>
            <Route path='/topicList'>
              <TopicList />
            </Route>
            <Route path='/articleList'>
              <ArticleList />
            </Route>
            <Route path='/articleDetail'>
              <ArticleDetail />
            </Route>
          </Switch>
        </Div>
      </Div>
    </Router>
  )
}

render(<App />, document.getElementById('app'))
