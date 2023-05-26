import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import Product from "./pages/SingleProductPage";
import Cart from "./pages/CartPage";
import Error from "./pages/ErrorPage";
import Checkout from "./pages/CheckoutPage";
import Private from "./pages/PrivateRoute";
import AuthWrapper from "./pages/AuthWrapper";

import styled from "styled-components";
import SingleProductPage from "./pages/SingleProductPage";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/products/:id" children={<SingleProductPage />} />
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Private exact path="/checkout">
            <Checkout />
          </Private>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
