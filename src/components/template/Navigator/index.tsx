import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Trans } from 'react-i18next';
import { categories } from "./menu";
import { Link } from 'react-router-dom';
const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function Navigator(props: DrawerProps) {
  const { ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding component="nav">
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
          <Trans>WebVox</Trans>
        </ListItem>
        
        {categories.map(({ id, icon: iconParent, children }) => (
          
          <Box key={id} sx={{ bgcolor: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}  >
              <ListItemText sx={{ color: '#fff' }}>
                { iconParent && <ListItemIcon>{iconParent}</ListItemIcon>}
                <Trans>{id}</Trans>
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, to, active }) => (
              <Link key={childId} to={to} className="NavLinkItem">
                <ListItem disablePadding>
                  <ListItemButton selected={active} sx={item}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText><Trans>{childId}</Trans></ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
