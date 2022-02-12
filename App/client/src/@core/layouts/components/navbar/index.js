// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import NavbarUser from './NavbarUser'
import NavbarBookmarks from './NavbarBookmarks'

const ThemeNavbar = props => {
  // ** Props
  const { skin, setSkin, setMenuVisibility } = props

  return (
    <Fragment>
      <div className='bookmark-wrapper d-flex align-items-center'>
<<<<<<< HEAD
        <NavbarBookmarks setMenuVisibility={setMenuVisibility} />
=======
        {/* <NavbarBookmarks setMenuVisibility={setMenuVisibility} /> */}
>>>>>>> df3f393260d273b15f526a8272aaf8044f8c05bd
      </div>
      <NavbarUser skin={skin} setSkin={setSkin} />
    </Fragment>
  )
}

export default ThemeNavbar
