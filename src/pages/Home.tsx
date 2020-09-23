// import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import React from 'react'
import Map from '../components/Map'
import Dialog from '../components/Dialog'

export default function Home() {
    return (
        <div>
            <header style={{ height: 80 }}>
                Header <Dialog />
            </header>

            <div style={{ height: 'calc(100vh - 80px)', background: 'red' }}>
                <Map />
            </div>
        </div>
    )
}
