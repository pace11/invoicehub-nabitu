'use client'

import { useQueriesMutation } from '@/hooks/useQueriesMutation'
import { TypeInvoicesResponse, TypeListInvoices } from '@/lib/types'
import { formatCurrency, mappingStatus } from '@/utils'
import {
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Container,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { blueGrey, grey } from '@mui/material/colors'
import dayjs from 'dayjs'

export default function List() {
  const { data, loading } = useQueriesMutation<TypeInvoicesResponse>({
    endpoint: '/invoices',
  })

  return (
    <Container>
      <Card>
        <CardContent>
          <TableContainer
            component={Paper}
            sx={{
              boxShadow: 'none',
              borderRadius: 0,
              maxHeight: '600px',
            }}
          >
            <Table>
              <TableHead
                sx={{ backgroundColor: grey[50], position: 'sticky', top: 1 }}
              >
                <TableRow>
                  <TableCell>Invoice</TableCell>
                  <TableCell>Due Date</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              {loading ? (
                <TableBody>
                  <TableRow>
                    <TableCell
                      component="td"
                      scope="row"
                      colSpan={5}
                      sx={{ textAlign: 'center' }}
                    >
                      <CircularProgress size={40} />
                    </TableCell>
                  </TableRow>
                </TableBody>
              ) : (
                <TableBody>
                  {data?.data?.map((row: TypeListInvoices) => (
                    <TableRow
                      key={row._id}
                      sx={{
                        '&:last-child td': {
                          borderBottom: 'none',
                        },
                      }}
                    >
                      <TableCell component="td" scope="row">
                        <Stack>
                          <Typography>{row.name}</Typography>
                          <Typography fontSize="9pt" color={blueGrey[500]}>
                            {row.invoice}
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        {dayjs(new Date(row.due_date)).format('MMM DD,YYYY')}
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={row.status}
                          color={mappingStatus(
                            row.status as 'paid' | 'unpaid' | 'pending',
                          )}
                        />
                      </TableCell>
                      <TableCell>{formatCurrency(row.amount)}</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                  )) || []}
                </TableBody>
              )}
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Container>
  )
}
