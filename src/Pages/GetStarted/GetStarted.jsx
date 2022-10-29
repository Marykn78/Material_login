import  Grid  from "@mui/material/Grid";
import mobile from '../../Assets/Images/mobile.png'
import  Typography  from '@mui/material/Typography';
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

const GetStarted = () => {
    return ( 
        <Grid container sx={{display:'flex'}}>
            <Grid container sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <Grid item justifyContent={'center'}>
                    <img width={'270px'} src={mobile} alt='mobile'/>
                </Grid>
                <Grid item alignItems={'center'} sx={{marginTop:'20px'}}>
                    <Typography variant={"h1"}>
                        Gets things done with TODo
                    </Typography>
                </Grid>
                <Grid item sx={{marginTop:'20px',textAlign:'center',width:'50%'}}>
                    <Typography variant={'h2'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in volutpat, tristique lacinia ut. Elementum non turpis nullam ipsum.
                    </Typography>
                </Grid>
                <Grid  item>
                    <Link to={'/register'} style={{textDecoration:'none'}}>
                        <Button variant={'mainButton'} className={'margin'} sx={{width:'200px'}}>
                            <Typography variant={'h1'} sx={{color:'white'}}>
                                Get Started
                            </Typography>
                        </Button>
                    </Link>
                 </Grid>
               
            </Grid>
            
        </Grid>
     );
}
 
export default GetStarted;