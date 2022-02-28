import { Fragment, useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'

const TabsFilled = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  return (
    <Fragment>
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
    </Fragment>
  )
}
export default TabsFilled
