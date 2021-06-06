import { Fragment } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const BreadcrumbsDefault = () => {
  return (
    <Fragment>
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
    </Fragment>
  )
}
export default BreadcrumbsDefault
