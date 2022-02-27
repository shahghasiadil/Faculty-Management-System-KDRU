import React, { useRef, useState } from 'react'
import Wizard from '@components/wizard'
import Address from './steps-with-validation/Address'
import Relatives from './steps-with-validation/Relatives'
import KankorInfo from './steps-with-validation/KankorInfo'
import TazkiraInfo from './steps-with-validation/TazkiraInfo'
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
      subtitle: 'Student Account Details.',
      content: <AccountDetails stepper={stepper} type='wizard-horizontal' />
    },
    {
      id: 'personal-info',
      title: 'Personal Info',
      subtitle: 'Student Personal Info',
      content: <PersonalInfo stepper={stepper} type='wizard-horizontal' />
    },
    {
      id: 'tazkira-info',
      title: 'Tazkira Info',
      subtitle: 'Student Tazkira Info',
      content: <TazkiraInfo stepper={stepper} type='wizard-horizontal' />
    },
    {
      id: 'address-info',
      title: 'Address Info',
      subtitle: 'Student Address Info',
      content: <Address stepper={stepper} type='wizard-horizontal' />
    },
    {
      id: 'relatives-info',
      title: 'Relative Info',
      subtitle: 'Student Relatives Info',
      content: <Relatives stepper={stepper} type='wizard-horizontal' />
    },
    {
      id: 'kankor-info',
      title: 'Kankor Info',
      subtitle: 'Student Kankor Info',
      content: <KankorInfo stepper={stepper} type='wizard-horizontal' />
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

      <Wizard type="modern-vertical" instance={el => setStepper(el)} ref={ref} steps={steps} />
    </div>
  )
}

export default Edit
