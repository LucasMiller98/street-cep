import { createGlobalStyle } from 'styled-components'
import { 
  StyledContainerData, 
  StyledContainerText, 
  StyledErrorsCreate, 
  StyledFormContainer, 
  StyledInput, 
  StyledInputLabel 
} from '../../pages/styles/createStyles'

export default createGlobalStyle `

  body {
    background: ${ props => props.theme.colors.background };
    color: ${ props => props.theme.colors.textColor };
  }

  .header-container, #header-create-account {
    background: ${ props => props.theme.colors.header };
    color: ${ props => props.theme.colors.textColor };
  }

  .popup-container .popup {
    background: ${ props => props.theme.colors.popup };
  }

  .popup-container .account-user .button-ui a {
    color: ${ props => props.theme.colors.colorPopup };
  }

  .homeContainer .exit-anchor {
    background: ${ props => props.theme.colors.backgroundPopup };
    color: ${ props => props.theme.colors.colorPopup };
  }

  .fiLogOut, .fiXClose {
    color: ${ props => props.theme.colors.colorPopup };
  }

  #create-new-account-easily h3, #create-new-account-easily span {
    color: ${ props => props.theme.colors.createTitles };
  }

  
`
  /* ${StyledContainerData} {
    color: ${ props => props.theme.colors.primary };
  } */