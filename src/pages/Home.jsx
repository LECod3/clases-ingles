import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";

const learningPoints = [
  "Clases para niños y adultos.",
  "Material teorico y practico hecho a tu medida",
  "Práctica intensiva y retroalimentacion continua.",
  "Consultas sin costo adicional.",
  "Clases adaptadas a tus objetivos.",
];

const studentReviews = [
  { name: "Juan Perez", text: "Excelente profesor, muy paciente." },
  { name: "Maria Garcia", text: "Me ayudó a pasar mi examen final de inglés!" },
  { name: "Carlos Lopez", text: "Clases muy dinámicas y divertidas." },
];

function Home() {
  return (
    <>
      <Hero
        title="Aprende Inglés de forma práctica y real"
        subtitle="Clases personalizadas adaptadas a tus objetivos. Ya sea para trabajar, estudiar, viajar o simplemente mejorar."
      />
      <About items={learningPoints} />
      <Testimonials reviews={studentReviews} />
      <Contact />
    </>
  );
}

export default Home;
