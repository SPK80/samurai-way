import React, { useEffect, useState } from 'react'
import s from './Photo.module.css'
import defaultAvatar from 'common/assets/avatar.png'
import { SubmitButtons } from './SubmitButtons'
import { ChoosePhotoButton } from './ChoosePhotoButton'
import { updateProfilePhotoTC } from '../../bll/thunks'
import { useAppDispatch } from 'app'

export const Photo: React.FC<{ src?: string; changeable?: boolean }> = ({ src, changeable }) => {
    const [selectedFile, setSelectedFile] = useState<File>()
    const [preview, setPreview] = useState<string>()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    useEffect(() => {
        setPreview(undefined)
    }, [src])

    return (
        <div className={s.photo}>
            <img alt="User Photo" src={preview || src || defaultAvatar} />
            {changeable && (
                <div className={s.buttons} style={preview ? { opacity: 1 } : {}}>
                    {preview ? (
                        <SubmitButtons
                            onConfirm={() =>
                                selectedFile && dispatch(updateProfilePhotoTC(selectedFile))
                            }
                            onCancel={() => setPreview(undefined)}
                        />
                    ) : (
                        <ChoosePhotoButton onConfirm={setSelectedFile} />
                    )}
                </div>
            )}
        </div>
    )
}
