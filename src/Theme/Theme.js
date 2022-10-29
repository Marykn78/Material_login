import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    ".margin": {
                        margin: 60,
                    },
                    a: {
                        
                    },
                },
            },
        },
        MuiButton:{
            variants: [
                {
                    props: {variant: 'mainButton'},
                    style: {
                        color: 'white',
                        backgroundColor: '#50C2C9',
                        borderRadius: '20px',
                        textAlign: 'center',
                        height: 60,
                        '&:hover': {
                            backgroundColor: '#50C2C9',
                        }
                    }
                },
                {
                    props: {variant: 'secondaryButton'},
                    style: {

                    }
                }
            ]
        },
        
    },
    palette: {
        primary: {
            main: '#50C2C9',
            light: '#94F6FC',
            dark:'#138B93',
        },
        background: '#EEE'
    },
    typography: {
        fontFamily: 'Poppins',
        h1: {
            fontSize: 20,
            fontWeight: 800,
            lineHeight: '27px',
            color: 'rgba(0, 0, 0, 0.85)',
        },
        h2:{
            fontSize:16,
            fontWeight:400,
            lineHeight: '18px',
            color: 'rgba(0, 0, 0, 0.79)'
        },
        h3: {
            fontSize: 12,
            fontWeight: 700,
            lineHeight: '18px',
            color:'rgba(0, 0, 0, 0.85)'
        },
        subtitle1:{
            fontWeight: 600,
            fontSize: '13px',
            lineHeight: '20px',
            color:'#138B93'
        },
    },
    textField :{
        variants:[
            {
                props:{variant:'mainTextField'},
                style:{
                    backgroundColor:'white',
                    borderRadius:'20px',
                    color:'#8d8d8d'
                },
            },
        ]
 
    }
});
