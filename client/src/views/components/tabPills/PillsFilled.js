import { Fragment, useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'

const PillFilled = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    setActive(tab)
  }
  return (
    <Fragment>
      <Nav pills fill>
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
          <NavLink disabled>Disabled</NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '3'}
            onClick={() => {
              toggle('3')
            }}
          >
            About
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className='py-50' activeTab={active}>
        <TabPane tabId='1'>
          <p>
            Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake
            pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes brownie dragée ice
            cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake donut candy canes. Jelly beans
            croissant bonbon cookie toffee. Soufflé croissant lemon drops tootsie roll toffee tiramisu.
          </p>
        </TabPane>
        <TabPane tabId='2'>
          <p>
            Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy
            cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing
            cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll sweet candy. Chocolate
            sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon drops.
          </p>
        </TabPane>
        <TabPane tabId='3'>
          <p>
            Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake
            cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll
            cake.Chocolate bonbon chocolate chocolate cake halvah tootsie roll marshmallow. Brownie chocolate toffee
            toffee jelly beans bonbon sesame snaps sugar plum candy canes.
          </p>
        </TabPane>
      </TabContent>
    </Fragment>
  )
}
export default PillFilled
