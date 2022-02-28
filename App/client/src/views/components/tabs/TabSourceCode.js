export const tabsBasic = (
  <pre>
    <code className='language-jsx'>
      {`
import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'

const TabsBasic = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  return (
    <React.Fragment>
      <Nav tabs>
        <NavItem>
          <NavLink
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
          >
            Service
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled>Disabled</NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '3'}
            onClick={() => {
              toggle('3')
            }}
          >
            Account
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className='py-50' activeTab={active}>
        <TabPane tabId='1'>
          <p>
            Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan
            carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon
            biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.
          </p>
          <p>
            Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes
            chocolate cake sweet roll liquorice icing cupcake. Candy cookie sweet roll bear claw sweet roll.
          </p>
        </TabPane>
        <TabPane tabId='2'>
          <p>
            Dragée jujubes caramels tootsie roll gummies gummies icing bonbon. Candy jujubes cake cotton candy. Jelly-o
            lollipop oat cake marshmallow fruitcake candy canes toffee. Jelly oat cake pudding jelly beans brownie lemon
            drops ice cream halvah muffin. Brownie candy tiramisu macaroon tootsie roll danish.
          </p>
          <p>
            Croissant pie cheesecake sweet roll. Gummi bears cotton candy tart jelly-o caramels apple pie jelly danish
            marshmallow. Icing caramels lollipop topping. Bear claw powder sesame snaps.
          </p>
        </TabPane>
        <TabPane tabId='3'>
          <p>
            Gingerbread cake cheesecake lollipop topping bonbon chocolate sesame snaps. Dessert macaroon bonbon carrot
            cake biscuit. Lollipop lemon drops cake gingerbread liquorice. Sweet gummies dragée. Donut bear claw pie
            halvah oat cake cotton candy sweet roll. Cotton candy sweet roll donut ice cream.
          </p>
          <p>
            Halvah bonbon topping halvah ice cream cake candy. Wafer gummi bears chocolate cake topping powder. Sweet
            marzipan cheesecake jelly-o powder wafer lemon drops lollipop cotton candy.
          </p>
        </TabPane>
      </TabContent>
    </React.Fragment>
  )
}
export default TabsBasic
`}
    </code>
  </pre>
)

export const tabsVerticalLeft = (
  <pre>
    <code className='language-jsx'>
      {`
import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'

const TabsVerticalLeft = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  return (
    <div className='nav-vertical'>
      <Nav tabs className='nav-left'>
        <NavItem>
          <NavLink
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
          >
            Tab 1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
          >
            Tab 2
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '3'}
            onClick={() => {
              toggle('3')
            }}
          >
            Tab 3
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={active}>
        <TabPane tabId='1'>
          <p>
            Oat cake marzipan cake lollipop caramels wafer pie jelly beans. Icing halvah chocolate cake carrot cake.
            Jelly beans carrot cake marshmallow gingerbread chocolate cake. Sweet fruitcake cheesecake biscuit cotton
            candy. Cookie powder marshmallow donut. Gummies cupcake croissant.
          </p>
        </TabPane>
        <TabPane tabId='2'>
          <p>
            Sugar plum tootsie roll biscuit caramels. Liquorice brownie pastry cotton candy oat cake fruitcake jelly
            chupa chups. Sweet fruitcake cheesecake biscuit cotton candy. Cookie powder marshmallow donut. Pudding
            caramels pastry powder cake soufflé wafer caramels. Jelly-o pie cupcake.
          </p>
        </TabPane>
        <TabPane tabId='3'>
          <p>
            Icing croissant powder jelly bonbon cake marzipan fruitcake. Tootsie roll marzipan tart marshmallow pastry
            cupcake chupa chups cookie. Fruitcake dessert lollipop pudding jelly. Cookie dragée jujubes croissant lemon
            drops cotton candy. Carrot cake candy canes powder donut toffee cookie.
          </p>
        </TabPane>
      </TabContent>
    </div>
  )
}
export default TabsVerticalLeft
`}
    </code>
  </pre>
)

