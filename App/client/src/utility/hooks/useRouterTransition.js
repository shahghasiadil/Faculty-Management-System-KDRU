//** React Imports
import { useState } from 'react'

// ** Configs
import themeConfig from '@configs/themeConfig'

export const useRouterTransition = () => {
  // ** State
  const [transition, setTransition] = useState(() => {
    try {
      return themeConfig.layout.routerTransition
    } catch (error) {
      // ** If error return initialValue
      console.log(error)
      return themeConfig.layout.routerTransition
    }
  })

  // ** Return a wrapped version of useState's setter function
  const setValue = value => {
    try {
      // ** Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(transition) : value

      // ** Set state
      setTransition(valueToStore)
    } catch (error) {
      // ** A more advanced implementation would handle the error case
      console.log(error)
    }
  }

  return [transition, setValue]
}
