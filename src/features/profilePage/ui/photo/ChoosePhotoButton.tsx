import React, { ChangeEvent } from 'react'
import IconButton from '@mui/material/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'

export const ChoosePhotoButton: React.FC<{ onConfirm: (file: File) => void }> = ({ onConfirm }) => {
    const onInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget?.files) onConfirm(e.currentTarget.files[0])
    }
    return (
        <IconButton color="info" component="label">
            <input hidden accept="image/*" type="file" onChange={onInputHandler} />
            <PhotoCamera fontSize={'large'} color={'secondary'} />
        </IconButton>
    )
}
