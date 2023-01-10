import React, { useState, useEffect } from "react";
import { CDBTable, CDBTableHeader, CDBTableBody, CDBBtn } from "cdbreact";
import axios from "../axios/axios";

export const Prodotti = () => {
  const [prodotti, setProdotti] = useState([]);

  useEffect(() => {
    axios
      .get("/prodotti")
      .then((result) => {
        setProdotti(result?.data);
      })
      .catch((error) => console.log(error));
  });

  const arr = prodotti.map((data, index) => {
    return (
      <tr key={data.id}>
        <td>{data.id}</td>
        <td>{data.nome}</td>
        <td>{data.descrizione}</td>
        <td>{data.prezzo}</td>
        <td>{data.sku}</td>
        <td>{data.quantità}</td>
      </tr>
    );
  });

  return (
    <>
      <div className="container">
        <div className="row mt-5 m-4 ">
          <div className="col-7 mt-3">
            <h2 prefix={<i className="fa fa-bars" />}>Lista Prodotti</h2>
          </div>
          <div className="col-2 mt-3">
            <a href="/createProdotto">
              <CDBBtn color="dark">+ Add</CDBBtn>
            </a>
          </div>
        </div>
        <div className="row m-3 mt-5">
          <CDBTable>
            <CDBTableHeader>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Descrizione</th>
                <th>Prezzo</th>
                <th>Sku</th>
                <th>Quantità</th>
              </tr>
            </CDBTableHeader>
            <CDBTableBody>{arr}</CDBTableBody>
          </CDBTable>
        </div>
      </div>
    </>
  );
};
