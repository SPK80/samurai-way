import React from 'react';
import s from './Dialogs.module.css'
import {NewMessage} from "./NewMessage";
import {Dialogs} from "./Dialogs";
import {Messages} from "./Messages";

export const DialogsPage: React.FC = () => (
    <div>
        <NewMessage/>
        <div className={s.dialogs}>
            <Dialogs/>
            <Messages/>
        </div>
    </div>
)