(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1326:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(113);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(1328)],module)}.call(this,__webpack_require__(1327)(module))},1328:function(module,exports,__webpack_require__){var map={"./components/Buttons.stories.mdx":1329,"./components/Modal.stories.mdx":1362};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1328},1329:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"primary",(function(){return primary})),__webpack_require__.d(__webpack_exports__,"secondary",(function(){return secondary})),__webpack_require__.d(__webpack_exports__,"tertiary",(function(){return tertiary}));__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(45),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(209),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(89),_Buttons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(73);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Meta,{title:"Design System|Buttons",component:_Buttons__WEBPACK_IMPORTED_MODULE_5__.a,mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h1",{id:"buttons"},"Buttons"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,"Buttons are used to trigger actions within an application."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2",{id:"usage"},"Usage"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,"Buttons are used to trigger internal actions within your web applications."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2",{id:"primary-buttons"},"Primary Buttons"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,"Primary buttons are used as a call to action and indicate the most important action on a page."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,{withToolbar:!0,mdxType:"Preview"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,{name:"primary",mdxType:"Story"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_Buttons__WEBPACK_IMPORTED_MODULE_5__.a,{disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)("Disabled",!1),onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("button-clickrrr"),mdxType:"PrimaryButton"},"Hello world"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2",{id:"secondary-buttons"},"Secondary Buttons"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,"Primary buttons are used as a call to action and indicate the most important action on a page."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,{name:"secondary",mdxType:"Story"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_Buttons__WEBPACK_IMPORTED_MODULE_5__.b,{mdxType:"SecondaryButton"},"Hello world")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2",{id:"tertiary-buttons"},"Tertiary Buttons"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,"Primary buttons are used as a call to action and indicate the most important action on a page."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,{name:"tertiary",mdxType:"Story"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_Buttons__WEBPACK_IMPORTED_MODULE_5__.c,{mdxType:"TertiaryButton"},"Hello world")))}MDXContent.isMDXComponent=!0;const primary=()=>Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_Buttons__WEBPACK_IMPORTED_MODULE_5__.a,{disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)("Disabled",!1),onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("button-clickrrr")},"Hello world");primary.story={},primary.story.name="primary",primary.story.parameters={mdxSource:"<PrimaryButton disabled={boolean('Disabled', false)} onClick={action('button-clickrrr')}>Hello world</PrimaryButton>"};const secondary=()=>Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_Buttons__WEBPACK_IMPORTED_MODULE_5__.b,null,"Hello world");secondary.story={},secondary.story.name="secondary",secondary.story.parameters={mdxSource:"<SecondaryButton>Hello world</SecondaryButton>"};const tertiary=()=>Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_Buttons__WEBPACK_IMPORTED_MODULE_5__.c,null,"Hello world");tertiary.story={},tertiary.story.name="tertiary",tertiary.story.parameters={mdxSource:"<TertiaryButton>Hello world</TertiaryButton>"};const componentMeta={title:"Design System|Buttons",includeStories:["primary","secondary","tertiary"]},mdxStoryNameToKey={primary:"primary",secondary:"secondary",tertiary:"tertiary"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(MDXContent,null))},__webpack_exports__.default=componentMeta,primary.__docgenInfo={description:"",methods:[],displayName:"primary"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Buttons.stories.mdx"]={name:"primary",docgenInfo:primary.__docgenInfo,path:"src/components/Buttons.stories.mdx"}),secondary.__docgenInfo={description:"",methods:[],displayName:"secondary"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Buttons.stories.mdx"]={name:"secondary",docgenInfo:secondary.__docgenInfo,path:"src/components/Buttons.stories.mdx"}),tertiary.__docgenInfo={description:"",methods:[],displayName:"tertiary"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Buttons.stories.mdx"]={name:"tertiary",docgenInfo:tertiary.__docgenInfo,path:"src/components/Buttons.stories.mdx"})},1362:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"signUpModal",(function(){return signUpModal}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),esm=__webpack_require__(7),blocks=__webpack_require__(45),addon_knobs_dist=(__webpack_require__(209),__webpack_require__(89)),taggedTemplateLiteral=__webpack_require__(48),styled_components_browser_esm=__webpack_require__(43),utils=__webpack_require__(72),web=__webpack_require__(212),sign_up=__webpack_require__(483),sign_up_default=__webpack_require__.n(sign_up);function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n    width: 100%;\n    height: 100%;\n"]);return _templateObject=function _templateObject(){return data},data}var CloseIconWrapper=styled_components_browser_esm.c.svg(_templateObject()),close_CloseIcon=function CloseIcon(){return react_default.a.createElement(CloseIconWrapper,{"aria-hidden":"false"},react_default.a.createElement("path",{d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z",fill:"black"}))};close_CloseIcon.__docgenInfo={description:"",methods:[],displayName:"CloseIcon"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/assets/icons/close.js"]={name:"CloseIcon",docgenInfo:close_CloseIcon.__docgenInfo,path:"src/assets/icons/close.js"});var illustrations={SignUp:sign_up_default.a},Buttons=__webpack_require__(73);function _templateObject4(){var data=Object(taggedTemplateLiteral.a)(["\n    font-size: ",";\n    max-width: 70%;\n    text-align: center;\n"]);return _templateObject4=function _templateObject4(){return data},data}function _templateObject3(){var data=Object(taggedTemplateLiteral.a)(["\n    font-size: ","\n"]);return _templateObject3=function _templateObject3(){return data},data}function _templateObject2(){var data=Object(taggedTemplateLiteral.a)(["\n    width: 800px;\n    height: 500px;\n    box-shadow: 0 5px 16px rgba(0,0,0,0.2);\n    background-color: ",";\n    color: ",";\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    border-radius: 2px;\n"]);return _templateObject2=function _templateObject2(){return data},data}function Modals_templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n    cursor: pointer;\n    background: none;\n    border: none;\n    position: absolute;\n    top: 40px;\n    right: 40px;\n    width: 24px;\n    height: 24px;\n    padding: 0;\n"]);return Modals_templateObject=function _templateObject(){return data},data}var CloseModalButton=styled_components_browser_esm.c.button(Modals_templateObject()),ModalWrapper=styled_components_browser_esm.c.div(_templateObject2(),(function(props){return props.theme.formElementBackground}),(function(props){return props.theme.textOnFormElement})),SignUpHeader=styled_components_browser_esm.c.h3(_templateObject3(),utils.c.header3),SignUpText=styled_components_browser_esm.c.p(_templateObject4(),utils.c.paragraph),Modals_SignUpModal=function SignUpModal(_ref){var showModal=_ref.showModal,animation=(_ref.setShowModal,Object(web.c)({opacity:showModal?1:0,transform:showModal?"translateY(0)":"translateY(-200%)",config:web.b.molasses}));return react_default.a.createElement(web.a.div,{style:animation},react_default.a.createElement(ModalWrapper,null,react_default.a.createElement("img",{src:illustrations.SignUp,alt:"Sign up fpr an account","aria-hidden":"true"}),react_default.a.createElement(SignUpHeader,null,"Sign Up"),react_default.a.createElement(SignUpText,null,"Sign Up today bla bla bla"),react_default.a.createElement(Buttons.a,null,"Sign Up"),react_default.a.createElement(CloseModalButton,{"aria-label":"Close Modal"},react_default.a.createElement(close_CloseIcon,null))))};function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}Modals_SignUpModal.__docgenInfo={description:"",methods:[],displayName:"SignUpModal"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modals.js"]={name:"SignUpModal",docgenInfo:Modals_SignUpModal.__docgenInfo,path:"src/components/Modals.js"});const layoutProps={};function MDXContent({components:components,...props}){return Object(esm.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.mdx)(blocks.Meta,{title:"Design System|Modals",component:Modals_SignUpModal,mdxType:"Meta"}),Object(esm.mdx)("h1",{id:"modals"},"Modals"),Object(esm.mdx)("p",null,"Modals."),Object(esm.mdx)("h2",{id:"usage"},"Usage"),Object(esm.mdx)("p",null,"Buttons are used to trigger internal actions within your web applications."),Object(esm.mdx)("h2",{id:"sign-up-modal"},"Sign up Modal"),Object(esm.mdx)("p",null,"Primary buttons are used as a call to action and indicate the most important action on a page."),Object(esm.mdx)(blocks.Preview,{withToolbar:!0,mdxType:"Preview"},Object(esm.mdx)(blocks.Story,{name:"signUpModal",mdxType:"Story"},Object(esm.mdx)(Modals_SignUpModal,{showModal:Object(addon_knobs_dist.boolean)("Show Modal",!0),mdxType:"SignUpModal"}))))}MDXContent.isMDXComponent=!0;const signUpModal=()=>Object(esm.mdx)(Modals_SignUpModal,{showModal:Object(addon_knobs_dist.boolean)("Show Modal",!0)});signUpModal.story={},signUpModal.story.name="signUpModal",signUpModal.story.parameters={mdxSource:"<SignUpModal showModal={boolean('Show Modal', true)}></SignUpModal>"};const componentMeta={title:"Design System|Modals",includeStories:["signUpModal"]},mdxStoryNameToKey={signUpModal:"signUpModal"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>Object(esm.mdx)(blocks.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(esm.mdx)(MDXContent,null))};__webpack_exports__.default=componentMeta;signUpModal.__docgenInfo={description:"",methods:[],displayName:"signUpModal"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal.stories.mdx"]={name:"signUpModal",docgenInfo:signUpModal.__docgenInfo,path:"src/components/Modal.stories.mdx"})},1363:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var client=__webpack_require__(113),react=__webpack_require__(480),dist=__webpack_require__(89),addon_a11y_dist=__webpack_require__(481),styled_components_browser_esm=__webpack_require__(43),utils=__webpack_require__(72),contexts=[{icon:"box",title:"Themes",components:[styled_components_browser_esm.a],params:[{name:"Default theme",props:{theme:utils.b,default:!0}},{name:"Dark theme",props:{theme:utils.a}}],options:{deep:!0,disable:!1,cancelablee:!1}}];Object(client.addParameters)({backgrounds:[{name:"Default theme",value:"#ffffff",default:!0},{name:"Dark theme",value:"#050449"}]}),Object(client.addDecorator)(Object(react.a)(contexts)),Object(client.addDecorator)(dist.withKnobs),Object(client.addDecorator)(addon_a11y_dist.withA11y)},483:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/sign-up.dade5ef0.svg"},484:function(module,exports,__webpack_require__){__webpack_require__(485),__webpack_require__(645),__webpack_require__(646),__webpack_require__(1284),__webpack_require__(1363),__webpack_require__(1325),module.exports=__webpack_require__(1326)},562:function(module,exports){},72:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return typeScale})),__webpack_require__.d(__webpack_exports__,"b",(function(){return defaultTheme})),__webpack_require__.d(__webpack_exports__,"a",(function(){return darkTheme}));var blue_100="#3a36e0",blue_300="#030086",green_100="#529e66",green_200="#367b48",green_300="#276738",yellow_100="#e1c542",yellow_200="#cab23f",yellow_300="#b49e35",red_100="#d0454c",red_200="#b54248",red_300="#95353a",neutral_100="#ffffff",neutral_300="#e1e1e1",neutral_600="#000000",primaryFont='"Roboto Mono", monospace',typeScale={header1:"1.8rem",header2:"1.6rem",header3:"1.4rem",header4:"1.2rem",header5:"1.1rem",paragraph:"1rem",helperText:"0.8rem",copyrightText:"0.7rem"},defaultTheme={primary:blue_300,primaryHoverColor:"#0804b8",primaryActiveColor:blue_100,textColorOnPrimary:neutral_100,textColor:neutral_600,textColorInverted:neutral_100,primaryFont:primaryFont,disabledColor:neutral_100,colorOnDisabled:neutral_600,formElementBackground:neutral_100,textOnFormElement:neutral_600,status:{warningColor:yellow_100,warningColorHover:yellow_200,warningColorActive:yellow_300,errorColor:red_100,errorColorHover:red_200,errorColorActive:red_300,successColor:green_100,successColorHover:green_200,successColorActive:green_300}},darkTheme={primary:neutral_100,primaryHoverColor:"#f4f5f7",primaryActiveColor:neutral_300,textColorOnPrimary:blue_300,textColor:blue_300,textColorInverted:neutral_300,primaryFont:primaryFont,disabledColor:neutral_100,colorOnDisabled:neutral_600,formElementBackground:blue_100,textOnFormElement:neutral_600,status:{warningColor:yellow_100,warningColorHover:yellow_200,warningColorActive:yellow_300,errorColor:red_100,errorColorHover:red_200,errorColorActive:red_300,successColor:green_100,successColorHover:green_200,successColorActive:green_300}},taggedTemplateLiteral=__webpack_require__(48),styled_components_browser_esm=__webpack_require__(43),polished_esm=__webpack_require__(42);function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n    ","\n    html {\n        font-size: 16px;\n        box-sizing: border-box;\n    }\n\n    *, *:before, *:after {\n        box-sizing: inherit;\n    }\n\n    body {\n        margin: 0;\n        font-family: ",";\n    }\n\n    main {\n        width: 90%;\n        margin: 0 auto;\n    }\n"]);return _templateObject=function _templateObject(){return data},data}Object(styled_components_browser_esm.b)(_templateObject(),Object(polished_esm.normalize)(),primaryFont)},73:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return SecondaryButton})),__webpack_require__.d(__webpack_exports__,"c",(function(){return TertiaryButton})),__webpack_require__.d(__webpack_exports__,"a",(function(){return PrimaryButton}));var _Users_ekaterinaivanova_Documents_projects_my_desig_system_test_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(48),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(43),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(72),styled_components_modifiers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(211);function _templateObject4(){var data=Object(_Users_ekaterinaivanova_Documents_projects_my_desig_system_test_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n    background-color: ",";\n    color: ",";\n    ","\n\n   \n"]);return _templateObject4=function _templateObject4(){return data},data}function _templateObject3(){var data=Object(_Users_ekaterinaivanova_Documents_projects_my_desig_system_test_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n    background-color: ",";\n    color: ",";\n    ","\n\n   \n"]);return _templateObject3=function _templateObject3(){return data},data}function _templateObject2(){var data=Object(_Users_ekaterinaivanova_Documents_projects_my_desig_system_test_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n    background-color: ",";\n    color: ",";\n\n    &:hover {\n        background-color: ",";\n    }\n   \n    &:focus {\n        outline: 3px solid: ",";\n        outline-offset: 4px;\n    }\n    &:active {\n        background-color: ",";\n        border-color: ",";\n    }\n\n    &:disabled {\n        background-color: ",";\n        color: ",";\n        cursor: not-allowed;\n\n    }\n\n    ","\n\n"]);return _templateObject2=function _templateObject2(){return data},data}function _templateObject(){var data=Object(_Users_ekaterinaivanova_Documents_projects_my_desig_system_test_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n    padding: 12px 24px;\n    font-size: ",";\n    border-radius: 2px;\n    min-width: 100px;\n    font-family: 'Heebo', sans-serif;\n    border: none;\n    margin: 8px;\n    transition: background-color 0.2s linear, color 0.2s linear;\n    "]);return _templateObject=function _templateObject(){return data},data}var BUTTON_MODIFIERS={small:function small(){return"\n        font-size: ".concat(_utils__WEBPACK_IMPORTED_MODULE_2__.c.helperText,";\n        padding: 8px;\n    ")},large:function large(){return"\n        font-size: ".concat(_utils__WEBPACK_IMPORTED_MODULE_2__.c.header5,";\n        padding: 16px 24px;\n    ")},warning:function warning(props){return"\n        background-color: ".concat(props.theme.status.warningColor,";\n        color: ").concat(props.theme.textInvertColor,";\n\n        &:hover, &:focus {\n            background-color: ").concat(props.theme.status.warningColorHover,";\n            outline: 3px slid ").concat(props.theme.status.warningColorHover,";\n        }\n        &:active {\n            background-color: ").concat(props.theme.status.warningColorActive,";\n        }\n    ")}},Button=styled_components__WEBPACK_IMPORTED_MODULE_1__.c.button(_templateObject(),_utils__WEBPACK_IMPORTED_MODULE_2__.c.paragraph),PrimaryButton=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(Button)(_templateObject2(),(function(props){return props.theme.primary}),(function(props){return props.theme.textColorOnPrimary}),(function(props){return props.theme.primaryHoverColor}),(function(props){return props.theme.primaryHoverColor}),(function(props){return props.theme.primaryActiveColor}),(function(props){return props.theme.primaryActiveColor}),(function(props){return props.theme.disabled}),(function(props){return props.theme.textOnDisabled}),Object(styled_components_modifiers__WEBPACK_IMPORTED_MODULE_3__.applyStyleModifiers)(BUTTON_MODIFIERS)),SecondaryButton=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(Button)(_templateObject3(),"#362222","#fff",Object(styled_components_modifiers__WEBPACK_IMPORTED_MODULE_3__.applyStyleModifiers)(BUTTON_MODIFIERS)),TertiaryButton=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(Button)(_templateObject4(),"#A1A1A1","#fff",Object(styled_components_modifiers__WEBPACK_IMPORTED_MODULE_3__.applyStyleModifiers)(BUTTON_MODIFIERS))}},[[484,1,2]]]);
//# sourceMappingURL=main.9a219c11e377fa7d3fda.bundle.js.map