import MuiDialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import TextField from '@material-ui/core/TextField'
import React from 'react'
import { UseFormMethods } from 'react-hook-form'
import Coordinate from '../Coordinate/Coordinate'
import MaskedTextField from '../MaskedTextField'

interface DialogContentProps {
    errors: UseFormMethods['errors']
    register: UseFormMethods['register']
    disabled?: boolean
}

export default function DialogContent({ disabled, errors, register }: DialogContentProps) {
    return (
        <MuiDialogContent>
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
                disabled={disabled}
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
                disabled={disabled}
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
                disabled={disabled}
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
                disabled={disabled}
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
                disabled={disabled}
            />
        </MuiDialogContent>
    )
}
