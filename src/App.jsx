import React, { useEffect } from 'react'
// router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// pwa
import ReactPWAInstallProvider, { useReactPWAInstall } from 'react-pwa-install'
// pages
import Home from './pages/Home'
import Error404 from './pages/Error404'
import Products from './pages/Products'
import Pcms from './pages/Pcms'
import Three from './pages/Three'
import Experience from './pages/Experience'
import Android from './pages/Android'
import Light from './pages/Light'
import Chapter from './pages/Chapter'
import Socket from './pages/Socket'
import Excel from './pages/Excel'
import Watch from './pages/Watch'
import Jewelry from './pages/Jewelry'
import Apviz from './pages/Apviz'
import GoogleMap from './pages/GoogleMap'
import PWA from './pages/PWA'
import Emotion from './pages/Emotion'

function App() {
  return (
    <ReactPWAInstallProvider enableLogging>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/:lang/home">
            <Home />
          </Route>
          <Route path="/:lang/products/:category">
            <Products />
          </Route>
          <Route path="/:lang/pcms">
            <Pcms />
          </Route>
          <Route path="/three">
            <Three />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/android">
            <Android />
          </Route>
          <Route path="/light">
            <Light />
          </Route>
          <Route path="/chapter/:id">
            <Chapter />
          </Route>
          <Route path="/socket">
            <Socket />
          </Route>
          <Route path="/excel">
            <Excel />
          </Route>
          <Route path="/:lang/watch/home">
            <Jewelry mode="watch" />
          </Route>
          <Route path="/:lang/jewelry/home">
            <Jewelry mode="jewelry" />
          </Route>
          <Route path="/apviz">
            <Apviz />
          </Route>
          <Route path="/google-map">
            <GoogleMap />
          </Route>
          <Route path="/pwa">
            <PWA />
          </Route>
          <Route path="/emotion">
            <Emotion />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </Router>
    </ReactPWAInstallProvider>
  )
}

export default App
