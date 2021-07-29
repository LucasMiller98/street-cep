import { Container, withStyles } from '@material-ui/core'

export const StyledPopupSidebar = withStyles({
  root: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    right: 0,
    zIndex: 999999999,
    background: 'rgba(0, 0, 0, .5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
})(Container)