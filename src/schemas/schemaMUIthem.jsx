import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'secondary' },
          style: {
            backgroundColor: 'transparent',
            color: '#101828',
            borderRadius: '200px',
            border: '2px solid #dadde1',
            padding: '16px 34px',
            fontSize: '16px',
            fontFamily: 'Inter, sans-serif',
            textTransform: 'none',
            width: 'fit-content',
            '&:hover': {
              borderColor: '#d84343',
            },
          },
        },
        {
          props: { variant: 'prima' },
          style: {
            backgroundColor: '#e44848',
            color: '#ffffff',
            borderRadius: '200px',
            border: 'none',
            padding: '16px 36px',
            textTransform: 'none',
            fontSize: '16px',
            fontFamily: 'Inter, sans-serif',
            width: 'fit-content',
            '&:hover': {
              backgroundColor: '#d84343',
            },
          },
        },
      ],
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: '#e44848',
          size: 50,
          thickness: 4,
          position: 'absolute',
          left: '50%',
          translate: '-50% 0',
        },
      },
    },
  },
});
export default theme;
