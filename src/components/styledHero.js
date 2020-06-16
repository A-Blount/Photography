import styled from "styled-components";
import defaultImg from "../images/bg2.jpg";
const StyledHero = styled.header`
  height: 100%;
  margin-top: 130px;
  margin-left: 10px;
  margin-right: 10px; 
  /* background: url(${defaultImg}); */
  background: url(${props => (props.img ? props.img : defaultImg)});
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
export default StyledHero;