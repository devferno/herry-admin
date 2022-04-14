import {Button,Grid,Box,Typography} from "@mui/material";

export const ImageInputs = ({
    addInput,
    previews,
    handleImageChange,
    images,
  }) => {
    return (
      <Grid container>
        {images.map((item, id) => (
          <Grid item xs={12} md={6} sx={{ p: 1 }}>
            <Box
              sx={{
                position: "relative",
                cursor: "pointer",
                height: "200px",
                p: 2,
                background: () =>
                  previews[id] ? `url(${previews[id]})` : "#f7f7f7",
                border:() =>
                previews[id] ? `none` : "dashed 2px #e0e0e0",
                borderRadius:"4px",
                backgroundSize: "cover",
                objectFit: "cover",
              }}
            >
              <Typography variant="body2" textAlign="center">
                Add Product Image
              </Typography>
              <input
                style={{
                  opacity: 0,
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
                type="file"
                
                onChange={(e) => handleImageChange(e, id)}
              />
            </Box>
            
          </Grid>
        ))}
        {images.length < 4 && (
          <Grid item xs={12} md={6} sx={{ height:"200px",width:"100%",p: 1 }}>
            <Button onClick={addInput} sx={{height:"200px",width:"100%"}} variant="outlined">
              +
            </Button>
          </Grid>
        )}
      </Grid>
    );
  };