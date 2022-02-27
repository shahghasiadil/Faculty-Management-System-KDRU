import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { ChevronLeft, ChevronRight } from 'react-feather'

const PaginationDanger = () => {
  return (
    <Pagination className='d-flex mt-3' listClassName='pagination-danger'>
      <PaginationItem>
        <PaginationLink href='#' first>
          <ChevronLeft size={15} />
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#'>1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#'>2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#'>3</PaginationLink>
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href='#'>4</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#'>5</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#'>6</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#'>7</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#' last>
          <ChevronRight size={15} />
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  )
}
export default PaginationDanger
