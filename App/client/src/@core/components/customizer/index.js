// ** React Imports
import { useState } from 'react'

// ** Third Party Components
import Select from 'react-select'
import classnames from 'classnames'
import { Settings, X } from 'react-feather'
import { CustomInput, FormGroup } from 'reactstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { selectThemeColors } from '@utils'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

const Customizer = props => {
  // ** Props
  const {
    skin,
    setSkin,
    isRtl,
    setIsRtl,
    layout,
    setLayout,
    navbarType,
    setNavbarType,
    footerType,
    setFooterType,
    navbarColor,
    setNavbarColor,
    isHidden,
    setIsHidden,
    contentWidth,
    setContentWidth,
    menuCollapsed,
    setMenuCollapsed,
    transition,
    setTransition
  } = props

  // ** State
  const [openCustomizer, setOpenCustomizer] = useState(false)

  // ** Toggles Customizer
  const handleToggle = e => {
    e.preventDefault()
    setOpenCustomizer(!openCustomizer)
  }

  // ** Render Layout Skin Options
  const renderSkinsRadio = () => {
    const skinsArr = [
      {
        name: 'light',
        label: 'Light',
        checked: skin === 'light'
      },
      {
        name: 'bordered',
        label: 'Bordered',
        checked: skin === 'bordered'
      },
      {
        name: 'dark',
        label: 'Dark',
        checked: skin === 'dark'
      },
      {
        name: 'semi-dark',
        label: 'Semi Dark',
        checked: skin === 'semi-dark'
      }
    ]

    return skinsArr.map((radio, index) => {
      const marginCondition = index !== skinsArr.length - 1

      if (layout === 'HorizontalLayout' && radio.name === 'semi-dark') {
        return null
      }

      return (
        <CustomInput
          key={index}
          type='radio'
          id={radio.name}
          label={radio.label}
          checked={radio.checked}
          onChange={() => setSkin(radio.name)}
          className={classnames({ 'mr-1': marginCondition })}
        />
      )
    })
  }

  // ** Render Navbar Colors Options
  const renderNavbarColors = () => {
    const colorsArr = ['white', 'primary', 'secondary', 'success', 'danger', 'info', 'warning', 'dark']

    return colorsArr.map(color => (
      <li
        key={color}
        className={classnames(`color-box bg-${color}`, {
          selected: navbarColor === color,
          border: color === 'white'
        })}
        onClick={() => setNavbarColor(color)}
      ></li>
    ))
  }

  // ** Render Navbar Type Options
  const renderNavbarTypeRadio = () => {
    const navbarTypeArr = [
      {
        name: 'floating',
        label: 'Floating',
        checked: navbarType === 'floating'
      },
      {
        name: 'sticky',
        label: 'Sticky',
        checked: navbarType === 'sticky'
      },
      {
        name: 'static',
        label: 'Static',
        checked: navbarType === 'static'
      },
      {
        name: 'hidden',
        label: 'Hidden',
        checked: navbarType === 'hidden'
      }
    ]

    return navbarTypeArr.map((radio, index) => {
      const marginCondition = index !== navbarTypeArr.length - 1

      if (layout === 'HorizontalLayout' && radio.name === 'hidden') {
        return null
      }

      return (
        <CustomInput
          key={index}
          type='radio'
          id={radio.name}
          label={radio.label}
          checked={radio.checked}
          onChange={() => setNavbarType(radio.name)}
          className={classnames({ 'mr-1': marginCondition })}
        />
      )
    })
  }

  // ** Render Footer Type Options
  const renderFooterTypeRadio = () => {
    const footerTypeArr = [
      {
        name: 'sticky',
        label: 'Sticky',
        checked: footerType === 'sticky'
      },
      {
        name: 'static',
        label: 'Static',
        checked: footerType === 'static'
      },
      {
        name: 'hidden',
        label: 'Hidden',
        checked: footerType === 'hidden'
      }
    ]

    return footerTypeArr.map((radio, index) => {
      const marginCondition = index !== footerTypeArr.length - 1

      return (
        <CustomInput
          key={index}
          type='radio'
          id={`footer-${radio.name}`}
          label={radio.label}
          checked={radio.checked}
          onChange={() => setFooterType(radio.name)}
          className={classnames({ 'mr-1': marginCondition })}
        />
      )
    })
  }

  // **  Router Transition Options
  const transitionOptions = [
    { value: 'fadeIn', label: 'Fade' },
    { value: 'fadeInLeft', label: 'Fade In Left' },
    { value: 'zoomIn', label: 'Zoom In' },
    { value: 'none', label: 'None' }
  ]

  // ** Get Current Transition
  const transitionValue = transitionOptions.find(i => i.value === transition)

  return (
    <div
      className={classnames('customizer d-none d-md-block', {
        open: openCustomizer
      })}
    >
      <a href='/' className='customizer-toggle d-flex align-items-center justify-content-center' onClick={handleToggle}>
        <Settings size={14} className='spinner' />
      </a>
      <PerfectScrollbar className='customizer-content'>
        <div className='customizer-header px-2 pt-1 pb-0 position-relative'>
          <h4 className='mb-0'>Theme Customizer</h4>
          <p className='m-0'>Customize & Preview in Real Time</p>
          <a href='/' className='customizer-close' onClick={handleToggle}>
            <X />
          </a>
        </div>

        <hr />

        <div className='px-2'>
          <FormGroup className='mb-2'>
            <p className='font-weight-bold'>Skin</p>
            <div className='d-flex'>{renderSkinsRadio()}</div>
          </FormGroup>

          <FormGroup className='mb-2'>
            <p className='font-weight-bold'>Content Width</p>
            <div className='d-flex'>
              <CustomInput
                type='radio'
                id='full-width'
                className='mr-1'
                label='Full Width'
                checked={contentWidth === 'full'}
                onChange={() => setContentWidth('full')}
              />
              <CustomInput
                type='radio'
                id='boxes'
                label='Boxed'
                checked={contentWidth === 'boxed'}
                onChange={() => setContentWidth('boxed')}
              />
            </div>
          </FormGroup>

          <FormGroup className='mb-2'>
            <div className='d-flex'>
              <p className='font-weight-bold mr-auto mb-0'>RTL</p>
              <CustomInput type='switch' id='rtl' name='RTL' checked={isRtl} onChange={() => setIsRtl(!isRtl)} />
            </div>
          </FormGroup>

          <FormGroup className='mb-2'>
            <div className='d-flex justify-content-between align-items-center'>
              <p className='font-weight-bold mb-0'>Router Transition</p>
              <Select
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                defaultValue={transitionOptions[0]}
                value={transitionValue}
                options={transitionOptions}
                isClearable={false}
                onChange={({ value }) => setTransition(value)}
              />
            </div>
          </FormGroup>
        </div>

        <hr />

        <div className='px-2'>
          <p className='font-weight-bold'>Menu Layout</p>
          <FormGroup className='mb-2'>
            <div className='d-flex align-items-center'>
              <CustomInput
                type='radio'
                id='vertical-layout'
                label='Vertical'
                checked={layout === 'VerticalLayout'}
                onChange={() => setLayout('vertical')}
                className='mr-1'
              />
              <CustomInput
                type='radio'
                id='horizontal-layout'
                label='Horizontal'
                checked={layout === 'HorizontalLayout'}
                onChange={() => setLayout('horizontal')}
              />
            </div>
          </FormGroup>
          {layout !== 'HorizontalLayout' ? (
            <FormGroup className='mb-2'>
              <div className='d-flex align-items-center'>
                <p className='font-weight-bold mr-auto mb-0'>Menu Collapsed</p>
                <CustomInput
                  type='switch'
                  id='menu-collapsed'
                  name='menu-collapsed'
                  checked={menuCollapsed}
                  onChange={() => setMenuCollapsed(!menuCollapsed)}
                />
              </div>
            </FormGroup>
          ) : null}

          <FormGroup className='mb-2'>
            <div className='d-flex align-items-center'>
              <p className='font-weight-bold mr-auto mb-0'>Menu Hidden</p>
              <CustomInput
                type='switch'
                id='menu-hidden'
                name='menu-hidden'
                checked={isHidden}
                onChange={() => setIsHidden(!isHidden)}
              />
            </div>
          </FormGroup>
        </div>

        <hr />

        <div className='px-2'>
          {layout !== 'HorizontalLayout' ? (
            <FormGroup className='mb-2'>
              <p className='font-weight-bold'>Navbar Color</p>
              <ul className='list-inline unstyled-list'>{renderNavbarColors()}</ul>
            </FormGroup>
          ) : null}

          <FormGroup className='mb-2'>
            <p className='font-weight-bold'>{layout === 'HorizontalLayout' ? 'Menu' : 'Navbar'} Type</p>
            <div className='d-flex'>{renderNavbarTypeRadio()}</div>
          </FormGroup>
        </div>

        <hr />

        <div className='px-2'>
          <FormGroup className='mb-2'>
            <p className='font-weight-bold'>Footer Type</p>
            <div className='d-flex'>{renderFooterTypeRadio()}</div>
          </FormGroup>
        </div>
      </PerfectScrollbar>
    </div>
  )
}

export default Customizer
