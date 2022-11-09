import React, {useMemo} from 'react'
import {MessageType} from '../bll/dialogsPageReducer'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import {UserAvatar} from 'common/components/UserAvatar'
import {UserProfileWithPhotosType} from '../../profilePage/dal/profileApi'

type MessagePropsType = {
  message: MessageType
  userProfile: UserProfileWithPhotosType
}

export const Message: React.FC<MessagePropsType> = ({message, userProfile}) => {
  return (
    <Box sx={{display: 'flex', alignItems: 'start', m: '10px 0'}}>
      <Box sx={{mt: 1, mr: 2}}>
        <UserAvatar userProfile={userProfile}/>
      </Box>
      <Paper elevation={1} sx={{p: 1}}>
        <Typography component="pre" variant="body1">
          {message.text}
        </Typography>
      </Paper>
    </Box>
  )
}
