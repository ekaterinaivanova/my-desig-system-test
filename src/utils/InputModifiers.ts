//  INPUT ACTIVE BORDER COLOR

interface Istatus {
  errorColor: string
}
interface Itheme {
  [key: string]: Istatus
}

interface Iprops {
  theme: Itheme
}
const INPUT_MODIFIERS = {
    error: (props: Iprops): string => `
        border-color: ${props.theme.status.errorColor};
      .ant-select-selector {
        border-color: ${props.theme.status.errorColor}!important;
      }
     
    `
};

export default INPUT_MODIFIERS;