export const tabsVerticalRight = (
  <pre>
    <code className='language-jsx'>
      {`
import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'

const TabsVerticalRight = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  return (
    <div className='nav-vertical'>
      <Nav tabs className='nav-right'>
        <NavItem>
          <NavLink
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
          >
            Tab 1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
          >
            Tab 2
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '3'}
            onClick={() => {
              toggle('3')
            }}
          >
            Tab 3
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={active}>
        <TabPane tabId='1'>
          <p>
            Oat cake marzipan cake lollipop caramels wafer pie jelly beans. Icing halvah chocolate cake carrot cake.
            Jelly beans carrot cake marshmallow gingerbread chocolate cake. Sweet fruitcake cheesecake biscuit cotton
            candy. Cookie powder marshmallow donut. Gummies cupcake croissant.
          </p>
        </TabPane>
        <TabPane tabId='2'>
          <p>
            Sugar plum tootsie roll biscuit caramels. Liquorice brownie pastry cotton candy oat cake fruitcake jelly
            chupa chups. Sweet fruitcake cheesecake biscuit cotton candy. Cookie powder marshmallow donut. Pudding
            caramels pastry powder cake soufflé wafer caramels. Jelly-o pie cupcake.
          </p>
        </TabPane>
        <TabPane tabId='3'>
          <p>
            Icing croissant powder jelly bonbon cake marzipan fruitcake. Tootsie roll marzipan tart marshmallow pastry
            cupcake chupa chups cookie. Fruitcake dessert lollipop pudding jelly. Cookie dragée jujubes croissant lemon
            drops cotton candy. Carrot cake candy canes powder donut toffee cookie.
          </p>
        </TabPane>
      </TabContent>
    </div>
  )
}
export default TabsVerticalRight
`}
    </code>
  </pre>
)

export const tabsFilled = (
  <pre>
    <code className='language-jsx'>
      {`
import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'

const TabsFilled = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  return (
    <React.Fragment>
      <Nav tabs fill>
        <NavItem>
          <NavLink
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
          >
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '3'}
            onClick={() => {
              toggle('3')
            }}
          >
            Messages
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '4'}
            onClick={() => {
              toggle('4')
            }}
          >
            Settings
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className='py-50' activeTab={active}>
        <TabPane tabId='1'>
          <p>
            Chocolate cake sweet roll lemon drops marzipan chocolate cake cupcake cotton candy. Dragée ice cream dragée
            biscuit chupa chups bear claw cupcake brownie cotton candy. Sesame snaps topping cupcake cake. Macaroon
            lemon drops gummies danish marzipan donut.
          </p>
          <p>
            Chocolate bar soufflé tiramisu tiramisu jelly-o carrot cake gummi bears cake. Candy canes wafer croissant
            donut bonbon dragée bear claw jelly sugar plum. Sweet lemon drops caramels croissant cheesecake jujubes
            carrot cake fruitcake. Halvah biscuit lemon drops fruitcake tart.
          </p>
        </TabPane>
        <TabPane tabId='2'>
          <p>
            Bear claw jelly beans wafer pastry jelly beans candy macaroon biscuit topping. Sesame snaps lemon drops
            donut gingerbread dessert cotton candy wafer croissant jelly beans. Sweet roll halvah gingerbread bonbon
            apple pie gummies chocolate bar pastry gummi bears.
          </p>
          <p>
            Croissant danish chocolate bar pie muffin. Gummi bears marshmallow chocolate bar bear claw. Fruitcake halvah
            chupa chups dragée carrot cake cookie. Carrot cake oat cake cake chocolate bar cheesecake. Wafer gingerbread
            sweet roll candy chocolate bar gingerbread.
          </p>
        </TabPane>
        <TabPane tabId='3'>
          <p>
            Croissant jelly tootsie roll candy canes. Donut sugar plum jujubes sweet roll chocolate cake wafer. Tart
            caramels jujubes. Dragée tart oat cake. Fruitcake cheesecake danish. Danish topping candy jujubes. Candy
            canes candy canes lemon drops caramels tiramisu chocolate bar pie.
          </p>
          <p>
            Gummi bears tootsie roll cake wafer. Gummies powder apple pie bear claw. Caramels bear claw fruitcake
            topping lemon drops. Carrot cake macaroon ice cream liquorice donut soufflé. Gummi bears carrot cake toffee
            bonbon gingerbread lemon drops chocolate cake.
          </p>
        </TabPane>
        <TabPane tabId='4'>
          <p>
            Candy canes halvah biscuit muffin dessert biscuit marzipan. Gummi bears marzipan bonbon chupa chups biscuit
            lollipop topping. Muffin sweet apple pie sweet roll jujubes chocolate. Topping cake chupa chups chocolate
            bar tiramisu tart sweet roll chocolate cake.
          </p>
          <p>
            Jelly beans caramels muffin wafer sesame snaps chupa chups chocolate cake pastry halvah. Sugar plum cotton
            candy macaroon tootsie roll topping. Liquorice topping chocolate cake tart tootsie roll danish bear claw.
            Donut candy canes marshmallow. Wafer cookie apple pie.
          </p>
        </TabPane>
      </TabContent>
    </React.Fragment>
  )
}
export default TabsFilled
`}
    </code>
  </pre>
)

