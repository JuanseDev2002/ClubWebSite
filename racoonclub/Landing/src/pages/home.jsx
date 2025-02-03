import '../App.css';

// Import of Components
import Navbar from '../components/navBar';
import Image from '../components/image';
import Text from '../components/text';
import NavCard from '../components/navCard';
import Footer from '../components/footer';

// Import of Sources
import AiRacoonImg from '../assets/img/AiRacoon.webp';
import NetImg from '../assets/img/Net.webp';
import PatronImg from '../assets/img/Patron.webp';
import MetaPeopleImg from '../assets/img/MetaversePeople.webp';
import PeopleImg from '../assets/img/People.webp';
import RacoonDrawImg from '../assets/img/RacoonDraw.webp';

function Home() {
  return (
    <>
      <Navbar />
      <div className="relative w-full">
        <Image src={AiRacoonImg} alt="Ai Generated Racoon Image" styles="w-full" />
        <div className="absolute bottom-16 left-6 sm:left-12 md:left-20 lg:left-32 text-white">
          <Text text="¡Transforma" styles="text-4xl sm:text-5xl font-medium" />
          <Text text="ideas en código!" styles="text-4xl sm:text-5xl font-medium text-[var(--tertiary)]" />
          <Text text="Explora, crea y aprende en una comunidad que impulsa la innovación tecnológica" styles="text-sm sm:text-lg mt-2" />
        </div>
        <div className="absolute bottom-16 right-6 sm:right-12 md:right-20 lg:right-32 text-white">
          <Text text="30+" styles="text-4xl sm:text-5xl font-medium" />
          <Text text="Estudiantes" styles="text-2xl sm:text-3xl" />
          <Text text="3+" styles="text-4xl sm:text-5xl font-medium mt-4" />
          <Text text="Proyectos" styles="text-2xl sm:text-3xl" />
        </div>
      </div>

      <div className="text-center py-16 bg-gray-100">
        <Image src={NetImg} alt="Global Network Net" styles="w-full max-w-4xl mx-auto" />
        <Text text="Beneficios de unirte" styles="text-3xl sm:text-5xl font-semibold text-[var(--secondary)] mt-6" />
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
          <div className="text-center max-w-sm">
            <Image src={MetaPeopleImg} alt="Meta People" styles="w-56 mx-auto" />
            <Text text="Desarrolla habilidades para el mundo laboral." styles="text-lg font-semibold text-[var(--secondary)] mt-4" />
          </div>
          <div className="text-center max-w-sm">
            <Image src={PeopleImg} alt="People" styles="w-56 mx-auto" />
            <Text text="Conecta con expertos y estudiantes apasionados." styles="text-lg font-semibold text-[var(--secondary)] mt-4" />
          </div>
        </div>
      </div>

      <div className="bg-[var(--secondary)] py-16 text-white text-center">
        <Text text="Nuestros estudiantes nos avalan" styles="text-3xl sm:text-5xl font-semibold" />
        <Text text="Descubre por qué estudiantes eligen formar parte del Club de Programación en la UIDE. Sus experiencias hablan por sí solas." styles="text-lg max-w-2xl mx-auto mt-4" />
        <NavCard styles="mt-8" />
        <Image src={RacoonDrawImg} alt="Racoon Draw" styles="w-40 mx-auto mt-8" />
      </div>
      
      <Footer />
    </>
  );
}

export default Home;
