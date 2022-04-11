import { useState } from "react";
import { Box, Button, Typography,Grid,Select,FormControl,MenuItem,InputLabel } from "@mui/material";
import {styled} from "@mui/material/styles";

const CustomInput=styled("input")(({theme})=>({
  padding:theme.spacing(2),
  outline:"none",
  border:"solid 1px #e3e3e3",
  width:"100%",
  maxWidth:"500px",
  margin:"8px 0"
})
)

const CustomFormGroup=styled("div")(({theme})=>({
  display:"flex",
  alignItems:"center",
  flexDirection:"row",
  justifyContent:"space-between",
}))

export const ImageInputs=({addInput,previews,handleImageChange,images,setImages})=>{


  return(
    <Grid container>
          {images.map((item, id) => (
            <Grid item xs={12} md={3} sx={{p:1}}>
            <Box sx={{position:"relative",cursor:"pointer",minHeight:"350px",p:2,background:()=>previews[id]?`url(${previews[id]})`:"#ddd",backgroundSize:"cover",objectFit:"cover"}}>
              <Typography variant="body2" textAlign="center">Choose Image</Typography>
              <input style={{opacity:0,position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}} type="file" onChange={(e) => handleImageChange(e, id)} />
            </Box>
            </Grid>
          ))}
          {images.length<4&&<Grid item xs={12} md={3} sx={{p:1}}>
          <Button onClick={addInput} variant="outlined">+</Button>
          </Grid>}
          </Grid>
  )
}


const AddProduct = () => {
  const [images, setImages] = useState([""]);
  const [previews,setPreviews] = useState([]);

  const handleImageChange = (e, id) => {
    const newImages = [...images];
    newImages[id] = e.target.files[0];
    const newPreviews = [...previews];
    newPreviews[id]=URL.createObjectURL(e.target.files[0]);
    setPreviews(newPreviews);
    setImages(newImages);
  };

  const addInput = (e) => {
    if (images.length < 4) {
      const newImages = [...images, ""];
      setImages(newImages);
    }
  };

  return (
    <Box>
      <Box component="form">
        
          <Typography variant="h6" sx={{p:1}}>Images</Typography>
          
          <ImageInputs previews={previews} addInput={addInput} handleImageChange={handleImageChange} images={images} setImages={images}/>
          <Typography variant="h6" sx={{p:1}}>Informations</Typography>
          <Box sx={{p:1,width:"100%",maxWidth:"650px",my:2,display:"flex",flexDirection:"column"}}>
            <CustomFormGroup>
              <label>Title</label>
              <CustomInput type="text" name="title"/>
            </CustomFormGroup>
            <CustomFormGroup>
              <label>Description</label>
              
              <textarea name="textarea" style={ {padding:"15px",outline:"none",
  border:"solid 1px #e3e3e3",
  width:"100%",
  maxWidth:"500px",
  margin:"8px 0"}} cols="40" rows="5"></textarea>
            </CustomFormGroup>
            <CustomFormGroup>
              <label>Gender</label>
              <select style={{border:"solid 1px #e3e3e3",
  width:"100%",
  maxWidth:"500px",padding:"15px 8px",  margin:"8px 0"}}>
                <option  value="">Choose a gender</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
              </select>
</CustomFormGroup>
<CustomFormGroup>
              <label>Category</label>
              <select style={{border:"solid 1px #e3e3e3",
  width:"100%",
  maxWidth:"500px",padding:"15px 8px",  margin:"8px 0"}}>
                <option  value="">Choose a category</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
              </select>
</CustomFormGroup>
            <CustomFormGroup>
              <label>Price</label>
              <CustomInput type="text" name="price"/>
            </CustomFormGroup>
            <CustomFormGroup>
              <label>Stock</label>
              <CustomInput type="text" name="stock"/>
            </CustomFormGroup>
            <Button>Add Product</Button>
          </Box>
          
      </Box>
    </Box>
  );
};

export default AddProduct;
