import React, {useState} from 'react'
import ReactDom from 'react-dom'
import {SecondaryButton, TertiaryButton, PrimaryButton, SignUpModal} from './components'
import {GlobalStyle, darkTheme, defaultTheme} from './utils'
import {ThemeProvider} from 'styled-components'
const App = () => {

    const [useDarkTheme, setUseDarkTheme] = useState(false)
    const [showModal, setShowModal] = useState(false)
    let sizes = ['small', 'normal', 'large']



    let Buttons = sizes.map((size, index) => {
        
        return (
            <div style={{display: "flex"}} key={index}>
                <div style={{width: '150px', display: "flex", justifyContent: "center"}}>
                    <PrimaryButton modifiers={[size]}>Hello world</PrimaryButton>
                </div>
                <div style={{width: '150px', display: "flex", justifyContent: "center"}}>
                    <SecondaryButton modifiers={[size]}>Hello world</SecondaryButton>
                </div>
                <div style={{width: '150px', display: "flex", justifyContent: "center"}}>
                    <TertiaryButton modifiers={[size]}>Hello world</TertiaryButton>
                </div>
                <div style={{width: '150px', display: "flex", justifyContent: "center"}}>
                    <PrimaryButton modifiers={[size, 'warning']}>Hello world</PrimaryButton>
                </div>
                <div style={{width: '150px', display: "flex", justifyContent: "center"}}>
                    <PrimaryButton modifiers={[size, 'success']}>Hello world</PrimaryButton>
                </div>
                <div style={{width: '150px', display: "flex", justifyContent: "center"}}>
                    <PrimaryButton disabled modifiers={[size]}>Hello world</PrimaryButton>
                </div>
            </div>
        )
    })


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
            width: '100vw',
            height: '100vh',
            display: 'grid',
            alignItems: 'center',
            gridTemplateColumns: 'auto',
            gridTemplateRows: '100px 100px 100px',
            columnGap: 0,
            rowGap: '15px',
        }}>
            {Buttons}
            
            {/* <PrimaryButton>Hello world</PrimaryButton>
            <SecondaryButton modifiers="small">Hello world</SecondaryButton>
            <TertiaryButton modifiers={['large']}>Hello world</TertiaryButton>
            <TertiaryButton modifiers={['large', 'warning']}>Hello world</TertiaryButton>
            */}
            <SignUpModal showModal={showModal} setShowModal={setShowModal}></SignUpModal> 
        </div>

            
        <GlobalStyle/>
    </ThemeProvider>)
}
ReactDom.render(<App/>, document.querySelector('#root'))