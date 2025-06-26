import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import {Header} from '../src/components/header.jsx'
import './global.css';
import style from './app.module.css';

function App() {

  return (
    <>
      <main>
        <Header />
        <section className={style.section}>
        </section>
        
      </main>
    </>
  )
}

export default App
