import { Button } from '@material-ui/core'
import 'leaflet/dist/leaflet.css'
import React, { useState } from 'react'
import Dialog from '../components/Dialog'
import Map from '../components/Map'

const HEADER_HEIGHT = 50 // TODO

export default function Home() {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <header style={{ height: HEADER_HEIGHT, background: '#ddf' }}>
                Header{' '}
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    Open form dialog
                </Button>
                <Dialog open={open} handleClose={handleClose} />
            </header>

            <div style={{ height: `calc(100vh - ${HEADER_HEIGHT}px)` }}>
                <Map />
            </div>
        </div>
    )
}
