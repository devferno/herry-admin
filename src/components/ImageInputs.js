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
          <Grid item xs={12} md={3} sx={{ p: 1 }}>
            <Box
              sx={{
                position: "relative",
                cursor: "pointer",
                minHeight: "350px",
                p: 2,
                background: () =>
                  previews[id] ? `url(${previews[id]})` : "#ddd",
                backgroundSize: "cover",
                objectFit: "cover",
              }}
            >
              <Typography variant="body2" textAlign="center">
                Choose Image
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
          <Grid item xs={12} md={3} sx={{ p: 1 }}>
            <Button onClick={addInput} variant="outlined">
              +
            </Button>
          </Grid>
        )}
      </Grid>
    );
  };