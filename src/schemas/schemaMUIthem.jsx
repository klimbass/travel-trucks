import { createTheme } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';

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
            fontSize: 'var(--button-font-size)',
            fontFamily: 'var(--button-font)',
            textTransform: 'none',
            width: 'fit-content',
            '&:hover': {
              borderColor: 'var(--button-hover-color)',
            },
            '@media (min-width: 576px) and (max-width: 768px)': {
              padding: '12px 18px',
              fontSize: 'var(--heading-font-size-up-768)',
              lineHeight: 1,
              borderRadius: '8px',
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
            fontSize: 'var(--button-font-size)',
            fontFamily: 'var(--button-font)',
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
            // backgroundColor: 'var(--button-hover-color)',
            backgroundImage: 'var(--button-gradient-color)',
            backgroundColor: 'var(--inputs-color)',
            opacity: '0.8',
            borderRadius: '16px',
            border: 'none',
            padding: '16px 36px',
            textTransform: 'none',
            fontSize: 'var(--button-font-size)',
            fontFamily: 'var(--button-font)',
            cursor: 'pointer',
            transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
            '&:hover': {
              transform: 'scale(1.03)',
              boxShadow: 'var(--box-shadow-heavy)',
              opacity: '1',
            },

            '&::before': {
              content: '""',
              position: 'absolute',
              top: '-75%',
              left: '35%',
              width: '30%',
              height: '250%',
              background: 'var(--inputs-color-transparent)',
              transform: 'rotate(45deg)',
              transition: 'left 0.5s ease-in-out',
            },
            '&:hover::before': {
              left: '120%',
            },
            '@media (min-width: 576px) and (max-width: 768px)': {
              padding: '12px 14px',
              backgroundColor: 'black',
              fontSize: 'var(--heading-font-size-up-768)',
              lineHeight: 1,
              maxWidth: '86px',
              borderRadius: '8px',
              '&:hover': {
                transform: 'scale(1)',
                boxShadow: 'var(--box-shadow-heavy)',
                opacity: '1',
              },
              '&::before': {
                display: 'none',
              },
            },
          },
        },
        {
          props: { variant: 'showMore' },
          style: {
            position: 'relative',
            overflow: 'hidden',
            color: 'var(--inputs-color)',
            // backgroundColor: 'var(--button-hover-color)',
            backgroundImage: 'var(--button-gradient-color)',
            backgroundColor: 'var(--inputs-color)',
            opacity: '0.8',
            borderRadius: '16px',
            border: 'none',
            padding: '16px 36px',
            textTransform: 'none',
            fontSize: 'var(--button-font-size)',
            fontFamily: 'var(--button-font)',
            cursor: 'pointer',
            transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
            '&:hover': {
              transform: 'scale(1.03)',
              boxShadow: 'var(--box-shadow-heavy)',
              opacity: '1',
            },

            '&::before': {
              content: '""',
              position: 'absolute',
              top: '-75%',
              left: '35%',
              width: '30%',
              height: '250%',
              background: 'var(--inputs-color-transparent)',
              transform: 'rotate(45deg)',
              transition: 'left 0.5s ease-in-out',
            },
            '&:hover::before': {
              left: '120%',
            },
            '@media (min-width: 576px) and (max-width: 768px)': {
              padding: '12px 14px',
              backgroundColor: 'black',
              fontSize: 'var(--heading-font-size-up-768)',
              lineHeight: 1,
              maxWidth: '86px',
              borderRadius: '8px 0 0 0',
              '&:hover': {
                transform: 'scale(1)',
                boxShadow: 'var(--box-shadow-heavy)',
                opacity: '1',
              },
              '&::before': {
                display: 'none',
              },
            },
          },
        },
      ],
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: 'var(--button-color)',
          position: 'absolute',
          left: '50%',
          transform: 'translate(0,-50%)',
        },
      },
    },
  },
});
export default theme;
