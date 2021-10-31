import React from "react";
import Carte from "./carte";

const ListaCarti = (props) => {
   const lista = props.listaCarti.map(item => <Carte
          src={item.src}
          titlu={item.titlu}
          text={item.text}
          autpret={item.autpret}
          key={item.id}
        />
    );

  return lista;
}

export default ListaCarti;