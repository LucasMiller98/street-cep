import { 
  createContext, 
  ReactNode, 
  useState
} from 'react'

type CreateContext = {
  isShowPopup: boolean
  isDisplayingSideBar: boolean
  setCurrentStateSideBarTrue: () => void
  setCurrentStateSideBarToFalse: () => void
}

export const Context = createContext({} as CreateContext)

type ProviderProps = {
  children: ReactNode
}

export const ContextProvider = ({ children }: ProviderProps) => {
  const [isDisplayingSideBar, setIsDisplayingSideBar] = useState(false)
  const [isShowPopup, setIsShowPopup] = useState(false)

  const setCurrentStateSideBarTrue = () => {
    setIsDisplayingSideBar(true)
  }

  const setCurrentStateSideBarToFalse = () => {
    setIsDisplayingSideBar(false)
  }

  return (
    <Context.Provider value={{ 
      isDisplayingSideBar,
      setCurrentStateSideBarTrue,
      setCurrentStateSideBarToFalse,
      isShowPopup
    }}>
      { children }
    </Context.Provider>
  )
}
