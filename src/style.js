import style from 'styled-components';

export const Cartao = style.div`
width:90%;
display:flex;
align-items:center;
background-color:white;
height:150px;
border-radius:30px;

  h1{
    font-size:30px;
    width:60%;
    margin-left:2%;
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
background-image: url('./terrincha-head.jpg');
background-size: cover;
background-position: center;
border-radius:30px;
margin-bottom:30px;
`