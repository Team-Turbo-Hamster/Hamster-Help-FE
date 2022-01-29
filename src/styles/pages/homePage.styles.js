import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    gridItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    gridLogoItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    logo: {
      marginLeft: "-100px",
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(0),
    },
  };
});

export default useStyles;
