import React from "react"

import './App.css'

import Header from './sections/header/header'
import Spotlight from './sections/spotlight/spotlight'
import Main from './sections/main/main'
import Gallery from './sections/gallery/gallery'

export default function App() {
  return (
    <>
      <Header />
      <Spotlight />
      <Main />
      <Gallery />
      <div className='lp-divider' />
    </>
  )
}
