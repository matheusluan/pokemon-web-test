import {React} from 'react';
import { 
  ContainerStyled, 
  DescriptionStyled, 
  QuestionStyled, 
  SpanYellowStyled, 
  SpanStyled, ButtonStyled, 
  ImagesStyled, Pikachu, Pokebol_1 } from './styled.js';
import '../../global.css';
import Menu from '../../Components/Menu/index.js';
import { Link } from 'react-router-dom';

import pikachu from '../../Assets/pikachu.png'
import pokebol_1 from '../../Assets/pokebola_1.png'

export default function Home(){

    return(
        <>
          <Menu />
          <ContainerStyled>
            <DescriptionStyled>
              <QuestionStyled>Qual pokemon você <span>escolheria</span>?</QuestionStyled>
              <SpanStyled>Você pode saber o tipo de Pokemon, seus pontos fortes, fracos e habilidades.</SpanStyled>
              <ButtonStyled>
                <Link to="/pokemons">Veja os pokemons</Link>
              </ButtonStyled>
            </DescriptionStyled>

            <ImagesStyled>
              <Pikachu src={pikachu} /> 
              <Pokebol_1 src={pokebol_1} />                
            </ImagesStyled>
          </ContainerStyled>
          
        </>
    );
}