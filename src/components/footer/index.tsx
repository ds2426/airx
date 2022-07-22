import { Box } from '@mui/material';
import React from 'react';

export function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#CCC',
        marginTop: '10px',
      }}
    >
      <span>&copy; 2022</span>
    </Box>
  );
}
export default Footer;
