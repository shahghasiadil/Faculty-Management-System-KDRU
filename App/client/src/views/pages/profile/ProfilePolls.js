import { Fragment } from 'react'
import Avatar from '@components/avatar'
import { Card, CardBody, CardText, Progress, CustomInput, UncontrolledTooltip } from 'reactstrap'

const ProfilePolls = ({ data }) => {
  const renderOptions = () => {
    return data.map(option => {
      return (
        <div key={option.name} className='profile-polls-info mt-2'>
          <div className='d-flex justify-content-between'>
            <CustomInput
              type='radio'
              id={`radio-${option.name.toLowerCase()}`}
              name='customRadio'
              label={option.name}
            />
            <div className='text-right'>{option.result}</div>
          </div>
          <Progress className='my-50' value={option.result.replace('%', ' ').trim()} />
          <div className='avatar-group my-1'>
            {option.votedUser.map(user => {
              return (
                <Fragment key={user.username}>
                  <Avatar
                    className='pull-up'
                    img={user.img}
                    id={user.username.toLowerCase().split(' ').join('-')}
                    imgHeight='26'
                    imgWidth='26'
                  />
                  <UncontrolledTooltip target={user.username.toLowerCase().split(' ').join('-')} placement='top'>
                    {user.username}
                  </UncontrolledTooltip>
                </Fragment>
              )
            })}
          </div>
        </div>
      )
    })
  }

  return (
    <Card>
      <CardBody>
        <h5 className='mb-1'>Polls</h5>
        <CardText className='mb-0'>Who is the best actor in Marvel Cinematic Universe?</CardText>
        {renderOptions()}
      </CardBody>
    </Card>
  )
}

export default ProfilePolls
