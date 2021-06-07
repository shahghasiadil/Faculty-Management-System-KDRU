// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'
import Repeater from '@components/repeater'

// ** Third Party Components
import axios from 'axios'
import Flatpickr from 'react-flatpickr'
import { SlideDown } from 'react-slidedown'
import { X, Plus, Hash } from 'react-feather'
import Select, { components } from 'react-select'
import { selectThemeColors } from '@utils'
import {
  Card,
  CardBody,
  CardText,
  Row,
  Col,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormGroup,
  Label,
  Button,
  UncontrolledTooltip
} from 'reactstrap'

// ** Styles
import 'react-slidedown/lib/slidedown.css'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/base/pages/app-invoice.scss'

const AddCard = () => {
  // ** States
  const [count, setCount] = useState(1)
  const [value, setValue] = useState({})
  const [open, setOpen] = useState(false)
  const [clients, setClients] = useState(null)
  const [selected, setSelected] = useState(null)
  const [picker, setPicker] = useState(new Date())
  const [invoiceNumber, setInvoiceNumber] = useState(false)
  const [dueDatepicker, setDueDatePicker] = useState(new Date())
  const [options, setOptions] = useState([
    {
      value: 'add-new',
      label: 'Add New Customer',
      type: 'button',
      color: 'flat-success'
    }
  ])

  useEffect(() => {
    // ** Get Clients
    axios.get('/api/invoice/clients').then(response => {
      const arr = options
      response.data.map(item => arr.push({ value: item.name, label: item.name }))
      setOptions([...arr])
      setClients(response.data)
    })

    // ** Get Invoices & Set Invoice Number
    axios
      .get('/apps/invoice/invoices', {
        page: 1,
        perPage: 10,
        status: '',
        q: ''
      })
      .then(response => {
        const lastInvoiceNumber = Math.max.apply(
          Math,
          response.data.allData.map(i => i.id)
        )
        setInvoiceNumber(lastInvoiceNumber + 1)
      })
  }, [])

  // ** Deletes form
  const deleteForm = e => {
    e.preventDefault()
    e.target.closest('.repeater-wrapper').remove()
  }

  // ** Function to toggle sidebar
  const toggleSidebar = () => setOpen(!open)

  // ** Vars
  const countryOptions = [
    { value: 'australia', label: 'Australia' },
    { value: 'canada', label: 'Canada' },
    { value: 'russia', label: 'Russia' },
    { value: 'saudi-arabia', label: 'Saudi Arabia' },
    { value: 'singapore', label: 'Singapore' },
    { value: 'sweden', label: 'Sweden' },
    { value: 'switzerland', label: 'Switzerland' },
    { value: 'united-kingdom', label: 'United Kingdom' },
    { value: 'united-arab-emirates', label: 'United Arab Emirates' },
    { value: 'united-states-of-america', label: 'United States of America' }
  ]

  // ** Custom Options Component
  const OptionComponent = ({ data, ...props }) => {
    if (data.type === 'button') {
      return (
        <Button className='text-left rounded-0' color={data.color} block onClick={() => setOpen(true)}>
          <Plus size={14} /> <span className='align-middle ml-50'>{data.label}</span>
        </Button>
      )
    } else {
      return <components.Option {...props}> {data.label} </components.Option>
    }
  }

  // ** Invoice To OnChange
  const handleInvoiceToChange = data => {
    setValue(data)
    setSelected(clients.filter(i => i.name === data.value)[0])
  }

  const note =
    'It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!'

  return (
    <Fragment>
      <Card className='invoice-preview-card mb-0'>
        {/* Header */}
        <CardBody className='invoice-padding pb-0'>
          <div className='d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0'>
            <div>
              <div className='logo-wrapper'>
                <svg viewBox='0 0 139 95' version='1.1' height='24'>
                  <defs>
                    <linearGradient id='invoice-linearGradient-1' x1='100%' y1='10.5120544%' x2='50%' y2='89.4879456%'>
                      <stop stopColor='#000000' offset='0%'></stop>
                      <stop stopColor='#FFFFFF' offset='100%'></stop>
                    </linearGradient>
                    <linearGradient
                      id='invoice-linearGradient-2'
                      x1='64.0437835%'
                      y1='46.3276743%'
                      x2='37.373316%'
                      y2='100%'
                    >
                      <stop stopColor='#EEEEEE' stopOpacity='0' offset='0%'></stop>
                      <stop stopColor='#FFFFFF' offset='100%'></stop>
                    </linearGradient>
                  </defs>
                  <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                    <g transform='translate(-400.000000, -178.000000)'>
                      <g transform='translate(400.000000, 178.000000)'>
                        <path
                          className='text-primary'
                          d='M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z'
                          style={{ fill: 'currentColor' }}
                        ></path>
                        <path
                          d='M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z'
                          fill='url(#invoice-linearGradient-1)'
                          opacity='0.2'
                        ></path>
                        <polygon
                          fill='#000000'
                          opacity='0.049999997'
                          points='69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325'
                        ></polygon>
                        <polygon
                          fill='#000000'
                          opacity='0.099999994'
                          points='69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338'
                        ></polygon>
                        <polygon
                          fill='url(#invoice-linearGradient-2)'
                          opacity='0.099999994'
                          points='101.428699 0 83.0667527 94.1480575 130.378721 47.0740288'
                        ></polygon>
                      </g>
                    </g>
                  </g>
                </svg>
                <h3 className='text-primary invoice-logo'>Vuexy</h3>
              </div>
              <p className='card-text mb-25'>Office 149, 450 South Brand Brooklyn</p>
              <p className='card-text mb-25'>San Diego County, CA 91905, USA</p>
              <p className='card-text mb-0'>+1 (123) 456 7891, +44 (876) 543 2198</p>
            </div>
            <div className='invoice-number-date mt-md-0 mt-2'>
              <div className='d-flex align-items-center justify-content-md-end mb-1'>
                <h4 className='invoice-title'>Invoice</h4>
                <InputGroup className='input-group-merge invoice-edit-input-group disabled'>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                      <Hash size={15} />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type='number'
                    className='invoice-edit-input'
                    value={invoiceNumber || 3171}
                    placeholder='53634'
                    disabled
                  />
                </InputGroup>
              </div>
              <div className='d-flex align-items-center mb-1'>
                <span className='title'>Date:</span>
                <Flatpickr
                  value={picker}
                  onChange={date => setPicker(date)}
                  className='form-control invoice-edit-input date-picker'
                />
              </div>
              <div className='d-flex align-items-center'>
                <span className='title'>Due Date:</span>
                <Flatpickr
                  value={dueDatepicker}
                  onChange={date => setDueDatePicker(date)}
                  className='form-control invoice-edit-input due-date-picker'
                />
              </div>
            </div>
          </div>
        </CardBody>
        {/* /Header */}

        <hr className='invoice-spacing' />

        {/* Address and Contact */}
        <CardBody className='invoice-padding pt-0'>
          <Row className='row-bill-to invoice-spacing'>
            <Col className='col-bill-to pl-0' lg='8'>
              <h6 className='invoice-to-title'>Invoice To:</h6>
              <div className='invoice-customer'>
                {clients !== null ? (
                  <Fragment>
                    <Select
                      className='react-select'
                      classNamePrefix='select'
                      id='label'
                      value={value}
                      options={options}
                      theme={selectThemeColors}
                      components={{
                        Option: OptionComponent
                      }}
                      onChange={handleInvoiceToChange}
                    />
                    {selected !== null ? (
                      <div className='customer-details mt-1'>
                        <p className='mb-25'>{selected.name}</p>
                        <p className='mb-25'>{selected.company}</p>
                        <p className='mb-25'>{selected.address}</p>
                        <p className='mb-25'>{selected.country}</p>
                        <p className='mb-0'>{selected.contact}</p>
                        <p className='mb-0'>{selected.companyEmail}</p>
                      </div>
                    ) : null}
                  </Fragment>
                ) : null}
              </div>
            </Col>
            <Col className='pr-0 mt-xl-0 mt-2' lg='4'>
              <h6 className='mb-2'>Payment Details:</h6>
              <table>
                <tbody>
                  <tr>
                    <td className='pr-1'>Total Due:</td>
                    <td>
                      <span className='font-weight-bolder'>$12,110.55</span>
                    </td>
                  </tr>
                  <tr>
                    <td className='pr-1'>Bank name:</td>
                    <td>American Bank</td>
                  </tr>
                  <tr>
                    <td className='pr-1'>Country:</td>
                    <td>United States</td>
                  </tr>
                  <tr>
                    <td className='pr-1'>IBAN:</td>
                    <td>ETD95476213874685</td>
                  </tr>
                  <tr>
                    <td className='pr-1'>SWIFT code:</td>
                    <td>BR91905</td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
        </CardBody>
        {/* /Address and Contact */}

        {/* Product Details */}
        <CardBody className='invoice-padding invoice-product-details'>
          <Repeater count={count}>
            {i => {
              const Tag = i === 0 ? 'div' : SlideDown
              return (
                <Tag key={i} className='repeater-wrapper'>
                  <Row>
                    <Col className='d-flex product-details-border position-relative pr-0' sm='12'>
                      <Row className='w-100 pr-lg-0 pr-1 py-2'>
                        <Col className='mb-lg-0 mb-2 mt-lg-0 mt-2' lg='5' sm='12'>
                          <CardText className='col-title mb-md-50 mb-0'>Item</CardText>
                          <Input type='select' className='item-details'>
                            <option>App Design</option>
                            <option>App Customization</option>
                            <option>ABC Template</option>
                            <option>App Development</option>
                          </Input>
                          <Input className='mt-2' type='textarea' rows='1' defaultValue='Customization & Bug Fixes' />
                        </Col>
                        <Col className='my-lg-0 my-2' lg='3' sm='12'>
                          <CardText className='col-title mb-md-2 mb-0'>Cost</CardText>
                          <Input type='number' defaultValue='24' placeholder='24' />
                          <div className='mt-2'>
                            <span>Discount:</span> <span>0%</span>
                            <span id={`tax1-${i}`} className='ml-50'>
                              0%
                            </span>
                            <span id={`tax2-${i}`} className='ml-50'>
                              0%
                            </span>
                            <UncontrolledTooltip target={`tax1-${i}`}>Tax 1</UncontrolledTooltip>
                            <UncontrolledTooltip target={`tax2-${i}`}>Tax 2</UncontrolledTooltip>
                          </div>
                        </Col>
                        <Col className='my-lg-0 my-2' lg='2' sm='12'>
                          <CardText className='col-title mb-md-2 mb-0'>Qty</CardText>
                          <Input type='number' defaultValue='1' placeholder='1' />
                        </Col>
                        <Col className='my-lg-0 mt-2' lg='2' sm='12'>
                          <CardText className='col-title mb-md-50 mb-0'>Price</CardText>
                          <CardText className='mb-0'>$24.00</CardText>
                        </Col>
                      </Row>
                      <div className='d-flex flex-column align-items-center justify-content-start border-left invoice-product-actions py-50 px-25'>
                        <X size={18} className='cursor-pointer' onClick={deleteForm} />
                      </div>
                    </Col>
                  </Row>
                </Tag>
              )
            }}
          </Repeater>
          <Row className='mt-1'>
            <Col sm='12' className='px-0'>
              <Button.Ripple color='primary' size='sm' className='btn-add-new' onClick={() => setCount(count + 1)}>
                <Plus size={14} className='mr-25'></Plus>
                <span className='align-middle'>Add Item</span>
              </Button.Ripple>
            </Col>
          </Row>
        </CardBody>

        {/* /Product Details */}

        {/* Invoice Total */}
        <CardBody className='invoice-padding'>
          <Row className='invoice-sales-total-wrapper'>
            <Col className='mt-md-0 mt-3' md={{ size: '6', order: 1 }} xs={{ size: 12, order: 2 }}>
              <div className='d-flex align-items-center mb-1'>
                <Label for='salesperson' className='form-label'>
                  Salesperson:
                </Label>
                <Input type='text' className='ml-50' id='salesperson' placeholder='Edward Crowley' />
              </div>
            </Col>
            <Col className='d-flex justify-content-end' md={{ size: '6', order: 2 }} xs={{ size: 12, order: 1 }}>
              <div className='invoice-total-wrapper'>
                <div className='invoice-total-item'>
                  <p className='invoice-total-title'>Subtotal:</p>
                  <p className='invoice-total-amount'>$1800</p>
                </div>
                <div className='invoice-total-item'>
                  <p className='invoice-total-title'>Discount:</p>
                  <p className='invoice-total-amount'>$28</p>
                </div>
                <div className='invoice-total-item'>
                  <p className='invoice-total-title'>Tax:</p>
                  <p className='invoice-total-amount'>21%</p>
                </div>
                <hr className='my-50' />
                <div className='invoice-total-item'>
                  <p className='invoice-total-title'>Total:</p>
                  <p className='invoice-total-amount'>$1690</p>
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
        {/* /Invoice Total */}

        <hr className='invoice-spacing mt-0' />

        {/* Invoice Note */}
        <CardBody className='invoice-padding py-0'>
          <Row>
            <Col>
              <FormGroup className='mb-2'>
                <Label for='note' className='form-label font-weight-bold'>
                  Note:
                </Label>
                <Input type='textarea' rows='2' id='note' defaultValue={note} />
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
        {/* /Invoice Note */}
      </Card>

      <Sidebar
        size='lg'
        open={open}
        title='Add Payment'
        headerClassName='mb-1'
        contentClassName='p-0'
        toggleSidebar={toggleSidebar}
      >
        <Form>
          <FormGroup>
            <Label for='customer-name' className='form-label'>
              Customer Name
            </Label>
            <Input id='customer-name' placeholder='John Doe' />
          </FormGroup>
          <FormGroup>
            <Label for='customer-email' className='form-label'>
              Customer Email
            </Label>
            <Input type='email' id='customer-email' placeholder='example@domain.com' />
          </FormGroup>
          <FormGroup>
            <Label for='customer-address' className='form-label'>
              Customer Address
            </Label>
            <Input type='textarea' cols='2' rows='2' id='customer-address' placeholder='1307 Lady Bug Drive New York' />
          </FormGroup>
          <FormGroup>
            <Label for='country' className='form-label'>
              Country
            </Label>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              options={countryOptions}
              isClearable={false}
            />
          </FormGroup>
          <FormGroup>
            <Label for='customer-contact' className='form-label'>
              Contact
            </Label>
            <Input type='number' id='customer-contact' placeholder='763-242-9206' />
          </FormGroup>
          <FormGroup className='d-flex flex-wrap mt-2'>
            <Button className='mr-1' color='primary' onClick={() => setOpen(false)}>
              Add
            </Button>
            <Button color='secondary' onClick={() => setOpen(false)} outline>
              Cancel
            </Button>
          </FormGroup>
        </Form>
      </Sidebar>
    </Fragment>
  )
}

export default AddCard
