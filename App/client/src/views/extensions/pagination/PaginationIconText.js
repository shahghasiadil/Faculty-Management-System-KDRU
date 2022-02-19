import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import ReactPaginate from 'react-paginate'

const Previous = () => {
  return <span className='align-middle d-none d-md-inline-block'>Prev</span>
}

const Next = () => {
  return <span className='align-middle d-none d-md-inline-block'>Next </span>
}

const IconTextPagination = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>With icon and text</CardTitle>
      </CardHeader>
      <CardBody>
        <ReactPaginate
          pageCount={10}
          nextLabel={<Next />}
          breakLabel={'...'}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          activeClassName={'active'}
          pageClassName={'page-item'}
          previousLabel={<Previous />}
          nextLinkClassName={'page-link'}
          nextClassName={'page-item next'}
          previousClassName={'page-item prev'}
          previousLinkClassName={'page-link'}
          pageLinkClassName={'page-link'}
          breakClassName='page-item'
          breakLinkClassName='page-link'
          containerClassName={'pagination react-paginate'}
        />
      </CardBody>
    </Card>
  )
}
export default IconTextPagination
