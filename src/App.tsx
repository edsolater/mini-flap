import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

import AppNavbar from 'views/TopNavbar'
import AsideMenu from 'views/AsideMenu'
import TopicList from 'views/TopicList'
import ArticleDetail from 'views/ArticleDetail'
import ArticleList from 'views/ArticleList'

export default function App() {
  return (
    <Router>
      <AppNavbar />
      <AsideMenu />
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
    </Router>
  )
}

render(<App />, document.getElementById('app'))
