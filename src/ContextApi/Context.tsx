import { 
  createContext, 
  ReactNode, 
  useContext, 
  useState
} from 'react'

type CreateContext = {
  isDisplayingSideBar: boolean
  isBirthdayAndGenderFromUser: boolean
  getBirthdayAndGenderFromUser: () => void
  setCurrentStateSideBarTrue: () => void
  setCurrentStateSideBarToFalse: () => void
  getBirthdayAndGenderFromUserFalse: () => void
}

export const Context = createContext({} as CreateContext)

type ProviderProps = {
  children: ReactNode
}

export const ContextProvider = ({ children }: ProviderProps) => {
  const [isDisplayingSideBar, setIsDisplayingSideBar] = useState(false)
  const [isBirthdayAndGenderFromUser, setIsBirthdayAndGenderFromUser] = useState(false)

  const setCurrentStateSideBarTrue = () => {
    setIsDisplayingSideBar(true)
  }

  const setCurrentStateSideBarToFalse = () => {
    setIsDisplayingSideBar(false)
  }

  const getBirthdayAndGenderFromUser = () => {
    setIsBirthdayAndGenderFromUser(true)
  }

  const getBirthdayAndGenderFromUserFalse = () => {
    setIsBirthdayAndGenderFromUser(false)
  }
  
  return (
    <Context.Provider value={{ 
      isDisplayingSideBar,
      isBirthdayAndGenderFromUser,
      setCurrentStateSideBarTrue,
      setCurrentStateSideBarToFalse,
      getBirthdayAndGenderFromUser,
      getBirthdayAndGenderFromUserFalse,
    }}>
      { children }
    </Context.Provider>
  )
}

export const useContextApi = ()=> {
  return useContext(Context)
}