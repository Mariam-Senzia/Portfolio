import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
    base: '0px',        //extremely smaller devices
    xxm: '360px',
    xm: '390px',   
    sm: '410px',
    xmd: '768px',       //tablets
    md: '820px',
    slg: '1024px',      // laptops
    lg: '1280px',       // Macbook air
    xl: '1440px',       // 
    dm: '1500px',       // Dell
    xxl: '1680px',      // Macbook Pro
}

const theme = extendTheme({
    breakpoints,
    styles: {
        global: {
            html: {
                overflowX: 'hidden',
                margin: 0,   
                padding: 0,
            },
           
        }
    }
});

export default theme;