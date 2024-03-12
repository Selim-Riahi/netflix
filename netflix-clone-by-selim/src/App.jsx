import { useState } from 'react'
import './App.css'
import 'swiper/swiper.min.css'
import {
  BrowserRouter as Router,
  Routes as Pages,
  Route as Page,
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Details from './components/Details'
import Trending from './components/Trending'
import Favorites from './components/Favorites'
import TvSeries from './components/TvSeries'
import Films from './components/Films'
import Error from './components/Error'
import { GlobalContext } from './GlobalContext/GlobalContext'

function App() {
  return (
    <GlobalContext>
      <div className="app">
        <Router>
          {/* <Navbar /> */}
          <Pages>
            <Page exact path="/home" element={<Home />} />
            <Page exact index path="/" element={<Login />} />
            <Page path="/login" element={<Login />}></Page>
            <Page path="/details/:id" element={<Details />} />
            <Page path="/trending" element={<Trending />} />
            <Page path="/favorites" element={<Favorites />} />
            <Page pahitth="/series" element={<TvSeries />} />
            <Page path="/genre/" element={<Films />} />
            <Page path="*" element={<Error />} />
          </Pages>
        </Router>
      </div>
    </GlobalContext>
  )
}

export default App
