import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { AppContent } from './AppContent/AppContent'
import { store } from '../bll/store'

export const App: React.FC = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContent />
            </Provider>
        </HashRouter>
    )
}
