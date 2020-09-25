import { TableHead } from '@material-ui/core'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import React from 'react'

export default function Head() {
    return (
        <TableHead>
            <TableRow>
                <TableCell>CEP</TableCell>
                <TableCell align="right">Número</TableCell>
                <TableCell align="right">Latitude</TableCell>
                <TableCell align="right">Longitude</TableCell>
                <TableCell align="right">Quantidade de Residentes</TableCell>
            </TableRow>
        </TableHead>
    )
}
