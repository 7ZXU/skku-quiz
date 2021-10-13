import React, { useState } from "react";
import styled from "styled-components";
import background from "../assets/background.png";
import { Link } from "react-router-dom";

const PageWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #e3effb;
`;

const Wrap = styled.div`
  margin: 200px 600px;
  display: flex;
  flex-direction: column;
`;
const QuestionWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const QuestionBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProgressBar = styled.div`
  width: 200px;
  height: 20px;
  border: 3px solid #5ca8eb;
`;
const Progress = styled.div`
  width: ${(props) => props.width}px;
  height: 20px;
  background-color: #5ca8eb;
  border: 1px solid #5ca8eb;
`;

const ScoreWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Score = styled.text`
  color: #5ca8eb;
  font-size: 30px;
  font-weight: bold;
`;

const Question = styled.h1``;

const Example = styled.div`
  display: flex;
  height: 60px;
  box-shadow: ${(props) => props.color};
  margin-bottom: 10px;
  align-items: center;
  background-color: ${(props) => props.bg};
`;

const Num = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  height: 100%;
  background-color: #5ca8eb;
  color: white;
  font-size: 20px;
`;

const Text = styled.text`
  padding-left: 20px;
`;

const ResultWrap = styled.div`
  margin: 200px 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Total = styled.text`
  font-size: 60px;
  font-weight: bold;
  color: #5ca8eb;
`;

const AgainBtn = styled.button`
  text-align: center;
  width: 200px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  background-color: white;
  color: #5ca8eb;
  box-shadow: ${(props) => props.color};
  border-color: #5ca8eb;
  margin-top: 20px;
