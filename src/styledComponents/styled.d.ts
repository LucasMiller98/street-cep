import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {
      primary: string,
      secundary: string,
      colorPopup: string,

      background: string,
      textColor: string,
      header: string,

      popup: string,
      backgroundPopup: string,

      createTitles: string
    }
  }
}