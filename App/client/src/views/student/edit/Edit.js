import React, { useRef, useState, Fragment } from 'react'
import Wizard from '@components/wizard'
import { ArrowRight } from 'react-feather'
import Avatar from '@components/avatar'
import Address from './steps-with-validation/Address'
import SocialLinks from './steps-with-validation/SocialLinks'
import PersonalInfo from './steps-with-validation/PersonalInfo'
import AccountDetails from './steps-with-validation/AccountDetails'

import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'

export const UpdateProgressToast = () => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Check size={12} />} />
        <h6 className='toast-title'>Success</h6>
      </div>
      <small className='text-muted'>3 secondes Ago</small>
    </div>
    <div className='toastify-body'>
      <span role='img' aria-label='toast-text'>
         Record Successfully Updated
      </span>
    </div>
  </Fragment>
)

const Edit = () => {
     
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
          <span> Edit </span>
        </BreadcrumbItem>
      </Breadcrumb>

      <Wizard instance={el => setStepper(el)} ref={ref} steps={steps} />
    </div>
  )
}

export default Edit
