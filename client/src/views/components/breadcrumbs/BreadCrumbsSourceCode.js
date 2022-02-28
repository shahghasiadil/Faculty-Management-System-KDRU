export const breadcrumbsDefault = (
  <pre>
    <code className='language-jsx'>
      {`

import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const BreadcrumbsDefault = () => {
  return (
    <React.Fragment>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to='#'> Home </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to='#'> Library </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span> Data </span>
        </BreadcrumbItem>
      </Breadcrumb>
    </React.Fragment>
  )
}
export default BreadcrumbsDefault
    `}
    </code>
  </pre>
)

export const breadcrumbsStyles = (
  <pre>
    <code className='language-jsx'>
      {`

import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const BreadcrumbsStyles = () => {
  return (
    <React.Fragment>
      <Breadcrumb className='breadcrumb-slash'>
        <BreadcrumbItem>
          <Link to='#'> Home </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to='#'> Library </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span> Data </span>
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb className='breadcrumb-dots'>
        <BreadcrumbItem>
          <Link to='#'> Home </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to='#'> Library </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span> Data </span>
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb className='breadcrumb-dashes'>
        <BreadcrumbItem>
          <Link to='#'> Home </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to='#'> Library </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span> Data </span>
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb className='breadcrumb-pipes'>
        <BreadcrumbItem>
          <Link to='#'> Home </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to='#'> Library </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span> Data </span>
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb className='breadcrumb-chevron'>
        <BreadcrumbItem>
          <Link to='#'> Home </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to='#'> Library </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span> Data </span>
        </BreadcrumbItem>
      </Breadcrumb>
    </React.Fragment>
  )
}
export default BreadcrumbsStyles

      `}
    </code>
  </pre>
)

export const breadcrumbsAlignment = (
  <pre>
    <code className='language-jsx'>
      {`

import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const BreadcrumbsAlignment = () => {
  return (
    <React.Fragment>
      <div className='justify-content-start breadcrumb-wrapper'>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='#'> Home </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to='#'> Library </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <span> Data </span>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className='justify-content-center breadcrumb-wrapper'>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='#'> Home </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to='#'> Library </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <span> Data </span>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className='justify-content-end breadcrumb-wrapper'>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='#'> Home </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to='#'> Library </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <span> Data </span>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </React.Fragment>
  )
}
export default BreadcrumbsAlignment

      `}
    </code>
  </pre>
)
