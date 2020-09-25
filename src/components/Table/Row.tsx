import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import React from 'react'
import { PostResidenceType } from '../../services/residences'

export default function Row({ row }: { row: PostResidenceType }) {
    return (
        <TableRow key={row.id}>
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
