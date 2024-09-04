import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'secondary' },
          style: {
            backgroundColor: 'transparent',
            color: 'var(--secondary-text-color)',
            borderRadius: '200px',
            border: '2px solid var(--gray-light-color)',
            padding: '16px 34px',
            fontSize: '16px',
            fontFamily: 'Inter, sans-serif',
            textTransform: 'none',
            width: 'fit-content',
            '&:hover': {
              borderColor: 'var(--button-hover-color)',
            },
          },
        },
        {
          props: { variant: 'prima' },
          style: {
            backgroundColor: 'var(--button-hover-color)',
            color: 'var(--inputs-color)',
            borderRadius: '200px',
            border: 'none',
            padding: '16px 36px',
            textTransform: 'none',
            fontSize: '16px',
            fontFamily: 'Inter, sans-serif',
            width: 'fit-content',
            '&:hover': {
              backgroundColor: 'var(--button-color)',
            },
          },
        },
        {
          props: { variant: 'shane' },
          style: {
            position: 'relative',
            overflow: 'hidden',
            color: 'var(--inputs-color)',
            backgroundColor: 'var(--button-hover-color)',
            borderRadius: '200px',
            border: 'none',
            padding: '16px 36px',
            textTransform: 'none',
            fontSize: '16px',
            fontFamily: 'Inter, sans-serif',
            cursor: 'pointer',
            transition: 'background-color 450ms linear',
            '&:hover': {
              backgroundColor: 'var(--button-color)',
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '-120%',
              left: '10%',
              width: '30%',
              height: '500%',
              background: 'var(--inputs-color-transparent)',
              transform: 'rotate(45deg)',
              transition: 'left 0.5s ease-in-out',
            },
            '&:hover::before': {
              left: '100%',
            },
          },
        },
      ],
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: '#e44848',
          position: 'absolute',
          left: '50%',
          transform: 'translate(-50%, 0)',
        },
      },
    },
  },
});
export default theme;
