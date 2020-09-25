import IconButton from '@material-ui/core/IconButton'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import DeleteIcon from '@material-ui/icons/Delete'
import { useSnackbar } from 'notistack'
import React from 'react'
import { deleteResidence, PostResidenceType } from '../../services/residences'

interface RowProps {
    row: PostResidenceType
    loadData: () => void
}

export default function Row({ row, loadData }: RowProps) {
    const { enqueueSnackbar } = useSnackbar()

    const onClick = async () => {
        try {
            if (row.id != null) {
                await deleteResidence(row.id)
                enqueueSnackbar('Deletada com sucesso', { variant: 'success' })
                loadData()
            }
        } catch (error) {
            console.error(error)
            enqueueSnackbar('Erro ao deletar residência', { variant: 'error' })
        }
    }

    return (
        <TableRow key={row.id}>
            <TableCell component="th" scope="row">
                <IconButton onClick={onClick} aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </TableCell>

            <TableCell component="th" scope="row">
                {row.cep || '-'}
            </TableCell>

            <TableCell style={{ width: 100 }} align="right">
                {row.houseNumber || '-'}
            </TableCell>

            <TableCell style={{ width: 200 }} align="right">
                {row.latitude}
            </TableCell>

            <TableCell style={{ width: 200 }} align="right">
                {row.longitude}
            </TableCell>

            <TableCell style={{ width: 160 }} align="right">
                {row.quantity}
            </TableCell>
        </TableRow>
    )
}
