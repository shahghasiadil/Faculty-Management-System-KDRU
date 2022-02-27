import { Fragment, useState } from 'react'
import ExtensionsHeader from '@components/extensions-header'
import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  FormGroup,
  CustomInput,
  Label
} from 'reactstrap'
import classnames from 'classnames'
import XLSX from 'xlsx'

const initialData = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    website: 'hildegard.org'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    website: 'anastasia.net'
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    website: 'ramiro.info'
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    website: 'kale.biz'
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    website: 'demarco.info'
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    website: 'ola.org'
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    website: 'elvis.io'
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    website: 'jacynthe.com'
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    website: 'conrad.com'
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    website: 'ambrose.net'
  }
]

const ExportSelected = () => {
  const [data] = useState(initialData)
  const [filteredData, setFilteredData] = useState([])
  const [dataToExport, setDataToExport] = useState([])
  const [value, setValue] = useState('')
  const [modal, setModal] = useState(false)
  const [fileName, setFileName] = useState('')
  const [fileFormat, setFileFormat] = useState('xlsx')
  const [selectedRows, setSelectedRows] = useState([])

  const toggleModal = () => setModal(!modal)

  const handleFilter = e => {
    let filteredData = []
    const value = e.target.value
    setValue(value)
    if (value.length) {
      filteredData = data.filter(col => {
        const startsWithCondition =
          col.name.toLowerCase().startsWith(value.toLowerCase()) ||
          col.email.toLowerCase().startsWith(value.toLowerCase()) ||
          col.website.toLowerCase().startsWith(value.toLowerCase()) ||
          col.id.toString().toLowerCase().startsWith(value.toLowerCase())

        const includesCondition =
          col.name.toLowerCase().includes(value.toLowerCase()) ||
          col.email.toLowerCase().includes(value.toLowerCase()) ||
          col.website.toLowerCase().includes(value.toLowerCase()) ||
          col.id.toString().toLowerCase().includes(value.toLowerCase())

        if (startsWithCondition) return startsWithCondition
        else if (!startsWithCondition && includesCondition) return includesCondition
        else return null
      })
      setValue(value)
      setFilteredData(filteredData)
    }
  }

  const handleExport = () => {
    const exportArr = dataToExport
    data.map(item => {
      if (selectedRows.includes(item.id)) {
        return exportArr.push(item)
      } else {
        return null
      }
    })
    setDataToExport([...exportArr])
    const name = fileName.length ? `${fileName}.${fileFormat}` : `excel-sheet.${fileFormat}`
    const wb = XLSX.utils.json_to_sheet(dataToExport)
    const wbout = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wbout, wb, 'test')
    XLSX.writeFile(wbout, name)
    toggleModal()
  }

  const handleSelect = id => {
    const selectedRowsArr = selectedRows
    if (!selectedRowsArr.includes(id)) {
      selectedRowsArr.push(id)
    } else if (selectedRowsArr.includes(id)) {
      selectedRowsArr.splice(selectedRowsArr.indexOf(id), 1)
    } else {
      return null
    }
    setSelectedRows([...selectedRowsArr])
  }

  const handleSelectAll = () => {
    let selectedRowsArr = selectedRows
    if (selectedRowsArr.length < data.length) {
      const ids = data.map(i => i.id)
      selectedRowsArr = ids
    } else if (selectedRowsArr.length === data.length) {
      selectedRowsArr = []
    } else {
      return null
    }

    setSelectedRows(selectedRowsArr)
  }

  const array = value ? filteredData : data
  const renderTableData = array.map(col => {
    return (
      <tr
        key={col.id}
        className={classnames({
          selected: selectedRows.includes(col.id)
        })}
      >
        <td>
          <CustomInput
            type='checkbox'
            id={col.id}
            label=''
            checked={!!selectedRows.includes(col.id)}
            onChange={() => handleSelect(col.id)}
          />
        </td>
        <td>{col.email}</td>
        <td>{col.name}</td>
        <td>{col.website}</td>
        <td>{col.id}</td>
      </tr>
    )
  })

  return (
    <Fragment>
      <ExtensionsHeader
        title='XLSX'
        subTitle='Xlsx is a parser and writer for various spreadsheet formats'
        link='https://github.com/AdeleD/react-paginate'
      />
      <Row className='export-component'>
        <Col sm='12'>
          <Card>
            <CardBody className='pb-0'>
              <div className='d-flex flex-wrap justify-content-between'>
                <Button.Ripple color='primary' onClick={() => toggleModal()}>
                  Export Selected
                </Button.Ripple>
                <div className='d-flex align-items-center justify-content-end'>
                  <Label for='search-input' className='mr-1'>
                    Search
                  </Label>
                  <Input id='search-input' bsSize='sm' type='text' value={value} onChange={e => handleFilter(e)} />
                </div>
              </div>
            </CardBody>
            <Table className='table-hover-animation mt-2' responsive>
              <thead>
                <tr>
                  <th>
                    <CustomInput
                      type='checkbox'
                      id='select-all'
                      label=''
                      checked={!!selectedRows.length}
                      onChange={e => handleSelectAll()}
                    />
                  </th>
                  <th>Email</th>
                  <th>Name</th>
                  <th>Website</th>
                  <th>Rank</th>
                </tr>
              </thead>
              <tbody>{renderTableData}</tbody>
            </Table>
          </Card>
        </Col>
      </Row>
      <Modal
        isOpen={modal}
        toggle={() => toggleModal()}
        className='modal-dialog-centered'
        onClosed={() => setFileName('')}
      >
        <ModalHeader toggle={() => toggleModal()}>Export To Excel</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Input
              type='text'
              value={fileName}
              onChange={e => setFileName(e.target.value)}
              placeholder='Enter File Name'
            />
          </FormGroup>
          <FormGroup>
            <CustomInput
              type='select'
              id='selectFileFormat'
              name='customSelect'
              value={fileFormat}
              onChange={e => {
                setFileFormat(e.target.value)
              }}
            >
              <option>xlsx</option>
              <option>csv</option>
              <option>txt</option>
            </CustomInput>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={() => handleExport()}>
            Export
          </Button>
          <Button color='flat-danger' onClick={() => toggleModal()}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  )
}

export default ExportSelected
