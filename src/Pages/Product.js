import {useEffect,useState} from "react";

import { Box, Button,TextField } from "@mui/material";
import { ShoppingBagOutlined ,SearchOutlined} from "@mui/icons-material";
import ProductTable from "../components/ProductTable";
import { Link } from "react-router-dom";
import axios from "axios"

const Product = () => {
  const [products,setProducts] = useState([]);
  const [filtered,setFiltered] = useState([]);
  const [name,setName] = useState("");

  useEffect(()=>{
    axios.get("/product/").then(res=>{setProducts(res.data);setFiltered(res.data)}).catch(err=>console.log(err));
  },[]);



  const filterProduct=(e)=>{
    e.preventDefault();
    let newProducts = products.filter(item=>item.name===name);
    setFiltered(newProducts);
  }
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/products/add" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            endIcon={<ShoppingBagOutlined />}
            sx={{ background: (theme) => theme.palette.primary.dark }}
            
            disableElevation
          >
            Add Product
          </Button>
        </Link>
        <Box component="form" onSubmit={filterProduct} sx={{display:"flex",alignItems:"center"}}>
        <TextField variant="outlined" size="small" label="name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <Button type="submit" ><SearchOutlined/></Button>
    </Box>
      </Box>
      <ProductTable filtered={filtered}/>
    </Box>
  );
};

export default Product;
