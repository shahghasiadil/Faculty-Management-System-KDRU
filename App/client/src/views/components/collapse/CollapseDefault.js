import { CardText } from 'reactstrap'
import AppCollapse from '@components/app-collapse'

const data = [
  {
    title: 'Collapse Item 1',
    content: (
      <CardText className='mb-0'>
        Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie brownie
        cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops candy. Jelly marshmallow
        chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple pie pudding jelly beans pie candy
        canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé dessert cake.
      </CardText>
    )
  },
  {
    title: 'Collapse Item 2',
    content: (
      <CardText className='mb-0'>
        Jelly-o brownie marshmallow soufflé I love jelly beans oat cake. I love gummies chocolate bar marshmallow sugar
        plum. Pudding carrot cake sweet roll marzipan I love jujubes. Sweet roll tart sugar plum halvah donut. Cake
        gingerbread tart. Tootsie roll soufflé danish powder marshmallow sugar plum halvah sweet chocolate bar. Jujubes
        cupcake I love toffee biscuit.
      </CardText>
    )
  },
  {
    title: 'Collapse Item 3',
    content: (
      <CardText className='mb-0'>
        Pudding lollipop dessert chocolate gingerbread. Cake cupcake bonbon cupcake marshmallow. Gummi bears carrot cake
        bonbon cake. Sweet roll fruitcake bear claw soufflé. Apple pie ice cream liquorice sesame snaps brownie. Donut
        marshmallow donut pudding chupa chups.
      </CardText>
    )
  },
  {
    title: 'Collapse Item 4',
    content: (
      <CardText className='mb-0'>
        Brownie sweet carrot cake dragée caramels fruitcake. Gummi bears tootsie roll croissant gingerbread dragée
        tootsie roll. Cookie caramels tootsie roll pie. Sesame snaps cookie cake donut wafer. Wafer cookie jelly-o candy
        muffin cake. Marzipan topping lollipop. Gummies chocolate sugar plum.
      </CardText>
    )
  }
]

const CollapseDefault = () => <AppCollapse data={data} />

export default CollapseDefault
