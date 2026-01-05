import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Precios from "./pages/Precios";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero
              title="Aprende Inglés de forma práctica y real"
              subtitle="Clases personalizadas adaptadas a tus objetivos. Ya sea para trabajar, estudiar, viajar o simplemente mejorar."
            />
            <About items={learningPoints} />
            <Testimonials reviews={studentReviews} />
            <Contact />
          </>
        } />
        <Route path="/about" element={<About items={learningPoints} />} />
        <Route path="/testimonials" element={<Testimonials reviews={studentReviews} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/precios" element={<Precios />} />
      </Routes>
    </Router>
  );
}

const learningPoints = [
  "Clases para niños y adultos.",
  "Fonética, Gramática, Vocabulario y Listening.",
  "Práctica intensiva.",
  "Consultas sin costo adicional.",
];
const studentReviews = [
  { name: "Juan Perez", text: "Excelente profesor, muy paciente." },
  { name: "Maria Garcia", text: "Me ayudó a pasar mi examen final de inglés!" },
  { name: "Carlos Lopez", text: "Clases muy dinámicas y divertidas." },
];
export default App;
