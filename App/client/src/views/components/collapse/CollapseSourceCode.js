export const defaultCollapse = (
  <pre>
    <code className='language-jsx'>
      {`

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
`}
    </code>
  </pre>
)

export const accordion = (
  <pre>
    <code className='language-jsx'>
      {`

import { CardText } from 'reactstrap'
import AppCollapse from '@components/app-collapse'

const data = [
  {
    title: 'Accordion Item 1',
    content: (
      <CardText className='mb-0'>
        Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups
        lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop
        cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream
        pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie
        cheesecake liquorice apple pie.
      </CardText>
    )
  },
  {
    title: 'Accordion Item 2',
    content: (
      <CardText className='mb-0'>
        Pie pudding candy. Oat cake jelly beans bear claw lollipop. Ice cream candy canes tootsie roll muffin powder
        donut powder. Topping candy canes chocolate bar lemon drops candy canes. Halvah muffin marzipan powder sugar
        plum donut donut cotton candy biscuit. Wafer jujubes apple pie sweet lemon drops jelly cupcake. Caramels dessert
        halvah marshmallow. Candy topping cotton candy oat cake croissant halvah gummi bears toffee powder.
      </CardText>
    )
  },
  {
    title: 'Accordion Item 3',
    content: (
      <CardText className='mb-0'>
        Gingerbread liquorice liquorice cake muffin lollipop powder chocolate cake. Gummi bears lemon drops toffee
        liquorice pastry cake caramels chocolate bar brownie. Sweet biscuit chupa chups sweet. Halvah fruitcake
        gingerbread croissant dessert cupcake. Chupa chups chocolate bar donut tart. Donut cake dessert cookie. Ice
        cream tootsie roll powder chupa chups pastry cupcake soufflé.
      </CardText>
    )
  },
  {
    title: 'Accordion Item 4',
    content: (
      <CardText className='mb-0'>
        Icing sweet roll cotton candy brownie candy canes candy canes. Pie jelly dragée pie. Ice cream jujubes wafer.
        Wafer croissant carrot cake wafer gummies gummies chupa chups halvah bonbon. Gummi bears cotton candy jelly-o
        halvah. Macaroon apple pie dragée bonbon marzipan cheesecake. Jelly jelly beans marshmallow.
      </CardText>
    )
  }
]

const Accordion = () => <AppCollapse data={data} accordion />

export default Accordion
`}
    </code>
  </pre>
)

export const accordionShadow = (
  <pre>
    <code className='language-jsx'>
      {`

import { CardText } from 'reactstrap'
import AppCollapse from '@components/app-collapse'

const data = [
  {
    title: 'Accordion Item 1',
    content: (
      <CardText className='mb-0'>
        Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups
        lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop
        cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream
        pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie
        cheesecake liquorice apple pie.
      </CardText>
    )
  },
  {
    title: 'Accordion Item 2',
    content: (
      <CardText className='mb-0'>
        Pie pudding candy. Oat cake jelly beans bear claw lollipop. Ice cream candy canes tootsie roll muffin powder
        donut powder. Topping candy canes chocolate bar lemon drops candy canes. Halvah muffin marzipan powder sugar
        plum donut donut cotton candy biscuit. Wafer jujubes apple pie sweet lemon drops jelly cupcake. Caramels dessert
        halvah marshmallow. Candy topping cotton candy oat cake croissant halvah gummi bears toffee powder.
      </CardText>
    )
  },
  {
    title: 'Accordion Item 3',
    content: (
      <CardText className='mb-0'>
        Gingerbread liquorice liquorice cake muffin lollipop powder chocolate cake. Gummi bears lemon drops toffee
        liquorice pastry cake caramels chocolate bar brownie. Sweet biscuit chupa chups sweet. Halvah fruitcake
        gingerbread croissant dessert cupcake. Chupa chups chocolate bar donut tart. Donut cake dessert cookie. Ice
        cream tootsie roll powder chupa chups pastry cupcake soufflé.
      </CardText>
    )
  },
  {
    title: 'Accordion Item 4',
    content: (
      <CardText className='mb-0'>
        Icing sweet roll cotton candy brownie candy canes candy canes. Pie jelly dragée pie. Ice cream jujubes wafer.
        Wafer croissant carrot cake wafer gummies gummies chupa chups halvah bonbon. Gummi bears cotton candy jelly-o
        halvah. Macaroon apple pie dragée bonbon marzipan cheesecake. Jelly jelly beans marshmallow.
      </CardText>
    )
  }
]

const AccordionShadow = () => <AppCollapse data={data} type='shadow' accordion />

export default AccordionShadow`}
    </code>
  </pre>
)

