import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

// ************************** DAME SOLO UN DOC POR ID CON ESCUCHADOR **************************
export const useDocById = (collectionName, setState, idUsuario) => {
  const usuario = useAuth().usuario;
  useEffect(() => {
    if (usuario) {
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
