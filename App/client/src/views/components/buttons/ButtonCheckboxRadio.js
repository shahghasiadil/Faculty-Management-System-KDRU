import { useState } from 'react'
import { Button, ButtonGroup, Row, Col, CardText } from 'reactstrap'

const ButtonCheckboxRadio = () => {
  const [cSelected, setCSelected] = useState([1])
  const [rSelected, setRSelected] = useState(1)

  const onCheckboxBtnClick = selected => {
    const index = cSelected.indexOf(selected)
    if (index < 0) {
      cSelected.push(selected)
    } else {
      cSelected.splice(index, 1)
    }
    setCSelected([...cSelected])
  }

  return (
    <Row>
      <Col md='12' lg='6'>
        <ButtonGroup className='mb-1'>
          <Button color='primary' onClick={() => onCheckboxBtnClick(1)} active={cSelected.includes(1)}>
            Active
          </Button>
          <Button color='primary' onClick={() => onCheckboxBtnClick(2)} active={cSelected.includes(2)}>
            Checkbox
          </Button>
          <Button color='primary' onClick={() => onCheckboxBtnClick(3)} active={cSelected.includes(3)}>
            Checkbox
          </Button>
        </ButtonGroup>
        <CardText className='mb-1 mb-lg-0'>Selected: {JSON.stringify(cSelected)}</CardText>
      </Col>
      <Col md='12' lg='6'>
        <ButtonGroup className='mb-1'>
          <Button color='primary' onClick={() => setRSelected(1)} active={rSelected === 1} outline>
            Active
          </Button>
          <Button color='primary' onClick={() => setRSelected(2)} active={rSelected === 2} outline>
            Radio
          </Button>
          <Button color='primary' onClick={() => setRSelected(3)} active={rSelected === 3} outline>
            Radio
          </Button>
        </ButtonGroup>
        <CardText>Selected: {rSelected}</CardText>
      </Col>
    </Row>
  )
}

export default ButtonCheckboxRadio
