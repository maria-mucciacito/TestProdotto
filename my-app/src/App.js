import "./App.css";
import { ProdottoCreate } from "./pages/ProdottoCreate";
import { Routes, Route } from "react-router-dom";
import React from "react";
import { Prodotti } from "./pages/Prodotti";

function App() {
  return (
    <Routes>
      <Route path="" exact="true" element={<Prodotti/>}/>
      <Route path="/createProdotto" exact="true" element={<ProdottoCreate />} />
    </Routes>
  );
}

export default App;
