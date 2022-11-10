import React from 'react'
import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'
import { LinearProgressProps } from '@mui/material/LinearProgress/LinearProgress'

export const TopLinearProgress: React.FC<LinearProgressProps> = (props) => (
    <Box position="relative">
        <LinearProgress {...props} sx={{ position: 'absolute', top: 0, left: 0, right: 0 }} />
    </Box>
)
