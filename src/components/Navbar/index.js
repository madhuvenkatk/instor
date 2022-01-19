import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
          <NavMenu>
          <NavLink to='/about' activeStyle>
            Pastries
          </NavLink>
          <NavLink to='/cakes' activeStyle>
            Cakes
          </NavLink>
          <NavLink to='/category3' activeStyle>
            Tarts
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/checkout'>Check Out</NavBtnLink>
          <NavBtnLink to='/storeinfo'>Store Info</NavBtnLink>
        </NavBtn>
        
      </Nav>
    </>
  );
};
  
export default Navbar;
