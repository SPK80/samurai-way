import React, { ReactNode } from 'react'
import { useAppSelector } from 'app'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Link } from '@mui/material'
import Stack from '@mui/material/Stack'

export const ViewProfileData: React.FC = () => {
    const userProfile = useAppSelector((state) => state.profilePage.userProfile)

    if (!userProfile) return <></>

    return (
        <Stack>
            <Typography variant={'h4'}>{userProfile.fullName}</Typography>
            {userProfile.lookingForAJob && <Box>{userProfile.lookingForAJobDescription}</Box>}
            <Typography sx={{ mt: 1, mb: 1 }} variant={'body1'}>
                {userProfile.aboutMe}
            </Typography>

            <Typography variant={'h6'}>Contacts</Typography>

            <Contact>{userProfile.contacts.github}</Contact>
            <Contact>{userProfile.contacts.vk}</Contact>
            <Contact>{userProfile.contacts.facebook}</Contact>
            <Contact>{userProfile.contacts.instagram}</Contact>
            <Contact>{userProfile.contacts.twitter}</Contact>
            <Contact>{userProfile.contacts.website}</Contact>
            <Contact>{userProfile.contacts.youtube}</Contact>
            <Contact>{userProfile.contacts.mainLink}</Contact>
        </Stack>
    )
}

export const Contact: React.FC<{ title?: string; children: ReactNode }> = ({ title, children }) => {
    return (
        <>
            {title && <span>{title}</span>}
            {children !== '' && <Link href={children?.toString() ?? ''}>{children}</Link>}
        </>
    )
}
