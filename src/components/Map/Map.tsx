import { createStyles, makeStyles } from '@material-ui/core/styles'
import 'leaflet/dist/leaflet.css'
import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import HeatmapLayer from 'react-leaflet-heatmap-layer'

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            height: '100%',
            width: '100%',
        },
    })
)
export interface IData {
    latitude: number
    longitude: number
    quantity: number
}

const POSITION = { lat: 51.505, lng: -0.09 }

const MapWrapper = ({ data }: { data: IData[] }) => {
    const classes = useStyles()

    return (
        <Map
            className={classes.root}
            center={POSITION}
            zoom={13}
            onclick={(event) => console.log('event', event)}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />

            <Marker position={POSITION}>
                <Popup>
                    A pretty CSS3 popup.
                    <br />
                    Easily customizable.
                </Popup>
            </Marker>

            <HeatmapLayer
                fitBoundsOnLoad
                fitBoundsOnUpdate
                points={data}
                longitudeExtractor={(m: IData) => m.longitude}
                latitudeExtractor={(m: IData) => m.latitude}
                intensityExtractor={(m: IData) => m.quantity}
            />
        </Map>
    )
}

export default MapWrapper
