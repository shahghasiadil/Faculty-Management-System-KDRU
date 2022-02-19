import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Label } from 'reactstrap'
import { selectThemeColors } from '@utils'
import Select, { components } from 'react-select'
import makeAnimated from 'react-select/animated'
import CreatableSelect from 'react-select/creatable'
import AsyncSelect from 'react-select/async'
import {
  Facebook,
  Twitter,
  Linkedin,
  GitHub,
  Instagram,
  Dribbble,
  Gitlab,
  File,
  FileText,
  Image,
  Figma,
  Chrome,
  Command,
  Slack,
  Youtube
} from 'react-feather'

const colorOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', isFixed: true },
  { value: 'purple', label: 'Purple', color: '#5243AA', isFixed: true },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: false },
  { value: 'orange', label: 'Orange', color: '#FF8B00', isFixed: false },
  { value: 'yellow', label: 'Yellow', color: '#FFC400', isFixed: false }
]

const iconOptions = [
  {
    label: 'Social Media',
    options: [
      {
        value: 'facebook',
        label: 'Facebook',
        icon: Facebook
      },
      {
        value: 'twitter',
        label: 'Twitter',
        icon: Twitter
      },
      {
        value: 'linkedin',
        label: 'Linkedin',
        icon: Linkedin
      },
      {
        value: 'github',
        label: 'Github',
        icon: GitHub
      },
      {
        value: 'instagram',
        label: 'Instagram',
        icon: Instagram
      },
      {
        value: 'dribbble',
        label: 'Dribbble',
        icon: Dribbble
      },
      {
        value: 'gitlab',
        label: 'Gitlab',
        icon: Gitlab
      }
    ]
  },
  {
    label: 'File Types',
    options: [
      { value: 'pdf', label: 'PDF', icon: File },
      { value: 'word', label: 'word', icon: FileText },
      { value: 'image', label: 'Image', icon: Image }
    ]
  },
  {
    label: 'Others',
    options: [
      { value: 'figma', label: 'Figma', icon: Figma },
      { value: 'chrome', label: 'Chrome', icon: Chrome },
      { value: 'safari', label: 'Safari', icon: Command },
      { value: 'slack', label: 'Slack', icon: Slack },
      { value: 'youtube', label: 'Youtube', icon: Youtube }
    ]
  }
]

const OptionComponent = ({ data, ...props }) => {
  const Icon = data.icon

  return (
    <components.Option {...props}>
      <Icon className='mr-50' size={14} />
      {data.label}
    </components.Option>
  )
}

const groupedOptions = [
  {
    label: 'Ice Creams',
    options: [
      { value: 'vanilla', label: 'Vanilla' },
      { value: 'Dark Chocolate', label: 'Dark Chocolate' },
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'salted-caramel', label: 'Salted Caramel' }
    ]
  },
  {
    label: 'Snacks',
    options: [
      { value: 'Pizza', label: 'Pizza' },
      { value: 'Burger', label: 'Burger' },
      { value: 'Pasta', label: 'Pasta' },
      { value: 'Pretzel', label: 'Pretzel' },
      { value: 'Popcorn', label: 'Popcorn' }
    ]
  }
]

const animatedComponents = makeAnimated()

const styles = {
  multiValue: (base, state) => {
    return state.data.isFixed ? { ...base, opacity: '0.5' } : base
  },
  multiValueLabel: (base, state) => {
    return state.data.isFixed ? { ...base, color: '#626262', paddingRight: 6 } : base
  },
  multiValueRemove: (base, state) => {
    return state.data.isFixed ? { ...base, display: 'none' } : base
  }
}

const orderOptions = values => {
  if (values.length > 0) return values.filter(v => v.isFixed).concat(values.filter(v => !v.isFixed))
}

const formatGroupLabel = data => (
  <div className='d-flex justify-content-between align-center'>
    <strong>
      <span>{data.label}</span>
    </strong>
    <span>{data.options.length}</span>
  </div>
)

const SelectOptions = () => {
  const [fixedValue, setFixedValue] = useState(orderOptions([colorOptions[0], colorOptions[1], colorOptions[3]]))

  const filterColors1 = inputValue => {
    return colorOptions.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()))
  }

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterColors1(inputValue))
    }, 2000)
  }

  const filterColors2 = inputValue => {
    return colorOptions.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()))
  }

  const fixedOnChange = (value, { action, removedValue }) => {
    switch (action) {
      case 'remove-value':
      case 'pop-value':
        if (removedValue.isFixed) {
          return
        }
        break
      case 'clear':
        value = colorOptions.filter(v => v.isFixed)
        break
      default:
        break
    }

    value = orderOptions(value)
    setFixedValue(value)
  }

  const handleInputChange = newValue => {
    const val = newValue.replace(/\W/g, '')
    return val
  }

  const promiseOptions = inputValue => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(filterColors2(inputValue))
      }, 2000)
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Options</CardTitle>
      </CardHeader>

      <CardBody>
        <Row>
          <Col className='mb-1' md='6' sm='12'>
            <Label>Multi Select</Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              defaultValue={[colorOptions[2], colorOptions[3]]}
              isMulti
              name='colors'
              options={colorOptions}
              className='react-select'
              classNamePrefix='select'
            />
          </Col>
          <Col className='mb-1' md='6' sm='12'>
            <Label>Grouped Select</Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              defaultValue={colorOptions[1]}
              options={groupedOptions}
              formatGroupLabel={formatGroupLabel}
              className='react-select'
              classNamePrefix='select'
            />
          </Col>
          <Col className='mb-1' md='6' sm='12'>
            <Label>Animated Select</Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              closeMenuOnSelect={false}
              components={animatedComponents}
              defaultValue={[colorOptions[4], colorOptions[5]]}
              isMulti
              options={colorOptions}
              className='react-select'
              classNamePrefix='select'
            />
          </Col>
          <Col className='mb-1' md='6' sm='12'>
            <Label>Fixed Options Select</Label>
            <Select
              isClearable={false}
              value={fixedValue}
              styles={styles}
              isMulti
              onChange={fixedOnChange}
              theme={selectThemeColors}
              name='colors'
              className='react-select'
              classNamePrefix='select'
              options={colorOptions}
            />
          </Col>
          <Col md={6} xs={12} className='mb-1'>
            <Label>Async Callback Select</Label>
            <AsyncSelect
              isClearable={false}
              className='react-select'
              classNamePrefix='select'
              name='callback-react-select'
              loadOptions={loadOptions}
              defaultOptions
              onInputChange={handleInputChange}
              theme={selectThemeColors}
            />
          </Col>
          <Col md={6} xs={12} className='mb-1'>
            <Label>Async Promises Select</Label>
            <AsyncSelect
              isClearable={false}
              className='react-select'
              classNamePrefix='select'
              loadOptions={promiseOptions}
              cacheOptions
              defaultOptions
            />
          </Col>
          <Col className='mb-1' md='6' sm='12'>
            <Label>Creatable Select</Label>
            <CreatableSelect options={colorOptions} className='react-select' classNamePrefix='select' />
          </Col>
          <Col className='mb-1' md='6' sm='12'>
            <Label>Icons</Label>
            <Select
              options={iconOptions}
              className='react-select'
              classNamePrefix='select'
              components={{
                Option: OptionComponent
              }}
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}
export default SelectOptions
