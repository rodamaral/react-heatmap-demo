import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import { useSnackbar } from 'notistack'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Coordinate from '../Coordinate/Coordinate'
import MaskedTextField from '../MaskedTextField'

interface FormDialogProps {
    open: boolean
    handleClose: () => void
    loadData: () => void
}

type Inputs = {
    cep: string
    houseNumber: number
    latitude: number
    longitude: number
    quantity: number
}

type InputsString = {
    cep: string
    houseNumber: string
    latitude: string
    longitude: string
    quantity: string
}

const convert = (data: InputsString): Inputs => ({
    cep: data.cep.replaceAll('.', '').replaceAll('-', ''),
    houseNumber: parseInt(data.houseNumber, 10),
    latitude: parseFloat(data.latitude.replaceAll(',', '.')),
    longitude: parseFloat(data.longitude.replaceAll(',', '.')),
    quantity: parseInt(data.quantity, 10),
})

export default function FormDialog({ open, handleClose, loadData }: FormDialogProps) {
    const [status, setStatus] = useState('idle')
    const { enqueueSnackbar } = useSnackbar()
    const { register, handleSubmit, errors } = useForm<Inputs>()

    const onSubmit = (data: InputsString) => {
        let foo
        try {
            foo = convert(data)
            console.log('onSubmit', foo)
        } catch (error) {
            console.error(error)
            return
        }

        setStatus('pending')
        fetch(
            'http://localhost:3001/residences', // FIXME .env
            {
                method: 'POST',
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(foo),
            }
        )
            .then((res) => res.json())
            .then((res) => {
                setStatus('success')
                console.log('res', res)
                enqueueSnackbar('Dados cadastrados com sucesso', { variant: 'success' })
                loadData()
            })
            .catch((error) => {
                setStatus('error')
                enqueueSnackbar('Erro ao salvar dados', { variant: 'error' })
                console.error(error)
            })
    }

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                autoComplete="off"
                aria-disabled={status === 'pending'}
            >
                <DialogTitle id="form-dialog-title">Cadastro</DialogTitle>

                <DialogContent>
                    <DialogContentText>Informe os dados da residência {status}</DialogContentText>

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
