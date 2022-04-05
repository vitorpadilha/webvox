import * as React from 'react';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';

export let categories = [
  {
    id: 'Home',
    children: [ ],
  },
    {
      id: 'Games',
      children: [
        {
          id: 'Letter Find',
          icon: <SpellcheckIcon />,
          to: "letterFind",
          active: true,
        },
        { id: 'Spelling', icon: <KeyboardIcon />, to: "spelling" },
        
      ],
    },
    {
      id: 'Tools',
      children: [
        { id: 'Braille Editor', icon: <SettingsIcon />, to: "/" },
        { id: 'Performance', icon: <TimerIcon />, to: "/" },
        { id: 'Test Lab', icon: <PhonelinkSetupIcon />, to: "/" },
      ],
    },
  ];
  
 