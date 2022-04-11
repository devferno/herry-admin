import { Button, TableBody,Table,TableHead,TableRow,Paper,TableContainer, TableCell } from '@mui/material'
import React from 'react'
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const ProductTable = () => {
  return (
    <TableContainer component={Paper} sx={{my:3}}>
    <Table>
        <TableHead>
            <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell>Update</TableCell>
            <TableCell>Delete</TableCell>
            <TableCell>Details</TableCell>
        </TableHead>
        <TableBody>
        <TableRow>
            <TableCell>Sweat shirt </TableCell>
            <TableCell>SHIRT</TableCell>
            <TableCell>Men</TableCell>
            <TableCell>145</TableCell>
            <TableCell>23</TableCell>
            <TableCell><Button size="small"><ModeOutlinedIcon color="success"/></Button></TableCell>
            <TableCell><Button size="small"><DeleteOutlinedIcon color="error"/></Button></TableCell>
            <TableCell><Button size="small">More Details</Button></TableCell>
        </TableRow>
        </TableBody>
    </Table>
    </TableContainer>
  )
}

export default ProductTable