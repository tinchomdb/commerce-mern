import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ${tablet({ padding: "0px 10px" })}
`;

const Left = styled.div`
  width: 33%;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14;
  cursor: pointer;
  ${tablet({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  ${tablet({ marginLeft: "10px" })};
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  width: 90%;
`;

const Center = styled.div`
  width: 50%;
  text-align: center;

  align-items: center;
  justify-content: center;
`;

const Logo = styled.h1`
  font-size: clamp(2.5rem, -0.875rem + 8.333vw, 3.5rem);
  font-weight: bold;
  margin: 5px;

  /* ${mobile({ fontSize: "24px" })} */
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 33%;
  ${tablet({ justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  font-size: clamp(0.75rem, -0.875rem + 4vw, 0.875rem);
  white-space: nowrap;
  cursor: pointer;
  margin-left: 25px;
  ${tablet({ marginLeft: "10px", display: (props) => props.hide })}
`;

function Nav() {
  const quantity = useSelector((state) => state.cart.quantity);
  console.log(quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>STORE</Logo>
        </Center>
        <Right>
          <MenuItem hide="none">REGISTER</MenuItem>
          <MenuItem hide="none">SIGN IN </MenuItem>
          <Link to="/Cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Nav;
