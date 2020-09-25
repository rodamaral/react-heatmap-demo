import MuiAppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import React, { useState } from 'react'
import Dialog from '../Dialog'
import ResidencesTableDialog from '../ResidencesTableDialog'

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

// FIXME
export default function AppBar({ data, loadData }: any) {
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

                    <ResidencesTableDialog data={data} />

                    <Button onClick={handleClickOpen} color="inherit">
                        Cadastrar
                    </Button>
                    <Dialog open={open} handleClose={handleClose} loadData={loadData} />
                </Toolbar>
            </MuiAppBar>
        </div>
    )
}
