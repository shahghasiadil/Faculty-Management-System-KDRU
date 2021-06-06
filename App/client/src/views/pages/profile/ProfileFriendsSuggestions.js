import classnames from 'classnames'
import Avatar from '@components/avatar'
import { UserPlus } from 'react-feather'
import { Card, CardBody, Button } from 'reactstrap'

const ProfileFriendsSuggestions = ({ data }) => {
  const renderSuggestion = () => {
    return data.map((suggestion, index) => {
      return (
        <div
          key={index}
          className={classnames('d-flex justify-content-start align-items-center', {
            'mt-2': index === 0,
            'mt-1': index !== 0
          })}
        >
          <Avatar className='mr-75' img={suggestion.avatar} imgHeight='40' imgWidth='40' />
          <div className='profile-user-info'>
            <h6 className='mb-0'>{suggestion.name}</h6>
            <small className='text-muted'>{suggestion.mutualFriend}</small>
          </div>
          <div className='ml-auto'>
            <Button.Ripple className='btn-icon' color='primary' size='sm'>
              <UserPlus size={14} />
            </Button.Ripple>
          </div>
        </div>
      )
    })
  }

  return (
    <Card>
      <CardBody>
        <h5>Suggestions</h5>
        {renderSuggestion()}
      </CardBody>
    </Card>
  )
}

export default ProfileFriendsSuggestions
