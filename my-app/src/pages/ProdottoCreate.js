import React, { useState } from "react";
import { CDBCard, CDBCardBody, CDBContainer } from "cdbreact";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import axios from "../axios/axios";
import { NavLink } from "react-router-dom";

export const ProdottoCreate = () => {
  const CREATE_PRODOTTO = "/createProdotto";

  const [nome, setNome] = useState("");
  const [descrizione, setDescrizione] = useState("");
  const [prezzo, setPrezzo] = useState(0);
  const [sku, setSku] = useState("");
  const [quantità, setQuantità] = useState(0);
  const [msg, setMsg] = useState("");

  const createProdotto = async (e) => {
    e.preventDefault();
    let json = JSON.stringify({
      nome: nome,
      descrizione: descrizione,
      prezzo: prezzo,
      sku: sku,
      quantità: quantità,
    });
    try {
      await axios
        .post(CREATE_PRODOTTO, json, {
          headers: { "Content-Type": "application/json" },
        })
        .then((result) => {
          if (result.status === 201) {
            setMsg("Il nuovo prodotto è stato inserito con successo!");
          }
        })
        .catch((error) => console.log(error));

      setNome("");
      setDescrizione("");
      setPrezzo(0);
      setSku("");
      setQuantità(0);
      console.log(json)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CDBContainer className="m-5 cards h-100">
      <h3>{msg}</h3>
      <CDBCard style={{ width: "50rem" }}>
        <CDBCardBody className="mx-4">
          <div className="text-center mt-4 mb-4 m-4">
            <p className="h4"> Nuovo Prodotto </p>
          </div>
          <form onSubmit={createProdotto}>
            <MDBInput
              label="Nome"
              id="nome"
              type="text"
              name="nome"
              required
              value={nome}
              className="my-3"
              onChange={(e) => setNome(e.target.value)}
            />
            <MDBInput
              label="Descrizione"
              id="descrizione"
              type="text"
              name="descrizione"
              required
              value={descrizione}
              className="my-3"
              onChange={(e) => setDescrizione(e.target.value)}
            />
            <MDBInput
              label="Prezzo"
              id="prezzo"
              type="number"
              name="prezzo"
              required
              value={prezzo}
              className="my-3"
              onChange={(e) => setPrezzo(e.target.value)}
            />
            <MDBInput
              label="Sku"
              id="sku"
              type="text"
              name="sku"
              required
              value={sku}
              className="my-3"
              onChange={(e) => setSku(e.target.value)}
            />
            <MDBInput
              label="Quantità"
              id="quantità"
              type="number"
              name="quantità"
              required
              value={quantità}
              className="my-3"
              onChange={(e) => setQuantità(e.target.value)}
            />
            <MDBBtn color="dark" className="btn-block my-3 mx-0" type="submit">
              Create
            </MDBBtn>
          </form>
          <NavLink to="/">Go to list</NavLink>
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
  );
};
