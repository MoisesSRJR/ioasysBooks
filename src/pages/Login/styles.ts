import styled from 'styled-components';
import colors from '../../styles/colors';
import backgroundImg from '../../assets/BackgroundImage.png';
import Img from '../../assets/Image.png';

const Container = styled.div`
  background:url(${backgroundImg}) no-repeat  ;
  background-size: cover;
  display:flex;
  width: 100%;
  height: 100vh;
`;

const ContainerMobile = styled.div`
  background:url(${Img}) no-repeat;
  background-size: cover;
  display:flex;
  width: 100%;
  height: 100vh;
`;

const Card = styled.div`
  width: 450px;
    height: 320px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 10%;

    div.title{
        display: flex;
        height: 70px;
        align-items: center;
        padding-left: 20px;
        gap: 5px;
        margin-bottom: 40px;

        p{
        font-size: 28px;
        color: ${colors.white100};
        font-weight:300;
        
        &.bold{
        font-weight:700;
        font-size: 32px;
        }
      }
    }
`;

const CardMobile = styled.div`
  width: 90%;
    height: 320px;
    margin: auto;

    div.title{
        display: flex;
        height: 70px;
        align-items: center;
        padding-left: 20px;
        gap: 5px;
        margin-bottom: 40px;

        p{
        font-size: 28px;
        color: ${colors.white100};
        font-weight:300;
        
        &.bold{
        font-weight:700;
        font-size: 32px;
        }
      }
    }
`;
export {Container, Card, ContainerMobile, CardMobile  };
