import React, {useState, useEffect} from 'react';
import ListaCarti from "./listacarti";
import Adaug from "./adaug";
import Container from "react-bootstrap/Container";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore"; 
import app from "./init";

const App = () => {
  const [lista, setLista] = useState([]);

  const db = getFirestore(app);  //  Se include pentru a accesa firestore

  const getLista = async () => {
    const listacarti = await getDocs(collection(db, "cartiCopii"));
    let listaNoua = listacarti.docs.map((doc) => {
      let carte = doc.data();  //  Creez un obiect nou
      carte.src = `imagini/${carte.src}`;  //  Corectez calea
      carte.id = doc.id;      // adaug si ID-ul (pentru "key")
      return carte;
    });
    setLista(listaNoua);   //  Actualizez obiectul "state"
  };

  useEffect(() => {
    getLista();
  }, []);

  const adaugCarte = async (carte) => {
    // Adaug un nou document folosind un ID generat automat.
    const docRef = await addDoc(collection(db, "cartiCopii"), carte);
    getLista();  //  Reafisez lista
    console.log("Document adaugat cu ID: ", docRef.id);
  };

  return (
    <Container>
      <ListaCarti listaCarti={lista} />
      <Adaug transmit={adaugCarte} />
    </Container>
  );
}

export default App;
