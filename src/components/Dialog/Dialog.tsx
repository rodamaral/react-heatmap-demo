import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import React from 'react'
import { useForm } from 'react-hook-form'
import Coordinate from '../Coordinate/Coordinate'
import MaskedTextField from '../MaskedTextField'

interface FormDialogProps {
    open: boolean
    handleClose: () => void
}

type Inputs = {
    cep: number
    houseNumber: number
    quantity: number
    latitude: number
    longitude: number
    quantidade: number
}

export default function FormDialog({ open, handleClose }: FormDialogProps) {
    const { register, handleSubmit, errors } = useForm<Inputs>()

    const onSubmit = (data: Inputs) => console.log(data)

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
                <DialogTitle id="form-dialog-title">Cadastro</DialogTitle>

                <DialogContent>
                    <DialogContentText>Informe os dados da residência</DialogContentText>

                    <MaskedTextField
                        name="cep"
                        inputRef={register({
                            required: 'Campo obrigatório',
                            pattern: {
                                value: /[\d]{2}.[\d]{3}-[\d]{3}/,
                                message: 'CEP inválido',
                            },
                        })}
                        mask="00.000-000"
                        label="CEP"
                        id="formatted-text-mask-input"
                        error={errors.cep !== undefined}
                        helperText={errors.cep?.message}
                        radix="."
                        margin="dense"
                        fullWidth
                    />

                    <TextField
                        name="houseNumber"
                        inputRef={register({
                            required: 'Campo obrigatório',
                            min: {
                                value: 0,
                                message: 'Número de casa deve ser inteiro positivo',
                            },
                        })}
                        label="Número"
                        id="number"
                        error={errors.houseNumber !== undefined}
                        helperText={errors.houseNumber?.message}
                        margin="dense"
                        type="number"
                        fullWidth
                    />

                    <Coordinate
                        name="latitude"
                        inputRef={register({
                            required: 'Campo obrigatório',
                        })}
                        label="Latitude"
                        id="formatted-text-mask-input"
                        min={-90}
                        max={90}
                        error={errors.latitude !== undefined}
                        helperText={errors.latitude?.message}
                        margin="dense"
                        fullWidth
                    />

                    <Coordinate
                        name="longitude"
                        inputRef={register({
                            required: 'Campo obrigatório',
                        })}
                        label="Longitude"
                        id="formatted-text-mask-input"
                        min={-180}
                        max={180}
                        error={errors.longitude !== undefined}
                        helperText={errors.longitude?.message}
                        margin="dense"
                        fullWidth
                    />

                    <TextField
                        name="quantity"
                        inputRef={register({ required: true })}
                        label="Quantidade de residentes"
                        id="number"
                        error={errors.quantity !== undefined}
                        helperText={errors.quantity?.message}
                        type="number"
                        margin="dense"
                        fullWidth
                    />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>

                    <Button type="submit" color="primary">
                        Cadastrar
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}
