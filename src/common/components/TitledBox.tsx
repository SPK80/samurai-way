import React, { ReactNode } from 'react'
import Box, { BoxProps } from '@mui/material/Box'

type PropsType = BoxProps & {
    titleElement?: ReactNode
}
export const TitledBox: React.FC<PropsType> = ({ titleElement, children, ...rest }) => {
    if (!children) return <></>
    return (
        <Box {...rest}>
            <>{titleElement}</>
            {children}
        </Box>
    )
}
