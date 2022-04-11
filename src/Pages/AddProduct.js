import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { ImageInputs } from "../components/ImageInputs";
import { enumTypes, enumGenders } from "../constant";
import { CustomInput, CustomFormGroup } from "../components/CustomComponent";
import axios from "axios";

const AddProduct = () => {
  const [images, setImages] = useState([""]);
  const [previews, setPreviews] = useState([]);
  const [informations, setInformations] = useState({});

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInformations((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e, id) => {
    const newImages = [...images];
    newImages[id] = e.target.files[0];
    const newPreviews = [...previews];
    newPreviews[id] = URL.createObjectURL(e.target.files[0]);
    setPreviews(newPreviews);
    setImages(newImages);
  };

  const addInput = (e) => {
    if (images.length < 4) {
      const newImages = [...images, ""];
      setImages(newImages);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    images.forEach((element) =>
    {  if(element!==""){
      form.append("image", element, element.filename)};}
    );

    for (const [key, value] of Object.entries(informations)) {
      
      form.append(key, value);
    }
    console.log(form);
    axios
      .post("/product", form, {
        headers: { authorization: `Bearer ${localStorage.getItem("access-admin") }`}
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <Box>
      <Box component="form" onSubmit={handleSubmit}>
        <Typography variant="h6" sx={{ p: 1 }}>
          Images
        </Typography>

        <ImageInputs
          previews={previews}
          addInput={addInput}
          handleImageChange={handleImageChange}
          images={images}
          setImages={images}
        />
        <Typography variant="h6" sx={{ p: 1 }}>
          Informations
        </Typography>
        <Box
          sx={{
            p: 1,
            width: "100%",
            maxWidth: "650px",
            my: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CustomFormGroup>
            <label>Name</label>
            <CustomInput
              type="text"
              name="name"
              value={informations.name}
              onChange={handleChange}
            />
          </CustomFormGroup>
          <CustomFormGroup>
            <label>Description</label>

            <textarea
              name="description"
              value={informations.description}
              onChange={handleChange}
              style={{
                padding: "15px",
                outline: "none",
                border: "solid 1px #e3e3e3",
                width: "100%",
                maxWidth: "500px",
                margin: "8px 0",
              }}
              cols="40"
              rows="5"
            ></textarea>
          </CustomFormGroup>
          <CustomFormGroup>
            <label>Gender</label>
            <select
              name="gender"
              style={{
                border: "solid 1px #e3e3e3",
                width: "100%",
                maxWidth: "500px",
                padding: "15px 8px",
                margin: "8px 0",
              }}
              value={informations.gender}
              onChange={handleChange}
            >
              <option value="">Choose a gender</option>
              {enumGenders.map((gender, index) => (
                <option key={gender} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
          </CustomFormGroup>
          <CustomFormGroup>
            <label>Type</label>
            <select
              name="type"
              value={informations.type}
              onChange={handleChange}
              style={{
                border: "solid 1px #e3e3e3",
                width: "100%",
                maxWidth: "500px",
                padding: "15px 8px",
                margin: "8px 0",
              }}
            >
              <option value="">Choose a Type</option>
              {enumTypes.map((type, index) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </CustomFormGroup>
          <CustomFormGroup>
            <label>Price</label>
            <CustomInput
              value={informations.price}
              onChange={handleChange}
              type="text"
              name="price"
            />
          </CustomFormGroup>
          <CustomFormGroup>
            <label>Stock</label>
            <CustomInput
              value={informations.stock}
              onChange={handleChange}
              type="text"
              name="stock"
            />
          </CustomFormGroup>
          <Button
            sx={{ my: 2 }}
            type="submit"
            variant="contained"
            disableElevation
          >
            Add Product
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddProduct;
