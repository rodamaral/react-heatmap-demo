import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import 'leaflet/dist/leaflet.css'
import { useSnackbar } from 'notistack'
import React, { useCallback, useEffect, useState } from 'react'
import AppBar from '../components/AppBar'
import Map, { IData } from '../components/Map'
import { getResidences } from '../services/residences'

const HEADER_HEIGHT = 64

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        page: {
            display: 'flex',
            flexDirection: 'column',
        },
        mapWrapper: {
            height: `calc(100vh - ${HEADER_HEIGHT}px)`,
        },
    })
)

export default function Home() {
    const classes = useStyles()
    const [data, setData] = useState<IData[]>([])
    const { enqueueSnackbar } = useSnackbar()

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
            <AppBar />

            <div className={classes.mapWrapper}>
                <Map data={data} />
            </div>
        </div>
    )
}
