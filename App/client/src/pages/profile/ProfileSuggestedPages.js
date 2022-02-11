import classnames from 'classnames'
import { Star } from 'react-feather'
import Avatar from '@components/avatar'
import { Card, CardBody } from 'reactstrap'

const ProfileSuggestedPages = ({ data }) => {
  const renderSuggestions = () => {
    return data.map((suggestion, index) => {
      return (
        <div
          className={classnames('d-flex justify-content-start align-items-center', {
            'mb-1': index !== data.length - 1
          })}
          key={index}
        >
          <Avatar className='mr-1' img={suggestion.avatar} imgHeight={40} imgWidth={40} />
          <div className='profile-user-info'>
            <h6 className='mb-0'>{suggestion.username}</h6>
            <small className='text-muted'>{suggestion.subtitle}</small>
          </div>
          <div className='profile-star ml-auto'>
            <Star
              size={18}
              className={classnames('cursor-pointer', {
                'profile-favorite': suggestion.favorite === true
              })}
            />
          </div>
        </div>
      )
    })
  }

  return (
    <Card>
      <CardBody className='profile-suggestion'>
        <h5 className='mb-2'>Suggested Pages</h5>
        {renderSuggestions()}
      </CardBody>
    </Card>
  )
}

export default ProfileSuggestedPages
