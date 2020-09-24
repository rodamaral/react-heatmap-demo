import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import 'leaflet/dist/leaflet.css'
import { useSnackbar } from 'notistack'
import React, { useCallback, useEffect, useState } from 'react'
import Dialog from '../components/Dialog'
import Map, { IData } from '../components/Map'
import { getResidences } from '../services/residences'

const HEADER_HEIGHT = 64

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        page: {
            display: 'flex',
            flexDirection: 'column',
        },
        root: {
            flexGrow: 1,
        },
        appBar: {
            height: HEADER_HEIGHT,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        mapWrapper: {
            height: `calc(100vh - ${HEADER_HEIGHT}px)`,
        },
    })
)

export default function Home() {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [data, setData] = useState<IData[]>([])
    const { enqueueSnackbar } = useSnackbar()

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const loadData = useCallback(async () => {
        try {
            setData(await getResidences())
        } catch (error) {
            console.error(error)
            enqueueSnackbar('Desculpe... Houve um erro de conexão', { variant: 'error' })
        }
    }, [enqueueSnackbar])

    useEffect(() => {
        loadData()
    }, [loadData])

    return (
        <div className={classes.page}>
            <div className={classes.root}>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Mapa de Calor
                        </Typography>

                        <Button onClick={handleClickOpen} color="inherit">
                            Cadastrar
                        </Button>
                    </Toolbar>

                    <Dialog open={open} handleClose={handleClose} loadData={loadData} />
                </AppBar>
            </div>

            <div className={classes.mapWrapper}>
                <Map data={data} />
            </div>
        </div>
    )
}
