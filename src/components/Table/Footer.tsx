import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import React from 'react'
import { PostResidenceType } from '../../services/residences'
import TablePaginationActions from './TablePaginationActions'

const ROWS_PER_PAGE_LABEL = 'Linhas por página'

export default function Footer({
    rows,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
}: {
    rows: PostResidenceType[]
    page: any
    setPage: any
    rowsPerPage: any
    setRowsPerPage: any
}) {
    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    return (
        <TableFooter>
            <TableRow>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'Todas', value: -1 }]}
                    colSpan={3}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                        inputProps: { 'aria-label': ROWS_PER_PAGE_LABEL },
                        native: true,
                    }}
                    labelRowsPerPage={ROWS_PER_PAGE_LABEL}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                />
            </TableRow>
        </TableFooter>
    )
}
