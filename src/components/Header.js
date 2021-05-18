import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';


function Header() {

    const[burgerStatus,setBurgerSatus] = useState(false)

     

    return (
        <Conatiner>
            <a href="#">
                <img src="./images/logo.svg"/>
            </a>

            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Solar Roof</a>
                <a href="#">Solar panels</a>

            </Menu>

            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={()=>setBurgerSatus(true)}/>

            </RightMenu>

            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={()=>setBurgerSatus(false)} />
                </CloseWrapper>
                    <li><a href="">Existing Inventory</a></li>
                    <li><a href="">Used Inventory</a></li>
                    <li><a href="">Trade-In</a></li>
                    <li><a href="">CyberTruck</a></li>
                    <li><a href="">Roadster</a></li>
                    <li><a href="">Semi</a></li>
                    <li><a href="">Charging</a></li>
                    <li><a href="">Powerwall</a></li>
                    <li><a href="">Commercial Energy</a></li>
                    <li><a href="">Utilites</a></li>

            </BurgerNav>
        </Conatiner>
    )
}

export default Header

const Conatiner = styled.div`
     min-height:60px;
     top:0;
     left:0;
     right:0;
     position:fixed;
     display:flex;
     align-items:center;
     justify-content:space-between;
     padding: 0 20px;
     z-index:1;

`


const Menu = styled.div`
     display:flex;
     align-items:center;
     justify-content:center;
     flex:1;

     a{
         font-weight:600;
         text-transform:uppercase;
         padding:0 10px;
         flex-wrap:no-wrap;
         text-decoration:none;
     }


     @media screen and (max-width:1021px){
         display:none;
     }

     
  


` 

const RightMenu = styled.div`
      display:flex;
      align-items:center;

a{
    font-weight:600;
    text-transform:uppercase;
    margin-right:10px;
    
    text-decoration:none;
}

@media screen and (max-width:1021px){
    display:flex;
    
}

`

const CustomMenu = styled(MenuIcon)`
      cursor:pointer;

`

const BurgerNav = styled.div`
      position:fixed;
      top:0;
      bottom:0;
      right:0;
      padding:20px;
      background:white;
      display:flex;
      flex-direction: column;
      text-align:left;
      width:300px;
      z-index:20;
      list-style: none;
      overflow-y: scroll;
      ::-webkit-scrollbar {
        width: 0;  /* Remove scrollbar space */
        background: transparent;  /* Optional: just make scrollbar invisible */
    }

    transform:${props=>props.show ? 'translateX(0)':'translateX(100%)'};
    transition: transform 0.2s ease-in-out;

      li{
          padding:15px 0;
          border-bottom: 1px solid rgba(0,0,0,.2);
          a{
              font-weight: 600;
              text-decoration: none;
          }
      }

      
`


const CloseWrapper = styled.div`      
display:flex;
justify-content:flex-end;
`



const CustomClose = styled(ClearIcon)`
      cursor:pointer;
`