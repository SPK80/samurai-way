import React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import CancelIcon from '@mui/icons-material/Cancel'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

export const SubmitButtons: React.FC<{
    onConfirm: () => void
    onCancel: () => void
}> = ({ onConfirm, onCancel }) => (
    <ButtonGroup variant="contained">
        <Button
            color="secondary"
            aria-label="cancel"
            component="label"
            onClick={onCancel}
        >
            <CancelIcon />
        </Button>
        <Button
            color="primary"
            aria-label="confirm"
            component="label"
            onClick={onConfirm}
        >
            <CheckCircleIcon />
        </Button>
    </ButtonGroup>
)
