import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import MuiTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import React from 'react'
import { PostResidenceType } from '../../services/residences'
import Footer from './Footer'
import Head from './Head'
import Row from './Row'

const useStyles = makeStyles({
    table: {
        minWidth: 500,
    },
})

export default function Table({ rows }: { rows: PostResidenceType[] }) {
    const classes = useStyles()
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(5)
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

    return (
        <TableContainer component={Paper}>
            <MuiTable className={classes.table} aria-label="custom pagination table">
                <Head />

                <TableBody>
                    {(rowsPerPage > 0
                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rows
                    ).map((row) => (
                        <Row key={row.id} row={row} />
                    ))}

                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>

                <Footer
                    rows={rows}
                    page={page}
                    setPage={setPage}
                    rowsPerPage={rowsPerPage}
                    setRowsPerPage={setRowsPerPage}
                />
            </MuiTable>
        </TableContainer>
    )
}