`;

function Question1() {
  const [pageNum, setPageNum] = useState(1);
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [example, setExample] = useState(0);
  const [link, setLink] = useState("/q1");

  const questions = [
    {
      q: "Purpose of designing the Javascript",
      a: "To Perform Server Side Scripting Operation",
      b: "To add Interactivity to HTML Pages",
      c: "To Style HTML Pages",
      d: "All of the above",
      answer: "b",
    },
    {
      q: "Why so JavaScript and Java have similar name?",
      a: "They both originated on the island of Java ",
      b: "JavaScript's syntax is loosely based on Java's",
      c: "Both A and B",
      d: "None of the above",
      answer: "b",
    },
    {
      q: "Original Name of Javascript is",
      a: "Mocha",
      b: "LiveScript",
      c: "Escript",
      d: "Javascript",
      answer: "a",
    },
    {
      q: "Which type of language is Javascript",
      a: "Programming",
      b: "Scripting",
      c: "Markup",
      d: "None of the above",
      answer: "d",
    },
    {},
    {
      q: "Which is not valid data type in Javascript",
      a: "Undefined",
      b: "Boolean",
      c: "float",
      d: "Number",
      answer: "c",
    }, 
    {
      q: "Which type of language is Javascript",
      a: "Programming",
      b: "Scripting",
      c: "Markup",
      d: "None of the above",
      answer: "b",
    }, 
    {
      q: "Purpose of designing the Javascript",
      a: "To Perform Server Side Scripting Operation",
      b: "To add Interactivity to HTML Pages",
      c: "To Style HTML Pages",
      d: "All of the above",
      answer: "b",
    }, 
    {
      q: "Why so JavaScript and Java have similar name?",
      a: "They both originated on the island of Java ",
      b: "JavaScript's syntax is loosely based on Java's",
      c: "Both A and B",
      d: "None of the above",
      answer: "b",
    }, 
    {}
  ];

  if (pageNum % 5 !== 0) {
    return (
      <PageWrap>
        {/* onClick={() => {
            setExample(1);
            {questions[pageNum - 1].answer === "a"?setScore(score+1):setScore(score)};
            
            setIndex(0);
            setTimeout(()=>{
                setPageNum(pageNum+1);
                setExample(0);
            }, 1000);

            }
          } */}

          <Wrap>
            <QuestionWrap>
              <QuestionBar>
                <div>Question {Number(pageNum)%5}/4</div>
                <ProgressBar>
                  <Progress width={Number(pageNum)%5 * 50} />
                </ProgressBar>
              </QuestionBar>

              <ScoreWrap>
                <div>Score</div>
                <Score>{score}</Score>
              </ScoreWrap>
            </QuestionWrap>

            <Question>{questions[pageNum - 1].q}</Question>

            {/* A */}
            <Example
              color={index === 1 ? "0px 0px 5px 2px #5ca8eb" : "none"}
              bg={
                example === 1
                  ? questions[pageNum - 1].answer === "a"
                    ? "green"
                    : "red"
                  : "white"
              }
              onClick={() => {

                setExample(1);
                {
                  questions[pageNum - 1].answer === "a"
                    ? setScore(score + 1)
                    : setScore(score);
                }

                setIndex(0);
                setTimeout(() => {
                  setPageNum(pageNum + 1);
                  setExample(0);
                }, 1000);
              }}
              onMouseOver={() => {
                setIndex(1);
              }}
              onMouseOut={() => {
                setIndex(0);
              }}
            >
              <Num>A</Num>
              <Text>{questions[pageNum - 1].a}</Text>
            </Example>

            {/* B */}
            <Example
              color={index === 2 ? "0px 0px 5px 2px #5ca8eb" : "none"}
              bg={
                example === 2
                  ? questions[pageNum - 1].answer === "b"
                    ? "green"
                    : "red"
                  : "white"
              }
              onClick={() => {
                setExample(2);
                {
                  questions[pageNum - 1].answer === "b"
                    ? setScore(score + 1)
                    : setScore(score);
                }
                setIndex(0);
                setTimeout(() => {
                  setPageNum(pageNum + 1);
                  setExample(0);
                }, 1000);
              }}
              onMouseOver={() => {
                setIndex(2);
              }}
              onMouseOut={() => {
                setIndex(0);
              }}
            >
              <Num>B</Num>
              <Text>{questions[pageNum - 1].b}</Text>
            </Example>

            {/* C */}
            <Example
              color={index === 3 ? "0px 0px 5px 2px #5ca8eb" : "none"}
              bg={
                example === 3
                  ? questions[pageNum - 1].answer === "c"
                    ? "green"
                    : "red"
                  : "white"
              }
              onClick={() => {
                setExample(3);
                {
                  questions[pageNum - 1].answer === "c"
                    ? setScore(score + 1)
                    : setScore(score);
                }
                setIndex(0);
                setTimeout(() => {
                  setPageNum(pageNum + 1);
                  setExample(0);
                }, 1000);
              }}
              onMouseOver={() => {
                setIndex(3);
              }}
              onMouseOut={() => {
                setIndex(0);
              }}
            >
              <Num>C</Num>
              <Text>{questions[pageNum - 1].c}</Text>
            </Example>

            {/* D */}

            <Example
              color={index === 4 ? "0px 0px 5px 2px #5ca8eb" : "none"}
              bg={
                example === 4
                  ? questions[pageNum - 1].answer === "d"
                    ? "green"
                    : "red"
                  : "white"
              }
              onClick={() => {
                setExample(4);
                {
                  questions[pageNum - 1].answer === "d"
                    ? setScore(score + 1)
                    : setScore(score);
                }
                setIndex(0);
                setTimeout(() => {
                  setPageNum(pageNum + 1);
                  setExample(0);
                }, 1000);
              }}
              onMouseOver={() => {
                setIndex(4);
              }}
              onMouseOut={() => {
                setIndex(0);
              }}
            >
              <Num>D</Num>
              <Text>{questions[pageNum - 1].d}</Text>
            </Example>
          </Wrap>

      </PageWrap>
    );
  }

  return (
    <PageWrap>
      <ResultWrap>
        <Total>Total score: {score}</Total>
        <AgainBtn
          color={index === 0 ? "none" : "0px 0px 5px 2px #5ca8eb"}
          onClick={
            ()=>{
              setPageNum(pageNum+1);
              setScore(0);
            }
          }
          onMouseOver={() => {
            setIndex(1);
          }}
          onMouseOut={() => {
            setIndex(0);
          }}
        >
          Play Again
        </AgainBtn>
      </ResultWrap>ß
    </PageWrap>
  );
}

export default Question1;