export const accordionBorder = (
  <pre>
    <code className='language-jsx'>
      {`

import { CardText } from 'reactstrap'
import AppCollapse from '@components/app-collapse'

const data = [
  {
    title: 'Accordion Item 1',
    content: (
      <CardText className='mb-0'>
        Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups
        lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop
        cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream
        pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie
        cheesecake liquorice apple pie.
      </CardText>
    )
  },
  {
    title: 'Accordion Item 2',
    content: (
      <CardText className='mb-0'>
        Pie pudding candy. Oat cake jelly beans bear claw lollipop. Ice cream candy canes tootsie roll muffin powder
        donut powder. Topping candy canes chocolate bar lemon drops candy canes. Halvah muffin marzipan powder sugar
        plum donut donut cotton candy biscuit. Wafer jujubes apple pie sweet lemon drops jelly cupcake. Caramels dessert
        halvah marshmallow. Candy topping cotton candy oat cake croissant halvah gummi bears toffee powder.
      </CardText>
    )
  },
  {
    title: 'Accordion Item 3',
    content: (
      <CardText className='mb-0'>
        Gingerbread liquorice liquorice cake muffin lollipop powder chocolate cake. Gummi bears lemon drops toffee
        liquorice pastry cake caramels chocolate bar brownie. Sweet biscuit chupa chups sweet. Halvah fruitcake
        gingerbread croissant dessert cupcake. Chupa chups chocolate bar donut tart. Donut cake dessert cookie. Ice
        cream tootsie roll powder chupa chups pastry cupcake soufflé.
      </CardText>
    )
  },
  {
    title: 'Accordion Item 4',
    content: (
      <CardText className='mb-0'>
        Icing sweet roll cotton candy brownie candy canes candy canes. Pie jelly dragée pie. Ice cream jujubes wafer.
        Wafer croissant carrot cake wafer gummies gummies chupa chups halvah bonbon. Gummi bears cotton candy jelly-o
        halvah. Macaroon apple pie dragée bonbon marzipan cheesecake. Jelly jelly beans marshmallow.
      </CardText>
    )
  }
]

const AccordionBorder = () => <AppCollapse data={data} type='border' accordion />

export default AccordionBorder`}
    </code>
  </pre>
)

export const accordionMargin = (
  <pre>
    <code className='language-jsx'>
      {`

import { CardText } from 'reactstrap'
import AppCollapse from '@components/app-collapse'

const data = [
  {
    title: 'Accordion Item 1',
    content: (
      <CardText className='mb-0'>
        Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups
        lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop
        cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream
        pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie
        cheesecake liquorice apple pie.
      </CardText>
    )
  },
  {
    title: 'Accordion Item 2',
    content: (
      <CardText className='mb-0'>
        Pie pudding candy. Oat cake jelly beans bear claw lollipop. Ice cream candy canes tootsie roll muffin powder
        donut powder. Topping candy canes chocolate bar lemon drops candy canes. Halvah muffin marzipan powder sugar
        plum donut donut cotton candy biscuit. Wafer jujubes apple pie sweet lemon drops jelly cupcake. Caramels dessert
        halvah marshmallow. Candy topping cotton candy oat cake croissant halvah gummi bears toffee powder.
      </CardText>
    )
  },
  {
    title: 'Accordion Item 3',
    content: (
      <CardText className='mb-0'>
        Gingerbread liquorice liquorice cake muffin lollipop powder chocolate cake. Gummi bears lemon drops toffee
        liquorice pastry cake caramels chocolate bar brownie. Sweet biscuit chupa chups sweet. Halvah fruitcake
        gingerbread croissant dessert cupcake. Chupa chups chocolate bar donut tart. Donut cake dessert cookie. Ice
        cream tootsie roll powder chupa chups pastry cupcake soufflé.
      </CardText>
    )
  },
  {
    title: 'Accordion Item 4',
    content: (
      <CardText className='mb-0'>
        Icing sweet roll cotton candy brownie candy canes candy canes. Pie jelly dragée pie. Ice cream jujubes wafer.
        Wafer croissant carrot cake wafer gummies gummies chupa chups halvah bonbon. Gummi bears cotton candy jelly-o
        halvah. Macaroon apple pie dragée bonbon marzipan cheesecake. Jelly jelly beans marshmallow.
      </CardText>
    )
  }
]

const AccordionMargin = () => <AppCollapse data={data} type='margin' accordion />

export default AccordionMargin
`}
    </code>
  </pre>
)

export const accordionHover = (
  <pre>
    <code className='language-jsx'>
      {`

import { CardText } from 'reactstrap'
import AppCollapse from '@components/app-collapse'

const data = [
  {
    title: 'Accordion Item 1',
    content: (
      <CardText className='mb-0'>
        Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups
        lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop
        cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream
        pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie
        cheesecake liquorice apple pie.
      </CardText>
    )
  },
  {
    title: 'Accordion Item 2',
    content: (
      <CardText className='mb-0'>
        Pie pudding candy. Oat cake jelly beans bear claw lollipop. Ice cream candy canes tootsie roll muffin powder
        donut powder. Topping candy canes chocolate bar lemon drops candy canes. Halvah muffin marzipan powder sugar
        plum donut donut cotton candy biscuit. Wafer jujubes apple pie sweet lemon drops jelly cupcake. Caramels dessert
        halvah marshmallow. Candy topping cotton candy oat cake croissant halvah gummi bears toffee powder.
      </CardText>
    )
  },
  {
    title: 'Accordion Item 3',
    content: (
      <CardText className='mb-0'>
        Gingerbread liquorice liquorice cake muffin lollipop powder chocolate cake. Gummi bears lemon drops toffee
        liquorice pastry cake caramels chocolate bar brownie. Sweet biscuit chupa chups sweet. Halvah fruitcake
        gingerbread croissant dessert cupcake. Chupa chups chocolate bar donut tart. Donut cake dessert cookie. Ice
        cream tootsie roll powder chupa chups pastry cupcake soufflé.
      </CardText>
    )
  },
  {
    title: 'Accordion Item 4',
    content: (
      <CardText className='mb-0'>
        Icing sweet roll cotton candy brownie candy canes candy canes. Pie jelly dragée pie. Ice cream jujubes wafer.
        Wafer croissant carrot cake wafer gummies gummies chupa chups halvah bonbon. Gummi bears cotton candy jelly-o
        halvah. Macaroon apple pie dragée bonbon marzipan cheesecake. Jelly jelly beans marshmallow.
      </CardText>
    )
  }
]

const AccordionHover = () => <AppCollapse data={data} toggle='hover' accordion />

export default AccordionHover

`}
    </code>
  </pre>
)