export const tabsJustified = (
  <pre>
    <code className='language-jsx'>
      {`
import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'

const TabsJustified = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  return (
    <React.Fragment>
      <Nav tabs justified>
        <NavItem>
          <NavLink
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
          >
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '3'}
            onClick={() => {
              toggle('3')
            }}
          >
            Messages
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '4'}
            onClick={() => {
              toggle('4')
            }}
          >
            Settings
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className='py-50' activeTab={active}>
        <TabPane tabId='1'>
          <p>
            Chocolate cake sweet roll lemon drops marzipan chocolate cake cupcake cotton candy. Dragée ice cream dragée
            biscuit chupa chups bear claw cupcake brownie cotton candy. Sesame snaps topping cupcake cake. Macaroon
            lemon drops gummies danish marzipan donut.
          </p>
          <p>
            Chocolate bar soufflé tiramisu tiramisu jelly-o carrot cake gummi bears cake. Candy canes wafer croissant
            donut bonbon dragée bear claw jelly sugar plum. Sweet lemon drops caramels croissant cheesecake jujubes
            carrot cake fruitcake. Halvah biscuit lemon drops fruitcake tart.
          </p>
        </TabPane>
        <TabPane tabId='2'>
          <p>
            Bear claw jelly beans wafer pastry jelly beans candy macaroon biscuit topping. Sesame snaps lemon drops
            donut gingerbread dessert cotton candy wafer croissant jelly beans. Sweet roll halvah gingerbread bonbon
            apple pie gummies chocolate bar pastry gummi bears.
          </p>
          <p>
            Croissant danish chocolate bar pie muffin. Gummi bears marshmallow chocolate bar bear claw. Fruitcake halvah
            chupa chups dragée carrot cake cookie. Carrot cake oat cake cake chocolate bar cheesecake. Wafer gingerbread
            sweet roll candy chocolate bar gingerbread.
          </p>
        </TabPane>
        <TabPane tabId='3'>
          <p>
            Croissant jelly tootsie roll candy canes. Donut sugar plum jujubes sweet roll chocolate cake wafer. Tart
            caramels jujubes. Dragée tart oat cake. Fruitcake cheesecake danish. Danish topping candy jujubes. Candy
            canes candy canes lemon drops caramels tiramisu chocolate bar pie.
          </p>
          <p>
            Gummi bears tootsie roll cake wafer. Gummies powder apple pie bear claw. Caramels bear claw fruitcake
            topping lemon drops. Carrot cake macaroon ice cream liquorice donut soufflé. Gummi bears carrot cake toffee
            bonbon gingerbread lemon drops chocolate cake.
          </p>
        </TabPane>
        <TabPane tabId='4'>
          <p>
            Candy canes halvah biscuit muffin dessert biscuit marzipan. Gummi bears marzipan bonbon chupa chups biscuit
            lollipop topping. Muffin sweet apple pie sweet roll jujubes chocolate. Topping cake chupa chups chocolate
            bar tiramisu tart sweet roll chocolate cake.
          </p>
          <p>
            Jelly beans caramels muffin wafer sesame snaps chupa chups chocolate cake pastry halvah. Sugar plum cotton
            candy macaroon tootsie roll topping. Liquorice topping chocolate cake tart tootsie roll danish bear claw.
            Donut candy canes marshmallow. Wafer cookie apple pie.
          </p>
        </TabPane>
      </TabContent>
    </React.Fragment>
  )
}
export default TabsJustified
`}
    </code>
  </pre>
)

