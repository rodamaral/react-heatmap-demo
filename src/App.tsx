import React from 'react'
import { useTitle } from 'react-use'
import './App.css'
import Routes from './pages/Routes'

export default function App() {
    useTitle('Mapa de calor de residências')

    return (
        <main>
            <Routes />
        </main>
    )
}
