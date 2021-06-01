import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { ChevronLeft, ChevronRight } from 'react-feather'

const PaginationIconsAndText = () => {
  return (
    <Pagination className='d-flex mt-3'>
      <PaginationItem>
        <PaginationLink className='text-nowrap' href='#' first>
          <ChevronLeft className='align-middle' size={15} />
          <span className='align-middle'>Prev</span>
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#'>1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#'>2</PaginationLink>
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href='#'>3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#'>4</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#'>5</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink className='text-nowrap' href='#' last>
          <span className='align-middle'>Next</span>
          <ChevronRight className='align-middle' size={15} />
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  )
}
export default PaginationIconsAndText
