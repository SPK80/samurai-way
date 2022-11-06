import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import PeopleIcon from '@mui/icons-material/People'
import ForumIcon from '@mui/icons-material/Forum'
import SettingsIcon from '@mui/icons-material/Settings'
import Paper from '@mui/material/Paper'

const categories = [
    {
        id: 'Main',
        children: [
            {
                id: 'Profile',
                to: '/profile',
                icon: <AccountCircleIcon />,
                active: true,
            },
            {
                id: 'Users',
                to: '/users',
                icon: <PeopleIcon />,
            },

            {
                id: 'Dialogs',
                to: '/dialogs',
                icon: <ForumIcon />,
            },
        ],
    },
    {
        id: 'Tools',
        children: [
            {
                id: 'Settings',
                to: '/settings',
                icon: <SettingsIcon />,
            },
        ],
    },
]

const item = {
    py: '2px',
    px: 3,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover, &:focus': {
        bgcolor: 'rgba(255, 255, 255, 0.08)',
    },
}

export const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <Paper sx={{ mr: 1, overflow: 'hidden' }} variant={'elevation'}>
            <Box
                component="nav"
                sx={{
                    width: 200,
                    paddingTop: 2,
                }}
            >
                <List disablePadding>
                    {categories.map(({ id, children }) => (
                        <Box key={id}>
                            {children.map(
                                ({ id: childId, to, icon, active }) => (
                                    <ListItem disablePadding key={childId}>
                                        <ListItemButton
                                            selected={to === location.pathname}
                                            sx={item}
                                            onClick={() => navigate(to)}
                                        >
                                            <ListItemIcon>{icon}</ListItemIcon>
                                            <ListItemText>
                                                {childId}
                                            </ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                )
                            )}
                            <Divider />
                        </Box>
                    ))}
                </List>
            </Box>
        </Paper>
    )
}
