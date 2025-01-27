import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { autenticar } from "../firebase/firebaseConfig";

const AuthContext = createContext(null);
// Hook para acceder al contexto
const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  // Saber si el usuario tiene sesion iniciada
  const [usuario, setUsuario] = useState();
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    const cancelarSuscripcion = onAuthStateChanged(autenticar, (user) => {
      console.log(user);
      if (user) {
        setUsuario(user);
      } else {
        setUsuario(null);
        console.log("❌❌❌❌");
      }
      setCargando(false);
    });
    return cancelarSuscripcion;
  }, []);
  return (
    <AuthContext.Provider value={{ usuario: usuario }}>
      {!cargando && children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, AuthContext, useAuth };

// import { createContext, useContext, useState, useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { autenticar } from "../firebase/firebaseConfig";

// const AuthContext = createContext(null);
// // Hook para acceder al contexto
// const useAuth = () => {
//   return useContext(AuthContext);
// };
// const AuthProvider = ({ children }) => {
//   // Saber si el usuario tiene sesion iniciada
//   const [usuario, setUsuario] = useState();
//   const [cargando, setCargando] = useState(true);

//   useEffect(() => {
//     const cancelarSuscripcion = onAuthStateChanged(autenticar, (user) => {
//       console.log(user);
//       if (user) {
//         setUsuario(user);
//       } else {
//         setUsuario(null);
//         console.log("❌❌❌❌");
//       }
//       setCargando(false);
//     });
//     return cancelarSuscripcion;
//   }, []);
//   return (
//     <AuthContext.Provider value={{ usuario: usuario }}>
//       {!cargando && children}
//     </AuthContext.Provider>
//   );
// };
// export { AuthProvider, AuthContext, useAuth };

// import { createContext, useContext, useState, useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { doc, onSnapshot } from "firebase/firestore";
// import db, { autenticar } from "../firebase/firebaseConfig";

// const AuthContext = createContext(null);

// // Hook para acceder al contexto
// const useAuth = () => {
//   return useContext(AuthContext);
// };

// const AuthProvider = ({ children }) => {
//   const [userMaster, setUserMaster] = useState(null); // Datos del usuario desde Firestore
//   const [cargando, setCargando] = useState(true);

//   useEffect(() => {
//     let cancelarSuscripcionAuth = null;
//     let cancelarSuscripcionFirestore = null;

//     cancelarSuscripcionAuth = onAuthStateChanged(autenticar, (user) => {
//       setCargando(true);
//       if (user) {
//         // Escuchar cambios en los datos del usuario desde Firestore
//         const usuarioRef = doc(db, "usuarios", user.uid);
//         cancelarSuscripcionFirestore = onSnapshot(
//           usuarioRef,
//           (docSnapshot) => {
//             if (docSnapshot.exists()) {
//               console.log("✅✅✅✅✅✅✅");
//               setUserMaster({ uid: user.uid, ...docSnapshot.data() });
//             } else {
//               setUserMaster(null);
//               console.log("❌❌❌❌❌❌");
//               console.error(
//                 "El usuario no existe en la colección de Firestore."
//               );
//             }
//             setCargando(false);
//           },
//           (error) => {
//             console.error("Error al escuchar los datos del usuario:", error);
//             setUserMaster(null);
//             setCargando(false);
//           }
//         );
//       } else {
//         // Si no hay un usuario autenticado
//         setUserMaster(null);
//         setCargando(false);
//       }
//     });

//     return () => {
//       // Cleanup: Detener ambos escuchadores
//       if (cancelarSuscripcionAuth) cancelarSuscripcionAuth();
//       if (cancelarSuscripcionFirestore) cancelarSuscripcionFirestore();
//     };
//   }, []);

//   return (
//     <AuthContext.Provider value={{ userMaster: userMaster }}>
//       {!cargando && children}
//     </AuthContext.Provider>
//   );
// };

// export { AuthProvider, AuthContext, useAuth };
