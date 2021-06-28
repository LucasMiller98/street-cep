import { withStyles, InputLabel, Input } from '@material-ui/core'

export const StyledInputLabel = withStyles({
  root: {
    color: '#f1f1f1',
  },
})(InputLabel)

export const StyledInput = withStyles({
  root: {
    color: '#f1f1f1'
  }
})(Input)