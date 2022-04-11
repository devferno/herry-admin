import React from "react";
import SearchBar from "../components/SearchBar";
import { Box, Button } from "@mui/material";
import { ShoppingBagOutlined } from "@mui/icons-material";
import ProductTable from "../components/ProductTable";
import { Link } from "react-router-dom";

const Product = () => {
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
        <SearchBar />
      </Box>
      <ProductTable />
    </Box>
  );
};

export default Product;
