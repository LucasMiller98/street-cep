import { withStyles, InputLabel, Input, Container } from '@material-ui/core'

export const StyledInputLabel = withStyles({
  root: {
    color: '#566246',
    fontWeight: 700,
  },
})(InputLabel)

export const StyledInput = withStyles({
  root: {
    color: '#566246',
    fontWeight: 700,
  },
})(Input)

export const StyledContainerText = withStyles({
  root: {
    display: 'inherit',
  }
})(Container)

export const StyledContainerData = withStyles({
  root: {
    display: 'inherit',
    flexDirection: 'column',
    gap: '.7rem',
  }
})(Container)

export const StyledFormContainer = withStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '35vh',
    width: '105vw',
  }
})(Container)

export const StyledErrorsCreate = withStyles({
  root: {
    width: '100%'
  }
})(Container)

export const StyledContainerSwitch = withStyles({
  root: {
    display: 'flex',
    justifyContent: 'flexStart',
    width: '100vw',
    alignItems: 'center',
    marginLeft: '1rem',
    marginTop: '.4rem',
  }
})(Container)

export const StyledMyProfileGitHub = withStyles({
  root: {
    display: 'flex',
    alignItems: 'flexStart',
    justifyContent: 'center',
    width: '100%',
    height: '88%',
  }
})(Container)