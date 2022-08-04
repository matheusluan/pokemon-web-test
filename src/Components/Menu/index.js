import {React} from 'react';
import {HeaderStyled, NavStyled, LogoStyled} from './styled.js';
import '../../global.css';

import logo from '../../Assets/logo.png'
import { Link } from 'react-router-dom';

export default function Menu(){
    return(
        <>
          <HeaderStyled>             
            <LogoStyled src={logo} /> 

            <NavStyled>
              <Link to="/">Home</Link>
              <Link to="/pokemons">Pokemons</Link>
              <Link to="/contact">Contato</Link>
            </NavStyled>
          </HeaderStyled>
        </>
    );
}