import React from 'react'
import {createRoot} from 'react-dom/client'
import { MyCounter } from './src/MyCounter'

createRoot(document.getElementById('root'))
    .render(<React.StrictMode><MyCounter /></React.StrictMode>)
