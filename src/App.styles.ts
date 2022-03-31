import styled from 'styled-components';
import Background from '../src/assets/images/mountains.jpg'

export const Container = styled.div`
    background-color: transparent;
    min-height: 93vh;
`;

export const FooterContainer = styled.div`
    color: rgb(0, 0, 0, .3);
    height: 7hv;
    font-size: 14px;
    font-style: italic;

    h3{
        font-weight:400;
    }

    a{
        color: rgb(0, 0, 0, .3);
    }
`;

export const OptionsContainer = styled.div`
    display: flex;
    padding: 15px 30px;
    align-items: center;
    display: flex;
    flex: 1;
    color: #797a81;
`;

export const ContainerList = styled.div`
    display: block;
    background-color: #fff;
    padding: 0;
    border-radius: 8px;
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, .1);
`;


export const ContainerButton = styled.div`
    border-bottom: 1px solid rgb(0, 0, 0, .1);
    padding: 0;
`;

export const ContainerActionsList = styled.div`
    display: flex;
    
    button {
        background-color: transparent;
        border: none;
        padding: 0;
    }

    button>img{
        width: 20px;
        padding: 20px;
        margin: 10px;
    }

    button>img:hover{
        width: 26px;
        padding: 17px;
        margin: 10px;
        background-color: rgb(0,0,0,.1);
        border: none;
        border-radius: 100px;
    }


    :hover{
        background-color: rgb(0, 0, 0, 0.05);
    }
`;

export const ContainerBody = styled.div`
    margin: 0;
    background-image: url(${Background}) ;
    background-position: top;
    background-size: 100vw 400px;
    background-repeat: no-repeat;
      
    height:100vh;
    text-align:center;
    color:#fff;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 10px;
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    color: #fff;
    text-align: left;
    font-size: 48px;
    padding-bottom: 40px;
    padding-top: 60px;
`;