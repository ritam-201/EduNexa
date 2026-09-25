import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import logo from './assets/EduNexa_logo.png'

function App() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Navbar */}
      <nav className="h-20 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          {/* EduNexa Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="EduNexa"
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
            >
              Home
            </a>

            <a
              href="#features"
              className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
            >
              Features
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
            >
              About
            </a>
          </div>

          {/* Login Button */}
          <button className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
            Login
          </button>

        </div>
      </nav>


      {/* Hero Section */}
      <section
        id="home"
        className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center"
      >

        <div className="mb-6 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
          🚀 Your smarter student journey starts here
        </div>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">
          Everything you need to
          <span className="text-blue-600"> succeed as a student.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          EduNexa brings your courses, learning resources, AI assistance,
          progress tracking and academic tools together in one simple place.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-blue-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700">
            Get Started
          </button>

          <button className="rounded-xl border border-slate-300 bg-white px-8 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-100">
            Explore Features
          </button>
        </div>

      </section>

    </div>
  )
}

export default App