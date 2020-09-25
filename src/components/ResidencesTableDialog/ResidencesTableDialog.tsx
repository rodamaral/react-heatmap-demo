import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import React, { useState } from 'react'
import Table from '../Table'

export default function Home({ data }: any) {
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

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <Table data={data} />
            </Dialog>
        </>
    )
}
