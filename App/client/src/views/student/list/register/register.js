import React, { useRef, useState } from 'react'
import Wizard from '@components/wizard'
import { ArrowRight } from 'react-feather'
import Address from './steps-with-validation/Address'
import SocialLinks from './steps-with-validation/SocialLinks'
import PersonalInfo from './steps-with-validation/PersonalInfo'
import AccountDetails from './steps-with-validation/AccountDetails'

import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'


const Register = () => {
     
  const [stepper, setStepper] = useState(null)
  const ref = useRef(null)

  const steps = [
    {
      id: 'account-details',
      title: 'Account Details',
      subtitle: 'Enter Your Account Details.',
      content: <AccountDetails stepper={stepper} type='wizard-horizontal' />
    },
    {
      id: 'personal-info',
      title: 'Personal Info',
      subtitle: 'Add Personal Info',
      content: <PersonalInfo stepper={stepper} type='wizard-horizontal' />
    },
    {
      id: 'step-address',
      title: 'Address',
      subtitle: 'Add Address',
      content: <Address stepper={stepper} type='wizard-horizontal' />
    },
    {
      id: 'social-links',
      title: 'Social Links',
      subtitle: 'Add Social Links',
      content: <SocialLinks stepper={stepper} type='wizard-horizontal' />
    }
  ]

  return (
    <div className='horizontal-wizard'>
      
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to='/students'> Students </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span> Register </span>
        </BreadcrumbItem>
      </Breadcrumb>

      <Wizard instance={el => setStepper(el)} ref={ref} steps={steps} />
    </div>
  )
}

export default Register
