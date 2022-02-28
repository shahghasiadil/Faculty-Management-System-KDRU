import AvatarGroup from '@components/avatar-group'
import react from '@src/assets/images/icons/react.svg'
import figma from '@src/assets/images/icons/figma.svg'
import vuejs from '@src/assets/images/icons/vuejs.svg'
import angular from '@src/assets/images/icons/angular.svg'
import bootstrap from '@src/assets/images/icons/bootstrap.svg'
import avatar1 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import avatar2 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import avatar3 from '@src/assets/images/portrait/small/avatar-s-7.jpg'
import { MoreVertical, Edit, Trash } from 'react-feather'
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

const avatarGroupData1 = [
  {
    title: 'Illiana',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Wyatt',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Troy',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData2 = [
  {
    title: 'Mufutau',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Denton',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Carol',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData3 = [
  {
    title: 'Kyla',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Hop',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Yvonne',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData4 = [
  {
    title: 'Lunea',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Francis',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Kameko',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData5 = [
  {
    title: 'Blair',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Aspen',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Tyler',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData6 = [
  {
    title: 'Florence',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Kieran',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Anthony',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData7 = [
  {
    title: 'Lysandra',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Russell',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Curran',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData8 = [
  {
    title: 'Britanney',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Avye',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Castor',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData9 = [
  {
    title: 'Charissa',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Elijah',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Giacomo',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData10 = [
  {
    title: 'Chaim',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Virginia',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Kristen',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const TableContextual = () => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Project</th>
          <th>Client</th>
          <th>Users</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr className='table-default'>
          <td>
            <img className='mr-75' src={figma} alt='figma' height='20' width='20' />
            <span className='align-middle font-weight-bold'>Figma Project</span>
          </td>
          <td>Ronnie Shane</td>
          <td>
            <AvatarGroup data={avatarGroupData1} />{' '}
          </td>
          <td>
            <Badge pill color='light-primary'>
              Active
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='mr-50' size={15} /> <span className='align-middle'>Edit</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='mr-50' size={15} /> <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr className='table-active'>
          <td>
            <img className='mr-75' src={react} alt='react' height='20' width='20' />
            <span className='align-middle font-weight-bold'>React Project</span>
          </td>
          <td>Ronald Frest</td>
          <td>
            <AvatarGroup data={avatarGroupData2} />
          </td>
          <td>
            <Badge pill color='light-success'>
              Completed
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='mr-50' size={15} /> <span className='align-middle'>Edit</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='mr-50' size={15} /> <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr className='table-primary'>
          <td>
            <img className='mr-75' src={angular} alt='angular' height='20' width='20' />
            <span className='align-middle font-weight-bold'>Angular Project</span>
          </td>
          <td>Peter Charls</td>
          <td>
            <AvatarGroup data={avatarGroupData3} />
          </td>
          <td>
            <Badge pill color='light-primary'>
              Active
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='mr-50' size={15} /> <span className='align-middle'>Edit</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='mr-50' size={15} /> <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr className='table-secondary'>
          <td>
            <img className='mr-75' src={vuejs} alt='vuejs' height='20' width='20' />
            <span className='align-middle font-weight-bold'>Vuejs Project</span>
          </td>
          <td>Jack Obes</td>
          <td>
            <AvatarGroup data={avatarGroupData4} />
          </td>
          <td>
            <Badge pill color='light-secondary'>
              Pending
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='mr-50' size={15} /> <span className='align-middle'>Edit</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='mr-50' size={15} /> <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr className='table-success'>
          <td>
            <img className='mr-75' src={bootstrap} alt='bootstrap' height='20' width='20' />
            <span className='align-middle font-weight-bold'>Bootstrap Project</span>
          </td>
          <td>Jerry Milton</td>
          <td>
            <AvatarGroup data={avatarGroupData5} />
          </td>
          <td>
            <Badge pill color='light-success'>
              Pending
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='mr-50' size={15} /> <span className='align-middle'>Edit</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='mr-50' size={15} /> <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr className='table-danger'>
          <td>
            <img className='mr-75' src={figma} alt='figma' height='20' width='20' />
            <span className='align-middle font-weight-bold'>Figma Project</span>
          </td>
          <td>Janne Ale</td>
          <td>
            <AvatarGroup data={avatarGroupData6} />
          </td>
          <td>
            <Badge pill color='light-danger'>
              Active
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='mr-50' size={15} /> <span className='align-middle'>Edit</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='mr-50' size={15} /> <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr className='table-warning'>
          <td>
            <img className='mr-75' src={react} alt='react' height='20' width='20' />
            <span className='align-middle font-weight-bold'>React Custom</span>
          </td>
          <td>Ted Richer</td>
          <td>
            <AvatarGroup data={avatarGroupData7} />
          </td>
          <td>
            <Badge pill color='light-warning'>
              Schedule
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='mr-50' size={15} /> <span className='align-middle'>Edit</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='mr-50' size={15} /> <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr className='table-info'>
          <td>
            <img className='mr-75' src={bootstrap} alt='bootstrap' height='20' width='20' />
            <span className='align-middle font-weight-bold'>Latest Bootstrap</span>
          </td>
          <td>Perry Parker</td>
          <td>
            <AvatarGroup data={avatarGroupData8} />
          </td>
          <td>
            <Badge pill color='light-info'>
              Pending
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='mr-50' size={15} /> <span className='align-middle'>Edit</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='mr-50' size={15} /> <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr className='table-light'>
          <td>
            <img className='mr-75' src={angular} alt='angular' height='20' width='20' />
            <span className='align-middle font-weight-bold'>Angular UI</span>
          </td>
          <td>Ana Bell</td>
          <td>
            <AvatarGroup data={avatarGroupData9} />
          </td>
          <td>
            <Badge pill color='light-primary'>
              Completed
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='mr-50' size={15} /> <span className='align-middle'>Edit</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='mr-50' size={15} /> <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr className='table-dark'>
          <td>
            <img className='mr-75' src={bootstrap} alt='bootstrap' height='20' width='20' />
            <span className='align-middle font-weight-bold'>Bootstrap UI</span>
          </td>
          <td>Jerry Milton</td>
          <td>
            <AvatarGroup data={avatarGroupData10} />
          </td>
          <td>
            <Badge pill color='light-dark'>
              Completed
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='mr-50' size={15} /> <span className='align-middle'>Edit</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='mr-50' size={15} /> <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default TableContextual