export const tabsCentered = (
  <pre>
    <code className='language-jsx'>
      {`
import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'

const TabsCentered = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  return (
    <React.Fragment>
      <Nav className='justify-content-center' tabs>
        <NavItem>
          <NavLink
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
          >
            Service
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled>Disabled</NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '3'}
            onClick={() => {
              toggle('3')
            }}
          >
            Account
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className='py-50' activeTab={active}>
        <TabPane tabId='1'>
          <p>
            Pie fruitcake lollipop. Chupa chups apple pie marzipan danish soufflé soufflé oat cake gingerbread. Bonbon
            jujubes donut gummies sesame snaps cookie gingerbread cotton candy pastry. Biscuit sugar plum jelly-o
            tootsie roll gummies cookie croissant cotton candy. Bear claw lollipop liquorice chocolate topping dessert
            macaroon dessert dragée.
          </p>
          <p>
            Pie fruitcake lollipop. Chupa chups apple pie marzipan danish soufflé soufflé oat cake gingerbread. Bonbon
            jujubes donut gummies sesame snaps cookie gingerbread cotton candy pastry. Biscuit sugar plum jelly-o
            tootsie roll gummies cookie croissant cotton candy. Bear claw lollipop liquorice chocolate topping dessert
            macaroon dessert dragée.
          </p>
        </TabPane>
        <TabPane tabId='2'>
          <p>
            Lemon drops caramels macaroon muffin. Icing chupa chups cupcake chupa chups cheesecake chocolate cake jelly
            marzipan. Candy icing apple pie powder dragée bear claw sweet roll. Dragée liquorice ice cream jujubes.
            Lemon drops lollipop donut cupcake macaroon icing. Wafer lemon drops jelly. Bear claw candy wafer wafer
            jelly cake biscuit.
          </p>
          <p>
            Liquorice tootsie roll cheesecake muffin chupa chups toffee toffee. Pie sesame snaps biscuit sweet roll.
            Tiramisu cake oat cake croissant halvah candy brownie croissant. Bonbon sugar plum muffin tart brownie
            macaroon lollipop dragée. Jujubes halvah cheesecake.
          </p>
        </TabPane>
        <TabPane tabId='3'>
          <p>
            Danish tiramisu donut chocolate bar. Toffee oat cake candy toffee pudding soufflé lemon drops. Gummi bears
            cake oat cake. Tiramisu sugar plum sugar plum cake marzipan cake. Wafer muffin marshmallow biscuit oat cake
            sweet roll danish. Chocolate jelly topping dessert donut. Cheesecake jelly-o carrot cake carrot cake candy
            canes jelly.
          </p>
          <p>
            Wafer chocolate caramels jujubes biscuit powder marzipan. Lollipop gingerbread muffin. Tiramisu brownie tart
            marshmallow wafer sweet caramels croissant chocolate bar. Sweet marzipan toffee muffin sugar plum marzipan.
            Soufflé bear claw muffin cake powder danish dragée.
          </p>
        </TabPane>
      </TabContent>
    </React.Fragment>
  )
}
export default TabsCentered
`}
    </code>
  </pre>
)

export const tabsEnd = (
  <pre>
    <code className='language-jsx'>
      {`
import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'

const TabsEnd = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  return (
    <React.Fragment>
      <Nav className='justify-content-end' tabs>
        <NavItem>
          <NavLink
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
          >
            Service
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled>Disabled</NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '3'}
            onClick={() => {
              toggle('3')
            }}
          >
            Account
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className='py-50' activeTab={active}>
        <TabPane tabId='1'>
          <p>
            Pie fruitcake lollipop. Chupa chups apple pie marzipan danish soufflé soufflé oat cake gingerbread. Bonbon
            jujubes donut gummies sesame snaps cookie gingerbread cotton candy pastry. Biscuit sugar plum jelly-o
            tootsie roll gummies cookie croissant cotton candy. Bear claw lollipop liquorice chocolate topping dessert
            macaroon dessert dragée.
          </p>
          <p>
            Pie fruitcake lollipop. Chupa chups apple pie marzipan danish soufflé soufflé oat cake gingerbread. Bonbon
            jujubes donut gummies sesame snaps cookie gingerbread cotton candy pastry. Biscuit sugar plum jelly-o
            tootsie roll gummies cookie croissant cotton candy. Bear claw lollipop liquorice chocolate topping dessert
            macaroon dessert dragée.
          </p>
        </TabPane>
        <TabPane tabId='2'>
          <p>
            Lemon drops caramels macaroon muffin. Icing chupa chups cupcake chupa chups cheesecake chocolate cake jelly
            marzipan. Candy icing apple pie powder dragée bear claw sweet roll. Dragée liquorice ice cream jujubes.
            Lemon drops lollipop donut cupcake macaroon icing. Wafer lemon drops jelly. Bear claw candy wafer wafer
            jelly cake biscuit.
          </p>
          <p>
            Liquorice tootsie roll cheesecake muffin chupa chups toffee toffee. Pie sesame snaps biscuit sweet roll.
            Tiramisu cake oat cake croissant halvah candy brownie croissant. Bonbon sugar plum muffin tart brownie
            macaroon lollipop dragée. Jujubes halvah cheesecake.
          </p>
        </TabPane>
        <TabPane tabId='3'>
          <p>
            Danish tiramisu donut chocolate bar. Toffee oat cake candy toffee pudding soufflé lemon drops. Gummi bears
            cake oat cake. Tiramisu sugar plum sugar plum cake marzipan cake. Wafer muffin marshmallow biscuit oat cake
            sweet roll danish. Chocolate jelly topping dessert donut. Cheesecake jelly-o carrot cake carrot cake candy
            canes jelly.
          </p>
          <p>
            Wafer chocolate caramels jujubes biscuit powder marzipan. Lollipop gingerbread muffin. Tiramisu brownie tart
            marshmallow wafer sweet caramels croissant chocolate bar. Sweet marzipan toffee muffin sugar plum marzipan.
            Soufflé bear claw muffin cake powder danish dragée.
          </p>
        </TabPane>
      </TabContent>
    </React.Fragment>
  )
}
export default TabsEnd
`}
    </code>
  </pre>
)
