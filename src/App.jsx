import { useState } from 'react'
import people from './data'
import './App.css'
import People from './components/People'
import Carousel from '../Carousel'

function App() {
  


  return (
    <div className="wrapper">
      {/* <People /> */}
      <Carousel/>
    </div>
  )
}

export default App
