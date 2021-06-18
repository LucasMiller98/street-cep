import { useState, useEffect } from 'react'

function usePersistedState(key: string, value: any) {
  const [currentStateLocalStorage, setCurrentStateLocalStorage] = useState(() => {
    const saveValueOnLocalStorage = localStorage.getItem(key) // vai acessar o valor da key

    if(saveValueOnLocalStorage) { 
      return JSON.parse(saveValueOnLocalStorage) // para recumperar o valor do JSON.stringfy()
    }else{
      return value // valor inicial
    }
  }) 

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(currentStateLocalStorage))
  }, [key, currentStateLocalStorage])

  return [currentStateLocalStorage, setCurrentStateLocalStorage]
  
}

export default usePersistedState