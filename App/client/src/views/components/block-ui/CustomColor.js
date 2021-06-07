import { useState } from 'react'
import UILoader from '@components/ui-loader'
import { Card, CardHeader, CardTitle, CardText, CardBody, Button } from 'reactstrap'

const CustomColorBlocking = () => {
  const [block, setBlock] = useState(false)

  const handleBlock = () => {
    setBlock(true)

    setTimeout(() => {
      setBlock(false)
    }, 3000)
  }

  return (
    <UILoader blocking={block} overlayColor='rgba(115, 103, 240, .1)'>
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Custom Color</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            Lorem ipsum dolor sit amet, an vel affert soleat possim. Usu meis neglegentur ut, oporteat salutandi
            dignissim at mea. Pericula erroribus quaerendum ex duo, his autem accusamus ad, alienum detracto rationibus
            vis et. No est volumus ocurreret vituperata.
          </CardText>
          <Button color='primary' outline onClick={handleBlock}>
            Block
          </Button>
        </CardBody>
      </Card>
    </UILoader>
  )
}

export default CustomColorBlocking
