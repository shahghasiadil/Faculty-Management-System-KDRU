// ** React Imports
import { Link, useLocation } from 'react-router-dom'

// ** Third Party Components
import classnames from 'classnames'
import { FormattedMessage } from 'react-intl'
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap'

// ** Utils
import { isNavGroupActive } from '@layouts/utils'

// ** Horizontal Menu Items Component
import HorizontalNavMenuItems from './HorizontalNavMenuItems'

const HorizontalNavMenuGroup = props => {
  // ** Props
  const {
    item,
    submenu,
    groupActive,
    onMouseEnter,
    onMouseLeave,
    openDropdown,
    setGroupActive,
    activeItem,
    setActiveItem,
    routerProps,
    setOpenDropdown,
    currentActiveItem
  } = props

  // ** URL Var
  const currentURL = useLocation().pathname

  // ** Dropdown menu modifiers
  const menuModifiers = {
    setMaxHeight: {
      enabled: true,
      fn: data => {
        const pageHeight = window.innerHeight,
          ddTop = data.instance.reference.getBoundingClientRect().top,
          ddHeight = data.popper.height
        let maxHeight, stylesObj

        // ** Calculate and set height
        if (pageHeight - ddTop - ddHeight - 28 < 1) {
          maxHeight = pageHeight - ddTop - 25
          stylesObj = {
            maxHeight,
            overflowY: 'auto'
          }
        }

        const ddRef = data.instance.popper.getBoundingClientRect()

        // ** If there is not space left to open sub menu open it to the right
        if (ddRef.left + ddRef.width - (window.innerWidth - 16) >= 0) {
          data.instance.popper.closest('.dropdown').classList.add('openLeft')
        }

        return {
          ...data,
          styles: {
            ...stylesObj
          }
        }
      }
    }
  }
  return (
    <Dropdown
      tag='li'
      className={classnames({
        'nav-item': submenu === false,
        'dropdown-submenu': submenu === true,
        'sidebar-group-active active':
          isNavGroupActive(item.children, currentURL, routerProps) || groupActive.includes(item.id)
      })}
      isOpen={openDropdown.includes(item.id)}
      toggle={() => onMouseEnter(item.id)}
      onMouseEnter={() => onMouseEnter(item.id)}
      onMouseLeave={() => onMouseLeave(item.id)}
    >
      <DropdownToggle
        to='/'
        tag={Link}
        className={classnames('dropdown-toggle d-flex align-items-center', {
          'dropdown-item': submenu === true,
          'nav-link': submenu === false
        })}
        onClick={e => e.preventDefault()}
      >
        {item.icon}
        <span>
          <FormattedMessage id={item.title} />
        </span>
      </DropdownToggle>
      <DropdownMenu tag='ul' modifiers={menuModifiers}>
        <HorizontalNavMenuItems
          submenu={true}
          parentItem={item}
          items={item.children}
          activeItem={activeItem}
          groupActive={groupActive}
          routerProps={routerProps}
          openDropdown={openDropdown}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          setActiveItem={setActiveItem}
          setGroupActive={setGroupActive}
          isChild={true}
          setOpenDropdown={setOpenDropdown}
          currentActiveItem={currentActiveItem}
        />
      </DropdownMenu>
    </Dropdown>
  )
}

export default HorizontalNavMenuGroup
