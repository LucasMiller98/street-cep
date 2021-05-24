import { createContext, ReactNode, useContext, useState } from 'react'

type CreateContext = {
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
      setCurrentStateSideBarToFalse
    }}>
      { children }
    </Context.Provider>
  )
}

export const useContextApi = ()=> {
  return useContext(Context)
}