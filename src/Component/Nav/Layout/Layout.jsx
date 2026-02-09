import React from 'react'
import Nav from '../Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../../Footer/Footer'

export default function Layout() {
  return (
  <>
  <Nav/>
  <main className="pt-20">
        <Outlet />
      </main>
  <Footer/>
  </>
  )
}
