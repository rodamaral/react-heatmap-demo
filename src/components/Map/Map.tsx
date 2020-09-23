import React from 'react'
import PropTypes from 'prop-types'
import './Map.styles'

//import { Test } from './Map.styles';

import 'leaflet/dist/leaflet.css'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import HeatmapLayer from 'react-leaflet-heatmap-layer'
import { addressPoints } from '../../utils/data'

const position = { lat: 51.505, lng: -0.09 }

const MapWrapper = () => (
    <Map style={{ width: '100%', height: 512 }} center={position} zoom={13}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
            <Popup>
                A pretty CSS3 popup.
                <br />
                Easily customizable.
            </Popup>
        </Marker>

        <HeatmapLayer
            fitBoundsOnLoad
            // fitBoundsOnUpdate
            points={addressPoints}
            longitudeExtractor={(m: any) => m[1]}
            latitudeExtractor={(m: any) => m[0]}
            intensityExtractor={(m: any) => parseFloat(m[2])}
        />
    </Map>
)

MapWrapper.propTypes = {
    // bla: PropTypes.string,
}

MapWrapper.defaultProps = {
    // bla: 'test',
}

export default MapWrapper
