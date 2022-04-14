import { SearchOutlined } from '@mui/icons-material'
import { TextField,Button,Box,FormControl,InputLabel,Select,MenuItem } from '@mui/material'
import React from 'react'

const SearchBar = ({filterProduct}) => {
  return (
    <Box component="form" sx={{display:"flex",alignItems:"center"}}>
        <FormControl sx={{minWidth:120,mx:1}} size="small">
  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Gender"
    
  >
    <MenuItem value={10}>Men</MenuItem>
    <MenuItem value={20}>Women</MenuItem>
    <MenuItem value={30}>Kids</MenuItem>
  </Select>
  
  
</FormControl>
<FormControl sx={{minWidth:120,mx:1}} size="small">
  <InputLabel id="demo-simple-select-label">Category</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Gender"
    
  >
    <MenuItem value={10}>SHIRT</MenuItem>
    <MenuItem value={20}>T-SHIRT</MenuItem>
    <MenuItem value={30}>GILETS</MenuItem>
  </Select>
  </FormControl>
        <TextField variant="outlined" size="small" label="name"/>
        <Button ><SearchOutlined/></Button>
    </Box>
  )
}

export default SearchBar