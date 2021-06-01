import { Fragment, useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'

const TabsEnd = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  return (
    <Fragment>
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
    </Fragment>
  )
}
export default TabsEnd
