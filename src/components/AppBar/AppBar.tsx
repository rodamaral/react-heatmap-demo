import MuiAppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import React, { useState } from 'react'
import Dialog from '../Dialog'

const HEADER_HEIGHT = 64

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        appBar: {
            height: HEADER_HEIGHT,
        },
        title: {
            flexGrow: 1,
        },
    })
)

export default function Home({ loadData }: any) {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div className={classes.root}>
            <MuiAppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Mapa de Calor
                    </Typography>

                    <Button onClick={handleClickOpen} color="inherit">
                        Cadastrar
                    </Button>
                </Toolbar>

                <Dialog open={open} handleClose={handleClose} loadData={loadData} />
            </MuiAppBar>
        </div>
    )
}
