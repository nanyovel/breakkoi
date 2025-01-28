import { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import db from "../firebase/firebaseConfig";

// ************************** DAME SOLO UN DOC POR ID CON ESCUCHADOR **************************

export const useDocById = (collectionName, setState, idUsuario) => {
  useEffect(() => {
    if (true) {
      console.log("DB 😐😐😐😐😐" + collectionName);
      const unsub = onSnapshot(doc(db, collectionName, idUsuario), (doc) => {
        let retornar = null;

        if (doc.exists()) {
          retornar = { ...doc.data(), id: doc.id };
        }
        setState(retornar);
        return retornar;
      });
      // Devolver una función de limpieza para detener la escucha cuando el componente se desmonte
      return () => unsub();
    } else {
      setState(null);
    }
  }, [collectionName, setState, idUsuario]);
};

// ****************** DOCUMENTOS SIN ESCUCHADOR **********************
export const fetchGetDocs = async (collectionName, condicionesDB) => {
  console.log("DB 😐😐😐😐😐" + collectionName);
  const q =
    condicionesDB.length > 0
      ? query(
          collection(db, collectionName),
          where(
            condicionesDB[0].propiedad,
            condicionesDB[0].operador,
            condicionesDB[0].valor
          )
        )
      : query(collection(db, collectionName));

  try {
    const consultaDB = await getDocs(q);

    const coleccion = consultaDB.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log(coleccion);
    return coleccion;
  } catch (error) {
    console.log(error);
  }
};
