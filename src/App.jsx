import { useState } from "react";
import "./app.css";
import { theme } from "./config/theme";
import styled from "styled-components";
import Header from "./components/Header";
import ContenedorPrincipal from "./components/ContenedorPrincipal";
import Home from "./page/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Home />

    // <ContenedorPrincipal>
    //   <Header />
    //   <HeroSection>
    //     <HeroTitle>Bienvenidos a las Villas en Punta Cana</HeroTitle>
    //     <p>
    //       Disfruta del lujo y la tranquilidad en nuestras exclusivas villas
    //       frente al mar.
    //     </p>
    //     <HeroButton>Ver Villas</HeroButton>
    //   </HeroSection>

    //   <VillasSection>
    //     <div style={{ textAlign: "center", marginBottom: "32px" }}>
    //       <h2>Nuestras Villas</h2>
    //     </div>
    //     <VillasGrid>
    //       <VillaCard>
    //         <VillaImage src="https://via.placeholder.com/300" alt="Villa 1" />
    //         <VillaContent>
    //           <VillaTitle>Villa Tropical</VillaTitle>
    //           <VillaDescription>
    //             Una villa perfecta para disfrutar con tu familia y amigos,
    //             rodeada de vegetación tropical.
    //           </VillaDescription>
    //           <VillaButton>Ver Detalles</VillaButton>
    //         </VillaContent>
    //       </VillaCard>
    //       {/* Agrega más tarjetas de villas aquí */}
    //     </VillasGrid>
    //   </VillasSection>

    //   <ContactSection>
    //     <h2>Contáctanos</h2>
    //     <p>
    //       ¿Estás listo para tu próxima escapada? Contáctanos para reservar tu
    //       villa.
    //     </p>
    //     <ContactButton>Reserva Ahora</ContactButton>
    //   </ContactSection>

    //   <Footer>
    //     <p>&copy; 2024 Villas Punta Cana. Todos los derechos reservados.</p>
    //   </Footer>
    // </ContenedorPrincipal>
  );
}

export default App;

// Hero Section
const HeroSection = styled.section`
  background-color: ${theme.primary.turquoise};
  color: ${theme.primary.white};
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

const HeroButton = styled.button`
  background-color: ${theme.secondary.coral};
  color: ${theme.primary.white};
  padding: 12px 24px;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.secondary.palmGreen};
  }
`;

// Villas Section
const VillasSection = styled.section`
  padding: 60px 0;
  background-color: ${theme.primary.sand};
`;

const VillasGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 32px;
  justify-items: center;
`;

const VillaCard = styled.div`
  background-color: ${theme.primary.white};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
`;

const VillaImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const VillaContent = styled.div`
  padding: 24px;
`;

const VillaTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 12px;
`;

const VillaDescription = styled.p`
  color: ${theme.complementary.midnightBlue};
  margin-bottom: 16px;
`;

const VillaButton = styled.button`
  background-color: ${theme.secondary.coral};
  color: ${theme.primary.white};
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.secondary.palmGreen};
  }
`;

// Contact Section
const ContactSection = styled.section`
  padding: 60px 0;
  background-color: ${theme.primary.white};
  text-align: center;
`;

const ContactButton = styled.button`
  background-color: ${theme.secondary.gold};
  color: ${theme.primary.white};
  padding: 12px 24px;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.secondary.palmGreen};
  }
`;

// Footer
const Footer = styled.footer`
  background-color: ${theme.complementary.midnightBlue};
  color: ${theme.primary.white};
  padding: 16px;
  text-align: center;
`;
