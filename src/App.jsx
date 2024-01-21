import React, { useState, useCallback } from "react";
import { useRoutes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";

const App = () => {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = useCallback((base) => {
    setPizza((pizza) => ({ ...pizza, base }));
  }, []);

  const addTopping = useCallback((topping) => {
    setPizza((pizza) => {
      let newToppings;
      if (!pizza.toppings.includes(topping)) {
        newToppings = [...pizza.toppings, topping];
      } else {
        newToppings = pizza.toppings.filter((item) => item !== topping);
      }
      return { ...pizza, toppings: newToppings };
    });
  }, []);

  const routing = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/base", element: <Base addBase={addBase} pizza={pizza} /> },
    {
      path: "/toppings",
      element: <Toppings addTopping={addTopping} pizza={pizza} />,
    },
    { path: "/order", element: <Order pizza={pizza} /> },
  ]);

  return (
    <>
      <Header />
      {routing}
    </>
  );
};

export default App;
