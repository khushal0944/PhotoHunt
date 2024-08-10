"use client"
import Footer from '@/components/Footer/Footer'
import Header from '@/components/header/header'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

function Home() {
  return (
    <>
    <Provider store={store}>
        <Header />
        <Footer />
    </Provider>
    </>
  )
}

export default Home