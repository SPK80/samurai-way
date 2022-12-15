import { FC } from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

const CustomTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.dark,
    variant: 'subtitle1',
}))

export const PageNotFound: FC = () => (
    <Paper sx={{ minHeight: '100%', p: 1, overflow: 'hidden' }}>
        <Stack alignItems={'center'} marginTop="50px">
            <CustomTypography fontWeight={'bold'}>● ERROR ●</CustomTypography>
            <Typography color="#dd5e48" variant={'h1'}>
                404
            </Typography>
            <CustomTypography>Page Not Found</CustomTypography>
        </Stack>
    </Paper>
)
