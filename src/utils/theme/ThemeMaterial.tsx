import {ThemeProvider, createMuiTheme } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import { green } from '@material-ui/core/colors'
import { ReactNode } from 'react'

type ChildrenProps = {
  children: ReactNode
}

const themeUi = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  }
})

const Theme = ({ children }: ChildrenProps) => {
  return (
    <ThemeProvider theme={themeUi}>
      { children }
    </ThemeProvider>
  ) 
}