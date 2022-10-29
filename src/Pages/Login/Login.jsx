import  Grid  from "@mui/material/Grid";
import girl from '../../Assets/Images/girl.png'
import  Typography  from '@mui/material/Typography';
import TextField  from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

const inputlable = [
    { lable: "Enter your e-mail" },
    { lable: "Confirm password" },
  ];
const Login = () => {

    return ( 
        <>
            <Grid container sx={{display: "flex",flexDirection: "column",alignItems: "center"}}>
                <Grid item>
                    <Typography variant="h1" sx={{marginBottom:'15px'}}>Welcome Back!</Typography>
                    <img src={girl} alt='girl'/>
                </Grid>
                <Grid item sx={{display: "flex",flexDirection: "column",alignItems: "center",marginTop: "50px"}}>
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
                <Grid sx={{marginTop:'25px'}}>
                    <Typography variant="subtitle1">
                        Forget Password
                    </Typography>
                </Grid>
                <Grid item>
                    <Link to={"/todo"} style={{ textDecoration: "none" }}>
                        <Button
                            variant={"mainButton"}
                            className={"margin"}
                            sx={{ width: "200px" }}
                        >
                            <Typography variant={"h1"} sx={{ color: "white" }}>
                                Log In
                            </Typography>
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </>
     );
}
 
export default Login;