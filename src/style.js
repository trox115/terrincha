import style from 'styled-components';

export const Cartao = style.div`
width:100%;
display:flex;
align-items:center;
background-color:white;
height:150px;
border-radius:30px;
margin-bottom:5%;
color:#282828;
  h1{
    font-size:20px;
    width:60%;
    margin-left:2%;
    font-family: 'Open Sans', sans-serif;
    font-weight:700;

  }

  img{
    width:55px;
    height:55px;
    display:flex-end;
  }
`;

export const Produtos = style.div`
width:100%;
display:flex;
align-items:center;
background-color:white;
border-radius:30px;
margin-bottom:5%;
color:#282828;

.titulo{
  color:black;
   font-family: 'Open Sans', sans-serif;
    font-weight:700;
    font-size:30px;
    margin-top:5px;
    margin-bottom:0px;
}

.designacao{
  color:#D4B773;
  font-family: 'Open Sans', sans-serif;
    font-weight:700;
    font-size:25px;
    margin-top:0px;
}
.preco{
  color:white;
  height:50px;
  line-height:50px;
  background-color:#D4B773;
  padding:0 10px 0 10px;
  border-radius:10px;
  vertical-align:middle;
  font-size:20px;
}

img{
  height:390px;
}
`;
export const GiveMargin = style.div`
height:100%;
margin-bottom:120px;
`;

export const Header = style.div`
width:100%;
height:200px;
background-image: url('./terrincha-head.jpeg');
background-size: cover;
background-position: center;
border-radius:30px;
margin-bottom:30px;
`;

export const FooterEl = style.footer`
height:120px;
background:white;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
color:#B3B2B2;
border-radius:15px 15px 0 0;
margin-top:120px;
img{
  height:70px;
}
`;

export const InfoHeader = style.div`
width:100%;
background-color:white;
display:flex;
align-items:center;
justify-content:space-between;
border-radius:50px;
margin-bottom:30px;
height:100px;
h1{
  font-size:35px;
  margin-left:5%;
}

img{
  height:50px;
  float:right;
  margin-right:5%;
}
`;

export const ImagePlaceholder = style.figure`
height:100%;
margin-right:30px;
margin-top:auto;
margin-bottom:auto;
margin-left:10px;
`;

export const PrecoCompra = style.div`
display:flex;

input{
      width: 80px;
    height: 50px;
    margin-left: 40px;
}
`;

export const Compra = style.button`
font-size:25px;
background-color:#E84865;
color:white;
border:none;
height:50px;
margin-left:10px;
border-radius:10px;
 padding:0 20px 0 20px;
display:flex;
align-itens:center;
justify-content:center;
img{
  float:right;
  max-height:38px;
}
`;
