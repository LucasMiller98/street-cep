import { withStyles, Container } from '@material-ui/core'

export const StyledHeaderContainer = withStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'spaceEvenly',
    width: '100%',
    height: '50%',
    position: 'relative'
  }
})(Container)