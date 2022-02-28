import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import ReactPaginate from 'react-paginate'
const SeparatedPagination = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Separated</CardTitle>
      </CardHeader>
      <CardBody>
        <ReactPaginate
          pageCount={10}
          nextLabel={''}
          breakLabel={'...'}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          activeClassName={'active'}
          pageClassName={'page-item'}
          previousLabel={''}
          nextLinkClassName={'page-link'}
          nextClassName={'page-item next-item'}
          previousClassName={'page-item prev-item'}
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
export default SeparatedPagination
