import React from 'react'
import IconButton from '@mui/material/IconButton'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import Typography from '@mui/material/Typography'

type PropsType = {
    count: number
    onClick: () => void
}

export const LikesButton: React.FC<PropsType> = ({ count, onClick }) => {
    return (
        <IconButton
            color="primary"
            aria-label="Likes Count"
            component="label"
            onClick={onClick}
        >
            <Typography variant="inherit" color="secondary">
                {count}
            </Typography>
            <ThumbUpOffAltIcon />
        </IconButton>
    )
}
