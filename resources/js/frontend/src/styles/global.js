import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100% !important;
  }
  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    background-color: #f9f9f9;
  }
  body, button, input {
    font-size: 14px;
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: Ubuntu, Arial, Helvetica, sans-serif;
    color: #362C2B;
  }
  h1 {
    font-size: 32px;
  }
  p {
    color: #333333;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
    border: none;
    border-radius: 4px;
  }
  img {
    width: 100%;
  }

  /* menu */
  .menu {
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #fff;
  padding: 24px 24px;
  display: relative;
}
.menu h1{
  float: left;
}
.menu ul{
  float: right;
}
.menu ul li{
  display: inline;
  padding: 24px 18px;
}
.menu ul li a{
  font-size: 16px;
  color: #555555;
}
.menu ul li button{
  background-color: #A26769;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
}
.menu ul li button a{
  color: #fff;
}

/* Back Button */
.back-page{
  color: #A26769;
  font-weight: 700;
}
.back-page svg{
  margin-right: 8px;
  font-weight: 700;
}
`;
