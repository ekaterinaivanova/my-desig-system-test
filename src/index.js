import React, {useState} from 'react'
import ReactDom from 'react-dom'
import {SecondaryButton, TertiaryButton, PrimaryButton, SignUpModal} from './components'
import {GlobalStyle, darkTheme, defaultTheme} from './utils'
import {ThemeProvider} from 'styled-components'
const App = () => {

    const [useDarkTheme, setUseDarkTheme] = useState(false)
    const [showModal, setShowModal] = useState(false)


    return (<ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>

        <button     
            style={{margin:"0 16px 24px", padding:"8px", background: "none"}}
            onClick={() => setUseDarkTheme(true)}
        >Dark Theme</button>
        <button     
            style={{margin:"0 16px 24px", padding:"8px", background: "none"}}
            onClick={() => setUseDarkTheme(false)}
        >Default Theme</button>
        <button     
            style={{margin:"0 16px 24px", padding:"8px", background: "none"}}
            onClick={() => setShowModal(!showModal)}
        >Toggle Modal</button>
        <div style={{
            background: useDarkTheme ? defaultTheme.primary : darkTheme.primary,
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around"
        }}>
            <PrimaryButton  disabled>Hello world</PrimaryButton>
            <SecondaryButton modifiers="small">Hello world</SecondaryButton>
            <TertiaryButton modifiers={['large', 'warning']}>Hello world</TertiaryButton>
        <SignUpModal showModal={showModal} setShowModal={setShowModal}></SignUpModal>
        </div>

            
        <GlobalStyle/>
    </ThemeProvider>)
}
ReactDom.render(<App/>, document.querySelector('#root'))