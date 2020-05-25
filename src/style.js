import style from 'styled-components';

export const Cartao = style.div`
width:100%;
display:flex;
align-items:center;
background-color:white;
height:150px;
border-radius:30px;
margin-bottom:5%;
  h1{
    font-size:20px;
    width:60%;
    margin-left:2%;
    font-family: 'Open Sans', sans-serif;
    font-weight:700;
  }

  img{
    width:30%;
    height:40%;
    display:flex-end;
  }
`;

export const Header = style.div`
width:100%;
height:200px;
background-image: url('./terrincha-head.jpeg');
background-size: cover;
background-position: center;
border-radius:30px;
margin-bottom:30px;
`