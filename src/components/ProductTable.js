import { Button, TableBody,Table,TableHead,TableRow,Paper,TableContainer, TableCell } from '@mui/material';

import axios from "axios";

import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {Buffer }from "buffer";

const ProductTable = ({filtered}) => {
  
  const deleteProduct =(id)=>(e)=>{
    const done = window.confirm("do you want to delete the product");
    
    if(done){
      axios.delete(`/product/${id}`,{headers:{authorization:`Bearer ${localStorage.getItem("access-admin")}`}}).then((res)=>console.log(res.data)).catch(err=>console.log(err));
     
    }
    //
  }

  return (
    <TableContainer component={Paper} sx={{my:3}}>
    <Table>
        <TableHead>
        <TableCell>
          image
         </TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>Details</TableCell>
        </TableHead>
        <TableBody>
       {filtered.map(item=><TableRow key={item._id}>
          <TableCell> <img src={`data:image/jpeg;base64,${Buffer.from(item.images[0].data.data).toString('base64')}`} width="50px" alt=""/></TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>{item.stock}</TableCell>
            <TableCell><Button size="small"><ModeOutlinedIcon color="success"/></Button></TableCell>
            <TableCell><Button onClick={deleteProduct(item._id)} size="small"><DeleteOutlinedIcon color="error"/></Button></TableCell>
            <TableCell><Button size="small">More Details</Button></TableCell>
        </TableRow>)}
        </TableBody>
    </Table>
    </TableContainer>
  )
}

export default ProductTable