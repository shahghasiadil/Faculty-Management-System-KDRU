//** React Imports
import { useState } from 'react'

// ** Configs
import themeConfig from '@configs/themeConfig'

export const useNavbarType = () => {
  // ** State
  const [navbarType, setNavbarType] = useState(() => {
    try {
      return themeConfig.layout.navbar.type
    } catch (error) {
      // ** If error return initialValue
      console.log(error)
      return themeConfig.layout.navbar.type
    }
  })

  // ** Return a wrapped version of useState's setter function
  const setValue = value => {
    try {
      // ** Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(navbarType) : value

      // ** Set state
      setNavbarType(valueToStore)
    } catch (error) {
      // ** A more advanced implementation would handle the error case
      console.log(error)
    }
  }

  return [navbarType, setValue]
}
