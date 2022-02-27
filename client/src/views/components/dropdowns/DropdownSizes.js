import { Fragment } from 'react'
import { Button, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle, Row, Col } from 'reactstrap'

const DropdownSizes = () => {
  return (
    <Fragment>
      <Row>
        <Col md='6' sm='12'>
          <div className='demo-inline-spacing'>
            <UncontrolledButtonDropdown>
              <DropdownToggle color='primary' size='lg' caret>
                Large
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' tag='a'>
                  Option 1
                </DropdownItem>
                <DropdownItem href='/' tag='a'>
                  Option 2
                </DropdownItem>
                <DropdownItem href='/' tag='a'>
                  Option 3
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
            <UncontrolledButtonDropdown>
              <DropdownToggle color='primary' caret>
                Default
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' tag='a'>
                  Option 1
                </DropdownItem>
                <DropdownItem href='/' tag='a'>
                  Option 2
                </DropdownItem>
                <DropdownItem href='/' tag='a'>
                  Option 3
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
            <UncontrolledButtonDropdown>
              <DropdownToggle color='primary' size='sm' caret>
                Small
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' tag='a'>
                  Option 1
                </DropdownItem>
                <DropdownItem href='/' tag='a'>
                  Option 2
                </DropdownItem>
                <DropdownItem href='/' tag='a'>
                  Option 3
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
        </Col>
        <Col md='6' sm='12'>
          <div className='demo-inline-spacing'>
            <UncontrolledButtonDropdown>
              <Button color='primary' size='lg'>
                Large
              </Button>
              <DropdownToggle className='dropdown-toggle-split' color='primary' caret size='lg'></DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/' tag='a'>
                  Option 1
                </DropdownItem>
                <DropdownItem href='/' tag='a'>
                  Option 2
                </DropdownItem>
                <DropdownItem href='/' tag='a'>
                  Option 3
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>{' '}
            <UncontrolledButtonDropdown>
              <Button color='primary'>Default</Button>
              <DropdownToggle className='dropdown-toggle-split' color='primary' caret></DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/' tag='a'>
                  Option 1
                </DropdownItem>
                <DropdownItem href='/' tag='a'>
                  Option 2
                </DropdownItem>
                <DropdownItem href='/' tag='a'>
                  Option 3
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>{' '}
            <UncontrolledButtonDropdown>
              <Button color='primary' size='sm'>
                Small
              </Button>
              <DropdownToggle className='dropdown-toggle-split' color='primary' caret></DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/' tag='a'>
                  Option 1
                </DropdownItem>
                <DropdownItem href='/' tag='a'>
                  Option 2
                </DropdownItem>
                <DropdownItem href='/' tag='a'>
                  Option 3
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
        </Col>
      </Row>
    </Fragment>
  )
}
export default DropdownSizes
