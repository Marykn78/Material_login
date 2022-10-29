// import Box from '@mui/material/Box'
// import { TextField } from '@mui/material';
// import  Button  from '@mui/material/Button';
import  Grid  from '@mui/material/Grid';
import { Outlet } from 'react-router-dom';
import circle from '../../Assets/Images/elipse.png'
import {ReactComponent as Battery} from '../../Assets/Svg/Vector.svg';
import {ReactComponent as Wifi} from '../../Assets/Svg/wifi.svg';
import {ReactComponent as Signal} from '../../Assets/Svg/signal.svg'


const Header = () => {
    return ( 
        <>
            <Grid container xs={12} sm={8} marginX={'auto'} marginTop={3} justifyContent={'space-between'}  sx={{height:'auto',backgroundColor:'#EEE'}}> 
                <Grid>
                    <Grid>
                        <img src={circle} alt='' />
                        {/* <Typography variant='h1'>
                            21:45
                        </Typography> */}
                    </Grid>
                </Grid>
                <Grid container item justifyContent={'space-around'} sx={{width:'30%'}} padding={1}>
                    <Grid>
                        <Signal/>
                    </Grid>
                    <Grid>
                        <Wifi/>
                    </Grid>
                    <Grid>
                        <Battery/>
                    </Grid>
                </Grid>
                <Outlet/>
            </Grid>
            
        </>
        // <Grid container>

        //     <Button variant={'mainButton'} className={'margin'}>
        //         <Typography variant={'h1'}>
        //             Register
        //         </Typography>
        //     </Button>
        //     <Typography variant={'h1'}>
        //         Welcom Onboard
        //     </Typography>
        //     <TextField label={'enter your name'} />
        // </Grid>

     );
}
 
export default Header;