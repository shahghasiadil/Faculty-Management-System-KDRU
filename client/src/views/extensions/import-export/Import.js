import { Fragment, useState } from 'react'
import XLSX from 'xlsx'
import Uppy from '@uppy/core'
import { X } from 'react-feather'
import { DragDrop } from '@uppy/react'
import Avatar from '@components/avatar'
import { toast } from 'react-toastify'
import ExtensionsHeader from '@components/extensions-header'
import { Row, Col, Card, CardBody, Table, CardHeader, CardTitle, Input, Label } from 'reactstrap'

import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@styles/react/libs/file-uploader/file-uploader.scss'

const ErrorToast = () => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='danger' icon={<X size={12} />} />
        <h6 className='toast-title'>Error!</h6>
      </div>
      <small className='text-muted'>a second ago</small>
    </div>
    <div className='toastify-body'>
      <span role='img' aria-label='toast-text'>
        👋 You can only upload <span className='font-weight-bolder'>.xlsx</span>,{' '}
        <span className='font-weight-bolder'>.xls</span> & <span className='font-weight-bolder'>.csv</span> Files!.
      </span>
    </div>
  </Fragment>
)

const Import = () => {
  const [tableData, setTableData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [value, setValue] = useState('')
  const [name, setName] = useState('')

  const uppy = new Uppy({
    restrictions: { maxNumberOfFiles: 1 },
    autoProceed: true
  })

  const getTableData = (arr, name) => {
    setTableData(arr)
    setName(name)
  }

  uppy.on('complete', result => {
    const reader = new FileReader()
    reader.onload = function () {
      const fileData = reader.result
      const wb = XLSX.read(fileData, { type: 'binary' })

      wb.SheetNames.forEach(function (sheetName) {
        const rowObj = XLSX.utils.sheet_to_row_object_array(wb.Sheets[sheetName])
        getTableData(rowObj, result.successful[0].data.name)
      })
    }
    if (result.successful[0].extension === 'xlsx') {
      reader.readAsBinaryString(result.successful[0].data)
    } else {
      toast.error(<ErrorToast />, { hideProgressBar: true })
    }
  })

  const handleFilter = e => {
    const data = tableData
    let filteredData = []
    const value = e.target.value
    setValue(value)

    if (value.length) {
      filteredData = data.filter(col => {
        const keys = Object.keys(col)

        const startsWithCondition = keys.filter(key => {
          return col[key].toString().toLowerCase().startsWith(value.toLowerCase())
        })

        const includesCondition = keys.filter(key => col[key].toString().toLowerCase().includes(value.toLowerCase()))

        if (startsWithCondition.length) return col[startsWithCondition]
        else if (!startsWithCondition && includesCondition.length) return col[includesCondition]
        else return null
      })
      setFilteredData(filteredData)
      setValue(value)
    } else {
      return null
    }
  }
  /*eslint-disable */
  const headArr = tableData.length
    ? tableData.map((col, index) => {
        if (index === 0) return [...Object.keys(col)]
        else return null
      })
    : []
  /*eslint-enable */
  const dataArr = value.length ? filteredData : tableData.length && !value.length ? tableData : null

  const renderTableBody = () => {
    if (dataArr !== null && dataArr.length) {
      return dataArr.map((col, index) => {
        const keys = Object.keys(col)
        const renderTd = keys.map((key, index) => <td key={index}>{col[key]}</td>)
        return <tr key={index}>{renderTd}</tr>
      })
    } else {
      return null
    }
  }

  const renderTableHead = () => {
    if (headArr.length) {
      return headArr[0].map((head, index) => {
        return <th key={index}>{head}</th>
      })
    } else {
      return null
    }
  }

  return (
    <Fragment>
      <ExtensionsHeader
        title='XLSX'
        subTitle='Xlsx is a parser and writer for various spreadsheet formats'
        link='https://github.com/AdeleD/react-paginate'
      />
      <Row className='import-component'>
        <Col sm='12'>
          <Card>
            <CardBody>
              <Row>
                <Col sm='12'>
                  <DragDrop uppy={uppy} />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        {tableData.length ? (
          <Col sm='12'>
            <Card>
              <CardHeader className='justify-content-between flex-wrap'>
                <CardTitle tag='h4'>{name}</CardTitle>
                <div className='d-flex align-items-center justify-content-end'>
                  <Label for='search-input' className='mr-1'>
                    Search
                  </Label>
                  <Input id='search-input' type='text' bsSize='sm' value={value} onChange={e => handleFilter(e)} />
                </div>
              </CardHeader>
              <Table className='table-hover-animation' responsive>
                <thead>
                  <tr>{renderTableHead()}</tr>
                </thead>
                <tbody>{renderTableBody()}</tbody>
              </Table>
            </Card>
          </Col>
        ) : null}
      </Row>
    </Fragment>
  )
}

export default Import
