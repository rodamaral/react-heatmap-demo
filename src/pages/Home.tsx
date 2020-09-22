import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import React from 'react'
import { useMount } from 'react-use'

export default function Home() {
    useMount(() => {
        console.log(document.getElementById('map')) // FIXME

        const map = L.map('map').setView([51.505, -0.09], 13)

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution:
                '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
        }).addTo(map)

        // show the scale bar on the lower left corner
        L.control.scale().addTo(map)

        const marker = L.marker([51.5, -0.09]).addTo(map)

        const circle = L.circle([51.508, -0.11], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500,
        }).addTo(map)

        const polygon = L.polygon([
            [51.509, -0.08],
            [51.503, -0.06],
            [51.51, -0.047],
        ]).addTo(map)

        marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup()
        circle.bindPopup('I am a circle.')
        polygon.bindPopup('I am a polygon.')

        L.popup().setLatLng([51.5, -0.09]).setContent('I am a standalone popup.').openOn(map)
    })

    return (
        <div>
            Home
            <div id="map" style={{ width: 1024, height: 512 }} />
        </div>
    )
}
