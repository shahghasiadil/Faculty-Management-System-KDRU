import { Pagination, PaginationItem, PaginationLink, Row, Col } from 'reactstrap'

const PaginationPositions = () => {
  return (
    <Row className='align-items-center'>
      <Col xl='4' lg='12'>
        <Pagination size='lg'>
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
        </Pagination>
      </Col>
      <Col xl='4' lg='12'>
        <Pagination>
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
        </Pagination>
      </Col>
      <Col xl='4' lg='12'>
        <Pagination size='sm'>
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
        </Pagination>
      </Col>
    </Row>
  )
}
export default PaginationPositions
