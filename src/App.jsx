import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Component/Nav/Layout/Layout'

const Home = React.lazy(() => import('./Component/Home/Home'))
const Blog = React.lazy(() => import('./Component/Blog/Blog'))
const Page = React.lazy(() => import('./Component/Blog/page/Page'))
const About = React.lazy(() => import('./Component/About/About'))

const Loading = () => <div className="min-h-screen bg-black text-white flex items-center justify-center">جاري التحميل...</div>

const router = createBrowserRouter([
  {
    path: '/', element: <Layout />, children: [
      { index: true, element: <Suspense fallback={<Loading />}><Home /></Suspense> },
      { path: 'blog', element: <Suspense fallback={<Loading />}><Blog /></Suspense> },
      { path: 'blog/:slug', element: <Suspense fallback={<Loading />}><Page /></Suspense> },
      { path: 'about', element: <Suspense fallback={<Loading />}><About /></Suspense> },
      { path: '*', element: <h1 className="text-white text-center mt-20">Page not found</h1> }
    ]
  }
])

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

