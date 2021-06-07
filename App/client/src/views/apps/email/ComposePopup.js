// ** React Imports
import { useState } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { Editor } from 'react-draft-wysiwyg'
import Select, { components } from 'react-select'
import { Minus, X, Maximize2, Paperclip, MoreVertical, Trash } from 'react-feather'
import {
  Button,
  Modal,
  ModalBody,
  Form,
  Label,
  Input,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  UncontrolledButtonDropdown
} from 'reactstrap'
import { selectThemeColors } from '@utils'

// ** Custom Hooks
import { useSkin } from '@hooks/useSkin'

// ** User Avatars
import img1 from '@src/assets/images/portrait/small/avatar-s-3.jpg'
import img2 from '@src/assets/images/portrait/small/avatar-s-1.jpg'
import img3 from '@src/assets/images/portrait/small/avatar-s-4.jpg'
import img4 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import img5 from '@src/assets/images/portrait/small/avatar-s-2.jpg'
import img6 from '@src/assets/images/portrait/small/avatar-s-11.jpg'

// ** Styles
import '@styles/react/libs/editor/editor.scss'
import '@styles/react/libs/react-select/_react-select.scss'

const ComposePopup = props => {
  // ** Props & Custom Hooks
  const [skin, setSkin] = useSkin()
  const { composeOpen, toggleCompose } = props

  // ** States
  const [ccOpen, setCCOpen] = useState(false)
  const [bccOpen, setBCCOpen] = useState(false)

  // ** User Select Options & Components
  const selectOptions = [
    { value: 'pheobe', label: 'Pheobe Buffay', img: img1 },
    { value: 'chandler', label: 'Chandler Bing', img: img2 },
    { value: 'ross', label: 'Ross Geller', img: img3 },
    { value: 'monica', label: 'Monica Geller', img: img4 },
    { value: 'joey', label: 'Joey Tribbiani', img: img5 },
    { value: 'Rachel', label: 'Rachel Green', img: img6 }
  ]

  const SelectComponent = ({ data, ...props }) => {
    return (
      <components.Option {...props}>
        <div className='d-flex flex-wrap align-items-center'>
          <Avatar className='my-0 mr-50' size='sm' img={data.img} />
          {data.label}
        </div>
      </components.Option>
    )
  }

  // ** CC Toggle Function
  const toggleCC = e => {
    e.preventDefault()
    setCCOpen(!ccOpen)
  }

  // ** BCC Toggle Function
  const toggleBCC = e => {
    e.preventDefault()
    setBCCOpen(!bccOpen)
  }

  // ** Toggles Compose POPUP
  const togglePopUp = e => {
    e.preventDefault()
    toggleCompose()
  }

  return (
    <Modal
      scrollable
      fade={false}
      id='compose-mail'
      container='.content-body'
      className='modal-lg'
      isOpen={composeOpen}
      backdrop={false}
      contentClassName='p-0'
      toggle={toggleCompose}
      modalClassName='modal-sticky'
    >
      <div className='modal-header'>
        <h5 className='modal-title'>Compose Mail</h5>
        <div className='modal-actions'>
          <a href='/' className='text-body mr-75' onClick={togglePopUp}>
            <Minus size={14} />
          </a>
          <a href='/' className='text-body mr-75' onClick={e => e.preventDefault()}>
            <Maximize2 size={14} />
          </a>
          <a href='/' className='text-body' onClick={togglePopUp}>
            <X size={14} />
          </a>
        </div>
      </div>
      <ModalBody className='flex-grow-1 p-0'>
        <Form className='compose-form' onSubmit={e => e.preventDefault()}>
          <div className='compose-mail-form-field'>
            <Label for='email-to' className='form-label'>
              To:
            </Label>
            <div className='flex-grow-1'>
              <Select
                isMulti
                id='email-to'
                isClearable={false}
                theme={selectThemeColors}
                options={selectOptions}
                className='react-select select-borderless'
                classNamePrefix='select'
                components={{ Option: SelectComponent }}
              />
            </div>
            <div>
              <a href='/' className='toggle-cc text-body mr-1' onClick={toggleCC}>
                CC
              </a>
              <a href='/' className='toggle-cc text-body' onClick={toggleBCC}>
                BCC
              </a>
            </div>
          </div>
          {ccOpen === true ? (
            <div className='compose-mail-form-field cc-wrapper'>
              <Label for='email-cc' className='form-label'>
                CC:
              </Label>
              <div className='flex-grow-1'>
                <Select
                  isMulti
                  id='email-cc'
                  isClearable={false}
                  theme={selectThemeColors}
                  options={selectOptions}
                  className='react-select select-borderless'
                  classNamePrefix='select'
                  components={{ Option: SelectComponent }}
                />
              </div>
              <div>
                <a href='/' className='toggle-cc text-body' onClick={toggleCC}>
                  <X size={14} />
                </a>
              </div>
            </div>
          ) : null}
          {bccOpen === true ? (
            <div className='compose-mail-form-field cc-wrapper'>
              <Label for='email-bcc' className='form-label'>
                BCC:
              </Label>
              <div className='flex-grow-1'>
                <Select
                  isMulti
                  id='email-bcc'
                  isClearable={false}
                  theme={selectThemeColors}
                  options={selectOptions}
                  className='react-select select-borderless'
                  classNamePrefix='select'
                  components={{ Option: SelectComponent }}
                />
              </div>
              <div>
                <a href='/' className='toggle-cc text-body' onClick={toggleBCC}>
                  <X size={14} />
                </a>
              </div>
            </div>
          ) : null}
          <div className='compose-mail-form-field'>
            <Label for='email-subject' className='form-label'>
              Subject:
            </Label>
            <Input id='email-subject' placeholder='Subject' />
          </div>
          <div id='message-editor'>
            <Editor
              placeholder='Message'
              editorClassName='rounded-0'
              toolbarClassName='rounded-0'
              wrapperClassName='toolbar-bottom'
              toolbar={{
                options: ['inline', 'textAlign'],
                inline: {
                  inDropdown: false,
                  options: ['bold', 'italic', 'underline', 'strikethrough']
                }
              }}
            />
          </div>
          <div className='compose-footer-wrapper'>
            <div className='btn-wrapper d-flex align-items-center'>
              <UncontrolledButtonDropdown direction='up' className='mr-1'>
                <Button color='primary' onClick={toggleCompose}>
                  Send
                </Button>
                <DropdownToggle className='dropdown-toggle-split' color='primary' caret></DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href='/' tag='a' onClick={togglePopUp}>
                    Schedule Send
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
              <div className='email-attachement'>
                <Label className='mb-0' for='attach-email-item'>
                  <Paperclip className='cursor-pointer ml-50' size={18} />
                  <input type='file' name='attach-email-item' id='attach-email-item' hidden />
                </Label>
              </div>
            </div>
            <div className='footer-action d-flex align-items-center'>
              <UncontrolledDropdown className='mr-50' direction='up'>
                <DropdownToggle tag='span'>
                  <MoreVertical className='cursor-pointer' size={18} />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
                    Add Label
                  </DropdownItem>
                  <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
                    Plain text mode
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
                    Print
                  </DropdownItem>
                  <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
                    Check Spelling
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <Trash size={18} onClick={toggleCompose} />
            </div>
          </div>
        </Form>
      </ModalBody>
    </Modal>
  )
}

export default ComposePopup
