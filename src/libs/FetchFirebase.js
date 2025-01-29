import { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
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

// ********* DAME UN UNICO DOC POR SU ID Y SIN ESCUCHADOR **********
export const obtenerDocPorId = async (collectionName, idDoc) => {
  console.log("DB 😐😐😐😐😐" + collectionName);
  try {
    const docRef = doc(db, collectionName, idDoc);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const documento = docSnap.data();
      // console.log(documento);
      return documento;
    } else {
      console.log("No se encontró el documento con ese ID.");
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

// ****************** ULTIMOS DOCUMENTOS SIN ESCUCHADOR **********************
export const fetchGetDocsLimit = async (
  collectionName,
  propiedad,
  tipo,
  limite
) => {
  console.log("DB 😐😐😐😐😐" + collectionName);

  const postsRef = collection(db, collectionName);
  // const postsQuery = query(postsRef, orderBy("createdAt", "desc"), limit(10));
  const q = query(postsRef, orderBy(propiedad, tipo), limit(limite));

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

// *********************** por rango de fecha y palabras claves **************************
export const fetchFindAnyContains = async (
  collectionName,
  nameArray,
  palabra,
  limite
) => {
  console.log("DB 😐😐😐😐😐" + collectionName);
  const postsRef = collection(db, collectionName);
  const q = query(
    postsRef,
    where(nameArray, "array-contains-any", palabra),
    limit(limite)
  );

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
    return "error";
  }
};
