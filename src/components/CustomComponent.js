import {styled} from "@mui/material/styles";

export const CustomInput = styled("input")(({ theme }) => ({
    padding: theme.spacing(2),
    outline: "none",
    border: "solid 1px #e3e3e3",
    width: "100%",
    maxWidth: "500px",
    margin: "8px 0",
  }));
  
export const CustomFormGroup = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  }));
  