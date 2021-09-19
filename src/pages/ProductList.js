import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { tablet } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  margin-bottom: 5px;
  ${tablet({ width: "100%" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  max-height: 38px;
  background-color: white;
  border: 1px solid black;
  margin-bottom: 5px;
  /* outline: none; */
`;

const Option = styled.option``;

function ProductList() {
  return (
    <Container>
      <Announcement></Announcement>
      <Nav />

      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled select>
              Select Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled select>
              Select Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price(desc)</Option>
            <Option>Price(desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default ProductList;
