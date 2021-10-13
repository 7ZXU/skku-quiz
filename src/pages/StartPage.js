import React, {useState} from "react";
import styled from "styled-components";
import background from "../assets/background.png";
import {Link} from "react-router-dom";

const Background = styled.div`
  position: absolute;
  background: url(${(props) => props.bg});
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  position: absolute;
  top: 45%;
  left: 52%;
  transform: translate(-50%, -50%);
  color: #5ca8eb;
  font-weight: bold;
  font-size: 50px;
`;

const PlayBtn = styled.button`
  position: absolute;
  top: 60%;
  left: 52%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 12%;
  height: 6%;
  background-color: white;
  color: #5ca8eb;
  box-shadow: ${props => props.color};
  border: none;
`;

function StartPage() {
    const [index, setIndex] = useState(0);
  return (

    <Background bg={background}>
      <Title>Javascript Quiz</Title>
      
      <Link to="q1">
      <PlayBtn color={index===0? "none" : "0px 0px 5px 2px #5ca8eb" } 
      onMouseOver={
          ()=>{
              setIndex(1)
          }
      }
      onMouseOut={
          ()=>{
              setIndex(0)
          }
      }
      >Play</PlayBtn>
      </Link>

    </Background>
  );
}

export default StartPage;
