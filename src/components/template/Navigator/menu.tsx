import * as React from 'react';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
export let categories = [
  {
    id: 'Home',
    icon: <HomeIcon />,
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
        { id: 'Braille Editor', icon: <SettingsIcon />, to: "brailleEditor" }
      ],
    },
  ];
  
 