import { Fragment, useState } from 'react'
import classnames from 'classnames'
import { toast } from 'react-toastify'
import * as Icons from 'react-feather'
import Avatar from '@components/avatar'
import {
  Card,
  CardBody,
  Row,
  Col,
  Input,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  UncontrolledTooltip
} from 'reactstrap'
import Breadcrumbs from '@components/breadcrumbs'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import '@styles/base/pages/ui-feather.scss'

const ToastContent = ({ icon }) => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Icons.Check size={12} />} />
        <h6 className='toast-title'>Icon Name Copied! 📋</h6>
      </div>
    </div>
    <div className='toastify-body'>
      <span role='img' aria-label='toast-text'>
        {icon}
      </span>
    </div>
  </Fragment>
)

const FeatherIcons = () => {
  const IconsArr = [],
    [query, setQuery] = useState([]),
    [filteredArr, setFilteredArr] = useState([]),
    [active, setActive] = useState(null)

  for (const key in Icons) {
    IconsArr.push(key)
  }

  const handleFilter = val => {
    const arr = []
    if (val.length) {
      IconsArr.filter(icon => {
        if (icon.toLowerCase().includes(val.toLowerCase())) {
          arr.push(icon)
        }
      })
    }
    setFilteredArr([...arr])
  }

  const handleIconCardClick = icon => {
    setActive(icon)
    toast.success(<ToastContent icon={icon} />, { hideProgressBar: true })
  }

  const renderIcons = () => {
    const dataToRender = query.length ? filteredArr : IconsArr
    if (dataToRender.length) {
      return dataToRender.map(icon => {
        const IconTag = Icons[icon]
        return (
          <Fragment key={icon}>
            <CopyToClipboard text={`<${icon} />`}>
              <Card
                id={icon}
                className={classnames('icon-card cursor-pointer text-center mb-2 mx-50', {
                  active: active === icon
                })}
                onClick={() => handleIconCardClick(icon)}
              >
                <CardBody>
                  <div className='icon-wrapper'>
                    <IconTag />
                  </div>
                  <p className='icon-name text-truncate mb-0 mt-1'>{icon}</p>
                </CardBody>
              </Card>
            </CopyToClipboard>
            <UncontrolledTooltip placement='top' target={icon}>
              {icon.replace(/([A-Z])/g, ' $1').trim()}
            </UncontrolledTooltip>
          </Fragment>
        )
      })
    } else {
      return (
        <div className='d-flex align-items-center justify-content-center w-100'>
          <h4 className='mb-0'>No Icons Found!</h4>
        </div>
      )
    }
  }

  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Feather Icons' breadCrumbParent='UI' breadCrumbActive='Feather Icons' />
      <Row>
        <Col sm='12'>
          <div className='icon-search-wrapper my-3 mx-auto'>
            <InputGroup className='input-group-merge' tag={FormGroup}>
              <InputGroupAddon addonType='prepend'>
                <InputGroupText>
                  <Icons.Search size={14} />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder='Search icons...'
                onChange={e => {
                  handleFilter(e.target.value)
                  setQuery(e.target.value)
                }}
              />
            </InputGroup>
          </div>
        </Col>
      </Row>
      <div className='d-flex flex-wrap' id='icons-container'>
        {renderIcons()}
      </div>
    </Fragment>
  )
}
export default FeatherIcons
