export const paginationBasic = (
  <pre>
    <code className='language-jsx'>
      {`

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const PaginationBasic = () => {
  return (
    <Pagination className='d-flex mt-3'>
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
    </Pagination>
  )
}
export default PaginationBasic
  `}
    </code>
  </pre>
)

export const paginationSeparated = (
  <pre>
    <code className='language-jsx'>
      {`

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { ChevronLeft, ChevronRight } from 'react-feather'

const PaginationSeparated = () => {
  return (
    <Pagination className='d-flex mt-3'>
      <PaginationItem className='prev-item'>
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
      <PaginationItem className='next-item'>
        <PaginationLink href='#' last>
          <ChevronRight size={15} />
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  )
}
export default PaginationSeparated
  `}
    </code>
  </pre>
)

export const paginationIconsAndText = (
  <pre>
    <code className='language-jsx'>
      {`

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { ChevronLeft, ChevronRight } from 'react-feather'

const PaginationIconsAndText = () => {
  return (
    <Pagination className='d-flex mt-3'>
      <PaginationItem>
        <PaginationLink href='#' first>
          <ChevronLeft size={15} /> Prev
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
        <PaginationLink href='#' last>
          Next
          <ChevronRight size={15} />
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  )
}
export default PaginationIconsAndText
  `}
    </code>
  </pre>
)

export const paginationIcons = (
  <pre>
    <code className='language-jsx'>
      {`

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { ChevronLeft, ChevronRight } from 'react-feather'

const PaginationIcons = () => {
  return (
    <Pagination className='d-flex mt-3'>
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
        <PaginationLink href='#' last>
          <ChevronRight size={15} />
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  )
}
export default PaginationIcons
  `}
    </code>
  </pre>
)

export const paginationSuccess = (
  <pre>
    <code className='language-jsx'>
      {`

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { ChevronLeft, ChevronRight } from 'react-feather'

const PaginationSuccess = () => {
  return (
    <Pagination className='d-flex mt-3' listClassName='pagination-success'>
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
export default PaginationSuccess

  `}
    </code>
  </pre>
)

export const paginationDanger = (
  <pre>
    <code className='language-jsx'>
      {`

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

  `}
    </code>
  </pre>
)

export const paginationInfo = (
  <pre>
    <code className='language-jsx'>
      {`

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { ChevronLeft, ChevronRight } from 'react-feather'

const PaginationInfo = () => {
  return (
    <Pagination className='d-flex mt-3' listClassName='pagination-info'>
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
export default PaginationInfo

  `}
    </code>
  </pre>
)

export const paginationWarning = (
  <pre>
    <code className='language-jsx'>
      {`

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { ChevronLeft, ChevronRight } from 'react-feather'

const PaginationWarning = () => {
  return (
    <Pagination className='d-flex mt-3' listClassName='pagination-warning'>
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
export default PaginationWarning
  `}
    </code>
  </pre>
)

export const paginationPositions = (
  <pre>
    <code className='language-jsx'>
      {`

import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Col
} from 'reactstrap'

const PaginationPositions = () => {
  return (
    <Row>
      <Col xl='4' lg='12'>
        <h5 className='text-left'>Left Aligned</h5>
        <Pagination className='d-flex justify-content-start mt-3'>
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
        <h5 className='text-center'>Center Aligned</h5>
        <Pagination className='d-flex justify-content-center mt-3'>
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
        <h5 className='text-right'>Right Aligned</h5>
        <Pagination className='d-flex justify-content-end mt-3'>
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
  `}
    </code>
  </pre>
)

export const paginationSizes = (
  <pre>
    <code className='language-jsx'>
      {`

import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Col
} from 'reactstrap'

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
  `}
    </code>
  </pre>
)
