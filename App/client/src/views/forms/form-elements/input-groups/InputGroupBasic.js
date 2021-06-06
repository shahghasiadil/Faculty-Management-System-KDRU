import { Fragment } from 'react'
import { Search } from 'react-feather'
import InputPasswordToggle from '@components/input-password-toggle'
import { InputGroup, InputGroupAddon, Input, InputGroupText } from 'reactstrap'

const InputGroupBasic = () => {
  return (
    <Fragment>
      <InputGroup className='mb-2'>
        <InputGroupAddon addonType='prepend'>
          <InputGroupText>
            <Search size={14} />
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder='search...' />
      </InputGroup>
      <InputPasswordToggle className='mb-2' label='Password' htmlFor='basic-default-password' />
      <InputGroup className='mb-2'>
        <InputGroupAddon addonType='prepend'>
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input placeholder='Username' />
      </InputGroup>
      <InputGroup className='mb-2'>
        <Input placeholder="Recipient's username" />
        <InputGroupAddon addonType='append'>
          <InputGroupText>@example.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className='mb-2'>
        <InputGroupAddon addonType='prepend'>
          <InputGroupText>https://example.com/users/</InputGroupText>
        </InputGroupAddon>
        <Input />
      </InputGroup>
      <InputGroup className='mb-2'>
        <InputGroupAddon addonType='prepend'>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <Input placeholder='100' />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon addonType='prepend'>
          <InputGroupText>With textarea</InputGroupText>
        </InputGroupAddon>
        <Input type='textarea' />
      </InputGroup>
    </Fragment>
  )
}

export default InputGroupBasic
