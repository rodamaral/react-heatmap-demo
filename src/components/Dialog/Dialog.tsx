import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import { useSnackbar } from 'notistack'
import React, { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { postResidence, PostResidenceType } from '../../services/residences'
import DialogContent from './DialogContent'

interface FormDialogProps {
    open: boolean
    handleClose: () => void
    loadData: () => void
}

type InputsString = {
    cep: string
    houseNumber: string
    latitude: string
    longitude: string
    quantity: string
}

const convert = (data: InputsString): PostResidenceType => ({
    cep: data.cep.replaceAll('.', '').replaceAll('-', ''),
    houseNumber: parseInt(data.houseNumber, 10),
    latitude: parseFloat(data.latitude.replaceAll(',', '.')),
    longitude: parseFloat(data.longitude.replaceAll(',', '.')),
    quantity: parseInt(data.quantity, 10),
})

export default function FormDialog({ open, handleClose, loadData }: FormDialogProps) {
    const [status, setStatus] = useState('idle')
    const { enqueueSnackbar } = useSnackbar()
    const { register, handleSubmit, errors } = useForm<PostResidenceType>()
    const disabled = useMemo(() => status !== 'pending', [status])

    const onSubmit = async (data: InputsString) => {
        let convertedData
        try {
            convertedData = convert(data)
        } catch (error) {
            console.error(error)
            enqueueSnackbar('Erro de validação', { variant: 'error' })
            return
        }

        try {
            setStatus('pending')
            await postResidence(convertedData)
            setStatus('success')
            enqueueSnackbar('Dados cadastrados com sucesso', { variant: 'success' })
            loadData()
        } catch (error) {
            setStatus('error')
            enqueueSnackbar('Erro ao salvar dados', { variant: 'error' })
            console.error(error)
        }
    }

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                autoComplete="off"
                aria-disabled={disabled}
            >
                <DialogTitle id="form-dialog-title">Cadastro</DialogTitle>

                <DialogContent errors={errors} register={register} disabled={disabled} />

                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>

                    <Button type="submit" disabled={disabled} color="primary">
                        Cadastrar
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}
