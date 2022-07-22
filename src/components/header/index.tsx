import { Box } from '@mui/material';
import React from 'react';
import logo from '../../assets/android-chrome-192x192.png';

export function Header() {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 99,
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <img src={logo} width="50" height="50" alt="aiRx" />
        <Box
          sx={{
            marginLeft: '5px',
            marginTop: '10px',
            fontSize: 30,
            color: '#CCCCCC',
          }}
        >
          ai<strong>R</strong>
          <sub>x</sub>
        </Box>
      </Box>
    </Box>
  );
}
export default Header;
