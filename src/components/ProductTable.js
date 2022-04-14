import { Button, TableBody,Table,TableHead,TableRow,Paper,TableContainer, TableCell, Typography } from '@mui/material';

import axios from "axios";

import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {Buffer }from "buffer";

const CustomTableCellHeader=({children,...rest})=>{
  
  return(
    <TableCell  props={rest}>
      <Typography variant="subtitle2" color="GrayText" sx={{fontWeight:"bold",textTransform:"capitalize"}}>{children}</Typography>
    </TableCell>
  )
}

const ProductTable = ({filtered}) => {
  
  const deleteProduct =(id)=>(e)=>{
    const done = window.confirm("do you want to delete the product");
    
    if(done){
      axios.delete(`/product/${id}`,{headers:{authorization:`Bearer ${localStorage.getItem("access-admin")}`}}).then((res)=>console.log(res.data)).catch(err=>console.log(err));
     
    }
    //
  }

  return (
    <TableContainer component={Paper} elevation={0} variant="outlined" sx={{my:3}}>
    <Table>
        <TableHead>
          <TableRow>
        <CustomTableCellHeader>
          image
         </CustomTableCellHeader>
            <CustomTableCellHeader>Name</CustomTableCellHeader>
            <CustomTableCellHeader>Description</CustomTableCellHeader>
            <CustomTableCellHeader>Price</CustomTableCellHeader>
            <CustomTableCellHeader>Stock</CustomTableCellHeader>
            <CustomTableCellHeader>type</CustomTableCellHeader>
            <CustomTableCellHeader>gender</CustomTableCellHeader>
            <CustomTableCellHeader size="small">update</CustomTableCellHeader>
            <CustomTableCellHeader >delete</CustomTableCellHeader>
            </TableRow>
        </TableHead>
        <TableBody>
       {filtered.map(item=><TableRow key={item._id} sx={{borderCollapse:"unset"}}>
          <TableCell> <img src={`data:image/jpeg;base64,${Buffer.from(item.images[0].data.data).toString('base64')}`} width="50px" height="50px" style={{objectFit:"cover"}} alt=""/></TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell sx={{fontWeight:"light"}}>{item.description}</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>{item.price}</TableCell>
            <TableCell>{item.stock}</TableCell>
            <TableCell>{item.type}</TableCell>
            <TableCell>{item.gender}</TableCell>
            <TableCell align="left" size="small"><Button size="small" endIcon={<ModeOutlinedIcon/>} variant='outlined' color="success">update</Button></TableCell>
            <TableCell align="left" size="small"><Button onClick={deleteProduct(item._id)} endIcon={<DeleteOutlinedIcon/>} color="error" variant="contained" disableElevation size="small">delete</Button></TableCell>
            
        </TableRow>)}
        </TableBody>
    </Table>
    </TableContainer>
  )
}

export default ProductTable