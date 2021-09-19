import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { sliderItems } from "../data";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;

/* const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`; */

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  ${tablet({ display: "none" })}
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border: 2px solid black;
`;

function Slider() {
  return (
    <Container>
      {/* <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow> */}
      <Wrapper>
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
          emulateTouch
          useKeyboardArrows
        >
          {sliderItems.map((item) => (
            <Slide bg={item.bg}>
              <ImgContainer>
                <Image src={item.img} alt="" />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOW NOW</Button>
              </InfoContainer>
            </Slide>
          ))}
        </Carousel>
      </Wrapper>
      {/* <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow> */}
    </Container>
  );
}

export default Slider;
