// ** React Imports
import { useState, Fragment } from 'react'

// ** Table Columns
import { data, advSearchColumns } from '../data'

// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'
import { Card, CardHeader, CardBody, CardTitle, Input, Label, FormGroup, Row, Col } from 'reactstrap'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const DataTableAdvSearch = () => {
  // ** States
  const [Picker, setPicker] = useState('')
  const [searchName, setSearchName] = useState('')
  const [searchPost, setSearchPost] = useState('')
  const [searchCity, setSearchCity] = useState('')
  const [currentPage, setCurrentPage] = useState(0)
  const [searchEmail, setSearchEmail] = useState('')
  const [searchSalary, setSearchSalary] = useState('')
  const [filteredData, setFilteredData] = useState([])

  // ** Function to handle Pagination
  const handlePagination = page => setCurrentPage(page.selected)

  // ** Table data to render
  const dataToRender = () => {
    if (
      searchName.length ||
      searchPost.length ||
      searchEmail.length ||
      searchCity.length ||
      searchSalary.length ||
      Picker.length
    ) {
      return filteredData
    } else {
      return data
    }
  }

  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel={''}
      nextLabel={''}
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={dataToRender().length / 7 || 1}
      breakLabel={'...'}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName={'active'}
      pageClassName={'page-item'}
      nextLinkClassName={'page-link'}
      nextClassName={'page-item next'}
      previousClassName={'page-item prev'}
      previousLinkClassName={'page-link'}
      pageLinkClassName={'page-link'}
      breakClassName='page-item'
      breakLinkClassName='page-link'
      containerClassName={'pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1'}
    />
  )

  // ** Function to handle name filter
  const handleNameFilter = e => {
    const value = e.target.value
    let updatedData = []
    const dataToFilter = () => {
      if (searchEmail.length || searchPost.length || searchCity.length || searchSalary.length || Picker.length) {
        return filteredData
      } else {
        return data
      }
    }

    setSearchName(value)
    if (value.length) {
      updatedData = dataToFilter().filter(item => {
        const startsWith = item.full_name.toLowerCase().startsWith(value.toLowerCase())

        const includes = item.full_name.toLowerCase().includes(value.toLowerCase())

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setFilteredData([...updatedData])
      setSearchName(value)
    }
  }

  // ** Function to handle email filter
  const handleEmailFilter = e => {
    const value = e.target.value
    let updatedData = []
    const dataToFilter = () => {
      if (searchName.length || searchPost.length || searchCity.length || searchSalary.length || Picker.length) {
        return filteredData
      } else {
        return data
      }
    }

    setSearchEmail(value)
    if (value.length) {
      updatedData = dataToFilter().filter(item => {
        const startsWith = item.email.toLowerCase().startsWith(value.toLowerCase())

        const includes = item.email.toLowerCase().includes(value.toLowerCase())

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setFilteredData([...updatedData])
      setSearchEmail(value)
    }
  }

  // ** Function to handle post filter
  const handlePostFilter = e => {
    const value = e.target.value
    let updatedData = []
    const dataToFilter = () => {
      if (searchEmail.length || searchName.length || searchCity.length || searchSalary.length || Picker.length) {
        return filteredData
      } else {
        return data
      }
    }

    setSearchPost(value)
    if (value.length) {
      updatedData = dataToFilter().filter(item => {
        const startsWith = item.post.toLowerCase().startsWith(value.toLowerCase())

        const includes = item.post.toLowerCase().includes(value.toLowerCase())

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setFilteredData([...updatedData])
      setSearchPost(value)
    }
  }

  // ** Function to handle city filter
  const handleCityFilter = e => {
    const value = e.target.value
    let updatedData = []
    const dataToFilter = () => {
      if (searchEmail.length || searchName.length || searchPost.length || searchSalary.length || Picker.length) {
        return filteredData
      } else {
        return data
      }
    }

    setSearchCity(value)
    if (value.length) {
      updatedData = dataToFilter().filter(item => {
        const startsWith = item.city.toLowerCase().startsWith(value.toLowerCase())

        const includes = item.city.toLowerCase().includes(value.toLowerCase())

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setFilteredData([...updatedData])
      setSearchCity(value)
    }
  }

  // ** Function to handle salary filter
  const handleSalaryFilter = e => {
    const value = e.target.value
    let updatedData = []
    const dataToFilter = () => {
      if (searchEmail.length || searchName.length || searchPost.length || searchCity.length || Picker.length) {
        return filteredData
      } else {
        return data
      }
    }

    setSearchSalary(value)
    if (value.length) {
      updatedData = dataToFilter().filter(item => {
        const startsWith = item.salary.toLowerCase().startsWith(value.toLowerCase())

        const includes = item.salary.toLowerCase().includes(value.toLowerCase())

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setFilteredData([...updatedData])
      setSearchSalary(value)
    }
  }

  // ** Function to handle date filter
  const handleDateFilter = range => {
    const arr = []
    let updatedData = []
    const dataToFilter = () => {
      if (searchEmail.length || searchName.length || searchPost.length || searchCity.length || searchSalary.length) {
        return filteredData
      } else {
        return data
      }
    }

    range.map(i => {
      const date = new Date(i)

      const year = date.getFullYear()

      let month = (1 + date.getMonth()).toString()
      month = month.length > 1 ? month : `0${month}`

      let day = date.getDate().toString()
      day = day.length > 1 ? day : `0${day}`

      arr.push(`${month}/${day}/${year}`)
      return true
    })

    setPicker(range)

    if (range.length) {
      updatedData = dataToFilter().filter(item => {
        return (
          new Date(item.start_date).getTime() >= new Date(arr[0]).getTime() &&
          new Date(item.start_date).getTime() <= new Date(arr[1]).getTime()
        )
      })
      setFilteredData([...updatedData])
      setPicker(range)
    }
  }

  return (
    <Fragment>
      <Card>
        <CardHeader className='border-bottom'>
          <CardTitle tag='h4'>Advance Search</CardTitle>
        </CardHeader>
        <CardBody>
          <Row form className='mt-1 mb-50'>
            <Col lg='4' md='6'>
              <FormGroup>
                <Label for='name'>Name:</Label>
                <Input id='name' placeholder='Bruce Wayne' value={searchName} onChange={handleNameFilter} />
              </FormGroup>
            </Col>
            <Col lg='4' md='6'>
              <FormGroup>
                <Label for='email'>Email:</Label>
                <Input
                  type='email'
                  id='email'
                  placeholder='Bwayne@email.com'
                  value={searchEmail}
                  onChange={handleEmailFilter}
                />
              </FormGroup>
            </Col>
            <Col lg='4' md='6'>
              <FormGroup>
                <Label for='post'>Post:</Label>
                <Input id='post' placeholder='Web Designer' value={searchPost} onChange={handlePostFilter} />
              </FormGroup>
            </Col>
            <Col lg='4' md='6'>
              <FormGroup>
                <Label for='city'>City:</Label>
                <Input id='city' placeholder='San Diego' value={searchCity} onChange={handleCityFilter} />
              </FormGroup>
            </Col>
            <Col lg='4' md='6'>
              <FormGroup>
                <Label for='date'>Date:</Label>
                <Flatpickr
                  className='form-control'
                  id='date'
                  value={Picker}
                  options={{ mode: 'range', dateFormat: 'm/d/Y' }}
                  onChange={date => handleDateFilter(date)}
                />
              </FormGroup>
            </Col>
            <Col lg='4' md='6'>
              <FormGroup>
                <Label for='salary'>Salary:</Label>
                <Input id='salary' placeholder='10000' value={searchSalary} onChange={handleSalaryFilter} />
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
        <DataTable
          noHeader
          pagination
          columns={advSearchColumns}
          paginationPerPage={7}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          paginationComponent={CustomPagination}
          data={dataToRender()}
        />
      </Card>
    </Fragment>
  )
}

export default DataTableAdvSearch
