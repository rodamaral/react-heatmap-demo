import { FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import React, { ChangeEvent, useState } from 'react'
import Cep from '../Cep'
import Coordinate from '../Cep/Coordinate'

export default function FormDialog() {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState<string>('')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open form dialog
            </Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>Informe os dados da residência</DialogContentText>

                    <Cep />

                    <TextField margin="dense" id="number" label="Número" type="number" fullWidth />

                    <Coordinate />

                    <Coordinate />

                    <TextField
                        margin="dense"
                        id="number"
                        label="Quantidade de residentes"
                        type="number"
                        fullWidth
                    />

                    <FormControl>
                        <InputLabel htmlFor="my-input">Email address</InputLabel>

                        <Input id="my-input" aria-describedby="my-helper-text" />

                        <FormHelperText id="my-helper-text">
                            We'll never share your email.
                        </FormHelperText>
                    </FormControl>

                    <TextField
                        error
                        id="standard-error-helper-text"
                        label="Error"
                        defaultValue="Hello World"
                        helperText="Incorrect entry."
                    />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>

                    <Button onClick={handleClose} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
