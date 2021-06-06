// ** React Imports
import { Link, useLocation } from 'react-router-dom'

// ** Third Party Components
import classnames from 'classnames'
import { Collapse, Badge } from 'reactstrap'
import { FormattedMessage } from 'react-intl'

// ** Vertical Menu Items Component
import VerticalNavMenuItems from './VerticalNavMenuItems'

// ** Utils
import { isNavGroupActive, getAllParents } from '@layouts/utils'

const VerticalNavMenuGroup = ({
  item,
  groupActive,
  setGroupActive,
  activeItem,
  setActiveItem,
  groupOpen,
  setGroupOpen,
  parentItem,
  menuCollapsed,
  menuHover,
  routerProps,
  currentActiveItem
}) => {
  // ** Current Val
  const currentURL = useLocation().pathname

  // ** Toggles Open Group
  const toggleOpenGroup = (item, parentItem) => {
    let openArr = groupOpen
    let allParents

    if (parentItem) {
      allParents = getAllParents(parentItem, 'id')
      allParents.pop()
    }

    // ** If user clicked on menu group inside already opened group i.g. when user click on blog group inside pages group
    if (groupOpen && allParents && groupOpen[0] === allParents[0]) {
      groupOpen.includes(item) ? openArr.splice(openArr.indexOf(item), 1) : openArr.push(item)
    } else {
      openArr = []
      if (!groupOpen.includes(item)) {
        openArr.push(item)
      }
    }

    // ** Set Open Group
    setGroupOpen([...openArr])
  }

  // ** Toggle Active Group
  const toggleActiveGroup = (item, parentItem) => {
    let activeArr = groupActive
    let allParents

    if (parentItem) {
      allParents = getAllParents(parentItem, 'id')
      activeArr = allParents
    } else {
      activeArr.includes(item) ? activeArr.splice(activeArr.indexOf(item), 1) : activeArr.push(item)
    }

    // ** Set open group removing any activegroup item present in opengroup state
    const openArr = groupOpen.filter(val => !activeArr.includes(val))
    setGroupOpen([...openArr])

    // **  Set Active Group
    setGroupActive([...activeArr])
  }

  // ** On Group Item Click
  const onCollapseClick = (e, item) => {
    if ((groupActive && groupActive.includes(item.id)) || isNavGroupActive(item.children, currentURL, routerProps)) {
      toggleActiveGroup(item.id)
    } else {
      toggleOpenGroup(item.id, parentItem)
    }

    e.preventDefault()
  }

  // ** Returns condition to add open class
  const openClassCondition = id => {
    if ((menuCollapsed && menuHover) || menuCollapsed === false) {
      if (groupActive.includes(id) || groupOpen.includes(item.id)) {
        return true
      }
    } else if (groupActive.includes(id) && menuCollapsed && menuHover === false) {
      return false
    } else {
      return null
    }
  }

  return (
    <li
      className={classnames('nav-item has-sub', {
        open: openClassCondition(item.id),
        'menu-collapsed-open': groupActive.includes(item.id),
        'sidebar-group-active': groupActive.includes(item.id) || groupOpen.includes(item.id)
      })}
    >
      <Link className='d-flex align-items-center' to='/' onClick={e => onCollapseClick(e, item)}>
        {item.icon}
        <span className='menu-title text-truncate'>
          <FormattedMessage id={item.title} />
        </span>

        {item.badge && item.badgeText ? (
          <Badge className='ml-auto mr-1' color={item.badge} pill>
            {item.badgeText}
          </Badge>
        ) : null}
      </Link>

      {/* Render Child Recursively Through VerticalNavMenuItems Component */}
      <ul className='menu-content'>
        <Collapse isOpen={(groupActive && groupActive.includes(item.id)) || (groupOpen && groupOpen.includes(item.id))}>
          <VerticalNavMenuItems
            items={item.children}
            groupActive={groupActive}
            setGroupActive={setGroupActive}
            groupOpen={groupOpen}
            setGroupOpen={setGroupOpen}
            toggleActiveGroup={toggleActiveGroup}
            parentItem={item}
            menuCollapsed={menuCollapsed}
            menuHover={menuHover}
            routerProps={routerProps}
            currentActiveItem={currentActiveItem}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </Collapse>
      </ul>
    </li>
  )
}

export default VerticalNavMenuGroup
