import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import 'leaflet/dist/leaflet.css'
import React, { useEffect, useState } from 'react'
import Dialog from '../components/Dialog'
import Map from '../components/Map'

const HEADER_HEIGHT = 64 // TODO

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    })
)

interface IData {
    latitude: number
    longitude: number
    quantity: number
}

export default function Home() {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [data, setData] = useState<Array<IData>>([])

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        fetch('http://localhost:3001/residences') // FIXME .env
            .then((res) => res.json())
            .then((res) => {
                setData(res)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Mapa de Calor
                        </Typography>

                        <Button onClick={handleClickOpen} color="inherit">
                            Cadastrar
                        </Button>
                    </Toolbar>

                    <Dialog open={open} handleClose={handleClose} />
                </AppBar>
            </div>

            <div style={{ height: `calc(100vh - ${HEADER_HEIGHT}px)` }}>
                <Map data={data} />
            </div>
        </div>
    )
}
