import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
const inputlable = [
  { lable: "Enter your full name" },
  { lable: "Enter your  e-mail" },
  { lable: "Enter password" },
  { lable: "Confirm password" },
];

const Register = () => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      sm={12}
    >
      <Grid item >
        <Typography
          variant="h1"
          sx={{ marginBottom: "15px", textAlign: "center" }}
        >
          Welcome Onboard!
        </Typography>
        <Typography variant="h2">Let’s help you meet up your tasks.</Typography>
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        {inputlable.map((item) => (
          <TextField
            label={item.lable}
            // variant={'textField'}
            sx={{
              margin: "5px",
              backgroundColor: "white",
              borderRadius: "20px",
            }}
          ></TextField>
        ))}
      </Grid>

      <Grid item>
        <Link to={"/login"} style={{ textDecoration: "none" }}>
          <Button
            variant={"mainButton"}
            className={"margin"}
            sx={{ width: "200px" }}
          >
            <Typography variant={"h1"} sx={{ color: "white" }}>
                Register
            </Typography>
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Register;
