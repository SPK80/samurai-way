import React from 'react'
import { Dialogs } from './Dialogs'
import { Messages } from './Messages'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { useAppSelector } from 'app'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addMessageAC } from '../bll/actions'
import { RedirectIfNotLoggedIn } from 'common/components/RedirectIfNotLoggedIn'
import { RequestStatus } from 'common/bll/types'
import { TopLinearProgress } from 'common/components/TopLinearProgress'
import { SendTextBox } from 'common/components/SendTextBox'

export const DialogsPage: React.FC = () => {
    const { dialogs, requestStatus } = useAppSelector((state) => state.dialogsPage)
    const userId = useAppSelector((state) => state.auth.userData?.id)
    const dispatch = useDispatch()

    const currentDialogId = useParams()['*'] ?? ''
    const currentDialog = dialogs[currentDialogId]

    const onSubmitHandler = (text: string) =>
        userId && currentDialog && dispatch(addMessageAC(currentDialogId, userId, text))

    const dialogsDescriptors = Object.getOwnPropertyNames(dialogs).map((d) => ({
        id: d,
        title: dialogs[d].title,
    }))

    return (
        <Box sx={{ p: 1, overflow: 'hidden', width: '100%', height: '100%' }}>
            <RedirectIfNotLoggedIn to={'/authPage'} />
            <Paper>
                {requestStatus === RequestStatus.loading && <TopLinearProgress />}
                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={0}
                    height={'100%'}
                >
                    <Dialogs dialogs={dialogsDescriptors} currentDialog={currentDialogId} />

                    {currentDialog ? (
                        <Stack
                            width="100%"
                            divider={<Divider orientation="horizontal" flexItem />}
                            spacing={0}
                        >
                            <Box padding={2}>
                                <Messages messages={currentDialog.messages} />
                            </Box>
                            <Box padding={2}>
                                <SendTextBox onSubmit={onSubmitHandler} />
                            </Box>
                        </Stack>
                    ) : (
                        <div></div>
                    )}
                </Stack>
            </Paper>
        </Box>
    )
}
