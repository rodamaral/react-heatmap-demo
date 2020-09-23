import React from 'react'
import { useTitle } from 'react-use'
import './App.css'
import Routes from './pages/Routes'

export default function App() {
    useTitle('react-redux-cra-starter-template') // TODO

    return (
        <main>
            <Routes />
        </main>
    )
}
