import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import NotFound from './components/NotFound';
import Header from "./components/Header";
import { Container } from '@material-ui/core';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />}>
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    );
  }
}
