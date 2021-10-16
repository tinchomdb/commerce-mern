import { red } from "@material-ui/core/colors";
import React, { useState } from "react";
import { useLocation } from "react-router";
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
  const location = useLocation();

  const cat = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  const handleSort = (e) => {
    const value = e.target.value;
    setSort(value);
  };

  console.log(filters);
  console.log(sort);

  return (
    <Container>
      <Announcement></Announcement>
      <Nav />

      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Select Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Select Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select name="sort" onChange={handleSort}>
            <Option value="newest">Newest</Option>
            <Option value="desc">Price(desc)</Option>
            <Option value="asc">Price(asc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default ProductList;
