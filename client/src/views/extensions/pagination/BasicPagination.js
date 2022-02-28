import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import ReactPaginate from 'react-paginate'
const BasicPagination = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Basic</CardTitle>
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
          breakClassName='page-item'
          breakLinkClassName='page-link'
          nextLinkClassName={'page-link'}
          nextClassName={'page-item next-item'}
          previousClassName={'page-item prev-item'}
          previousLinkClassName={'page-link'}
          pageLinkClassName={'page-link'}
          containerClassName={'pagination react-paginate no-navigation'}
        />
      </CardBody>
    </Card>
  )
}
export default BasicPagination
