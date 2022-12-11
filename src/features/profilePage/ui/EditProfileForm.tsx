import React from 'react'
import { useFormik } from 'formik'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import { useAppDispatch, useAppSelector, useIsLoading } from 'app/bll/store'
import Button from '@mui/material/Button'
import { Switch } from '@mui/material'
import { setProfileTC } from '../bll/thunks'
import { FlexBox } from 'common/components/FlexBox'

type ErrorsType = {}

type ValuesType = {
    fullName: string
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

type PropsType = {
    onClose: () => void
}

export const EditProfileForm: React.FC<PropsType> = ({ onClose }) => {
    const isLoading = useIsLoading()
    const userProfile = useAppSelector((state) => state.profilePage.userProfile)
    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            fullName: userProfile?.fullName ?? 'NO NAME',
            aboutMe: userProfile?.aboutMe ?? '',
            lookingForAJob: userProfile?.lookingForAJob ?? false,
            lookingForAJobDescription: userProfile?.lookingForAJobDescription ?? '',
            github: userProfile?.contacts?.github ?? '',
            vk: userProfile?.contacts?.vk ?? '',
            facebook: userProfile?.contacts?.facebook ?? '',
            instagram: userProfile?.contacts?.instagram ?? '',
            twitter: userProfile?.contacts?.twitter ?? '',
            website: userProfile?.contacts?.website ?? '',
            youtube: userProfile?.contacts?.youtube ?? '',
            mainLink: userProfile?.contacts?.mainLink ?? '',
        } as ValuesType,

        validate: (values) => {
            const errors: ErrorsType = {}
            //TODO implement validation
            return errors
        },

        onSubmit: (values) => {
            if (!userProfile) return
            dispatch(
                setProfileTC({
                    userId: userProfile.userId,
                    fullName: values.fullName,
                    aboutMe: values.aboutMe,
                    lookingForAJob: values.lookingForAJob,
                    lookingForAJobDescription: values.lookingForAJobDescription,
                    contacts: {
                        github: values.github,
                        vk: values.vk,
                        facebook: values.facebook,
                        instagram: values.instagram,
                        twitter: values.twitter,
                        website: values.website,
                        youtube: values.youtube,
                        mainLink: values.mainLink,
                    },
                })
            )
            onClose()
        },
    })

    return (
        <FormControl component="form" onSubmit={formik.handleSubmit} size="medium">
            <TextField
                variant="standard"
                name="fullName"
                label="Full Name"
                value={formik.values.fullName}
                onChange={formik.handleChange}
            />

            <TextField
                variant="standard"
                name="aboutMe"
                label="About Me"
                multiline
                value={formik.values.aboutMe}
                onChange={formik.handleChange}
            />

            <Switch
                name="lookingForAJob"
                checked={formik.values.lookingForAJob}
                onChange={formik.handleChange}
            />

            {formik.values.lookingForAJob && (
                <TextField
                    variant="standard"
                    name="lookingForAJobDescription"
                    label="LookingForAJobDescription"
                    value={formik.values.lookingForAJobDescription}
                    onChange={formik.handleChange}
                />
            )}

            <TextField
                variant="standard"
                name="github"
                label="Github"
                value={formik.values.github}
                onChange={formik.handleChange}
            />
            <TextField
                variant="standard"
                name="vk"
                label="vk"
                value={formik.values.vk}
                onChange={formik.handleChange}
            />
            <TextField
                variant="standard"
                name="facebook"
                label="Facebook"
                value={formik.values.facebook}
                onChange={formik.handleChange}
            />
            <TextField
                variant="standard"
                name="instagram"
                label="Instagram"
                value={formik.values.instagram}
                onChange={formik.handleChange}
            />
            <TextField
                variant="standard"
                name="twitter"
                label="Twitter"
                value={formik.values.twitter}
                onChange={formik.handleChange}
            />
            <TextField
                variant="standard"
                name="website"
                label="Website"
                value={formik.values.website}
                onChange={formik.handleChange}
            />
            <TextField
                variant="standard"
                name="youtube"
                label="Youtube"
                value={formik.values.youtube}
                onChange={formik.handleChange}
            />
            <TextField
                variant="standard"
                name="mainLink"
                label="Main Link"
                value={formik.values.mainLink}
                onChange={formik.handleChange}
            />
            <FlexBox marginTop={2} justifyContent={'space-between'}>
                <Button
                    variant={'contained'}
                    type="submit"
                    disabled={!formik.isValid || !formik.dirty || isLoading}
                >
                    Save
                </Button>

                <Button variant={'contained'} disabled={isLoading} onClick={onClose}>
                    Cansel
                </Button>
            </FlexBox>
        </FormControl>
    )
}
