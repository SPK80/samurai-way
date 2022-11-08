import React from 'react'
import ListItemText from '@mui/material/ListItemText'
import { MenuItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export type DialogPropsType = {
    id: string
    title: string
    selected?: boolean
}

export const Dialog: React.FC<DialogPropsType> = ({ id, title, selected }) => {
    const navigate = useNavigate()

    const onClickHandler = () => navigate(id)

    return (
        <MenuItem itemID={id} selected={selected} onClick={onClickHandler}>
            <ListItemText>{title}</ListItemText>
        </MenuItem>
    )
}
