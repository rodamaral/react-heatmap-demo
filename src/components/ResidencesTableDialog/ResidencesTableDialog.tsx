import { DialogActions, DialogContent, DialogTitle } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import React, { useState } from 'react'
import { PostResidenceType } from '../../services/residences'
import Table from '../Table'

export default function Home({ data }: { data: PostResidenceType[] }) {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <Button onClick={handleClickOpen} color="inherit">
                Ver residências
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="xl"
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Residências</DialogTitle>

                <DialogContent>
                    <Table rows={data} />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Fechar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
