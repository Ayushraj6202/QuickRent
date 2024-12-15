import { useState } from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header/>
      <main className=''>
        <Outlet/>
      </main>
    </>
  )
}

export default App
