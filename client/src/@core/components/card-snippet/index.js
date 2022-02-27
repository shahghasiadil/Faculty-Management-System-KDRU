// ** React Imports
import { Fragment, useState } from 'react'

// ** Third Party Components
import PropTypes from 'prop-types'
import { Code } from 'react-feather'
import { Card, CardHeader, CardBody, CardTitle, Collapse } from 'reactstrap'

const CardSnippet = props => {
  // ** Props
  const { title, children, noBody, code, iconCode } = props

  // ** State
  const [isOpen, setIsOpen] = useState(false)

  // ** If user passes custom icon then render that else render default icon
  const IconCode = iconCode ? iconCode : <Code size={15} />

  // ** To toggle collapse
  const toggle = () => setIsOpen(!isOpen)

  // ** If user passes noBody then return <Fragment> else return <CardBody>
  const Wrapper = noBody ? Fragment : CardBody

  return (
    <Card className='card-snippet'>
      <CardHeader>
        <CardTitle tag='h4'>{title}</CardTitle>
        <div className='views cursor-pointer' onClick={toggle}>
          {IconCode}
        </div>
      </CardHeader>
      <Wrapper>{children}</Wrapper>
      <Collapse isOpen={isOpen}>
        <CardBody>{code}</CardBody>
      </Collapse>
    </Card>
  )
}

export default CardSnippet

// ** PropTypes
CardSnippet.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
  code: PropTypes.node,
  iconCode: PropTypes.node,
  noBody: PropTypes.bool
}
