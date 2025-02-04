import '../App.css';

// Import of Components
import Navbar from '../components/navBar';
import Image from '../components/image';
import Text from '../components/text';
import NavCard from '../components/navCard';
import Footer from '../components/footer';
import NavProjects from '../components/navProjects';

// Import of Sources
import AiRacoonImg from '../assets/img/AiRacoon.webp';
import NetImg from '../assets/img/Net.webp';
import PatronImg from '../assets/img/Patron.webp';
import MetaPeopleImg from '../assets/img/MetaversePeople.webp';
import PeopleImg from '../assets/img/People.webp';
import RacoonDrawImg from '../assets/img/RacoonDraw.webp';
import LogoClubImg from '../assets/img/LogoClub.webp';

function Home() {
  return (
    <>
      <Navbar />
      <section className="relative w-full">
        <Image src={AiRacoonImg} alt="Ai Generated Racoon Image" styles="w-full h-auto mx-auto" />
        <div className="absolute top-1/2 left-6 sm:left-12 md:left-20 lg:left-12 text-white transform -translate-y-1/2">
          <Text text="CLUB DE" styles="text-2xl sm:text-3xl md:text-4xl lg:mt-2 lg:text-4xl font-semibold" />
          <Text text="PROGRAMACIÓN" styles="text-2xl sm:text-3xl md:text-4xl lg:mt-2 lg:text-4xl font-semibold sm:mb-5 lg:mb-8 text-[var(--tertiary)]" />
          <Text text="¡Transforma" styles="text-xl mt-5 sm:text-3xl md:text-4xl lg:mt-2 lg:text-4xl font-medium" />
          <Text text="ideas en" styles="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-medium text-[var(--tertiary)]" />
          <Text text="código!" styles="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-medium text-[var(--whithe)]" />
          <Text text="Explora, crea y aprende en una" styles="text-xs sm:text-[8px] md:text-lg mt-2" />
          <Text text="comunidad que impulsa la" styles="text-xs sm:text-xs md:text-lg mt-2" />
          <Text text="innovación tecnológica" styles="text-xs sm:text-xs md:text-lg mt-2" />
        </div>
        <div className="absolute top-1/2 right-6 sm:mt-10 sm:right-20 md:right-20 md:mt-5 lg:right-32 mt-10 text-white transform -translate-y-1/2">
          <Text text="30+" styles="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium" />
          <Text text="Estudiantes" styles="text-lg sm:text-xl md:text-2xl lg:text-3xl" />
          <Text text="3+" styles="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mt-4" />
          <Text text="Proyectos" styles="text-lg sm:text-xl md:text-2xl lg:text-3xl" />
        </div>
      </section>

      <section className="text-center py-16 bg-cover bg-center bg-no-repeat" 
               style={{ backgroundImage: `url(${NetImg})` }}>
        <Text text="Beneficios de unirte" styles="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--secondary)] mt-6" />
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
          <div className="text-center max-w-sm">
            <Image src={MetaPeopleImg} alt="Meta People" styles="w-40 sm:w-48 md:w-56 lg:w-64 h-auto mx-auto" />
            <Text text="Desarrolla habilidades para el mundo laboral." styles="text-sm sm:text-md md:text-lg font-semibold text-[var(--secondary)] mt-4" />
          </div>
          <div className="text-center max-w-sm">
            <Image src={PeopleImg} alt="People" styles="w-40 sm:w-48 md:w-56 lg:w-64 h-auto mx-auto" />
            <Text text="Conecta con expertos y estudiantes apasionados." styles="text-sm sm:text-md md:text-lg font-semibold text-[var(--secondary)] mt-4" />
          </div>
        </div>
      </section>

      <section className="bg-[var(--secondary)] py-16 text-white bg-cover bg-center bg-no-repeat" 
               style={{ backgroundImage: `url(${PatronImg})` }}>
        <Text text="Nuestros estudiantes nos avalan" styles="text-center text-2xl mt-16 sm:text-3xl md:text-4xl lg:text-5xl font-semibold" />
        <Text text="Descubre por qué estudiantes eligen formar parte del Club de Programación en la UIDE."
          styles="block text-center mt-10 max-w-[85%] text-sm sm:text-md md:text-lg max-w-2xl mx-auto mt-4" />
        <Text text="Sus experiencias hablan por sí solas."
          styles="text-center max-w-[85%] text-sm sm:text-md md:text-lg max-w-2xl mx-auto mt-4" />
        <NavCard styles="mt-8" />
        <Image src={RacoonDrawImg} alt="Racoon Draw" styles="transform scale-x-[-1] origin-center relative top-16 right-0 w-32 sm:w-40 md:w-48 lg:w-56" />
      </section>

      <section className="text-center py-16 bg-white bg-cover bg-center bg-no-repeat">
        <Text text="Nuestros mejores proyectos" styles="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--secondary)] mt-6" />
        <Text text="Proyectos realizados por nuestros estudiantes con las habilidades" styles="text-md sm:text-md md:text-xl font-normal text-[var(--secondary)] mt-10" />
        <Text text="adquiridas durante las capacitaciones especializadas" styles="text-md sm:text-md md:text-xl font-normal text-[var(--secondary)] mt-4" />
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
          <NavProjects></NavProjects>
        </div>
      </section>

      <section className='h-53 bg-[#002050] border-t-[1px] p-4 md:px-13 overflow-x-hidden flex flex-col md:flex-row items-start md:items-center justify-between'>
        <div className='md:w-1/4 w-full text-center md:text-left flex justify-center md:justify-start'> {/* Centrar imagen en móvil */}
            <Image src={LogoClubImg} alt='Logo Programing Club Racoon' styles='scale-80'></Image>
        </div>
        <div className='md:w-1/4 w-full text-center md:text-left mt-4 md:mt-0'> {/* Ancho adaptable para el texto */}
            <Text text='La programación no es el futuro,' styles='text-white text-lg font-light'></Text>
            <Text text='es el presente. ¡Se parte del' styles='text-white text-lg font-light'></Text>
            <Text text='cambio con nosotros!' styles='text-white text-lg font-light'></Text>
        </div>
        <div className='md:w-1/4 w-full text-center md:text-left mt-4 md:mt-0'> {/* Ancho adaptable para la dirección */}
            <Text text='Dirección' styles='text-white text-xl font-medium'></Text>
            <Text text='Calle Agustín Carrión Palacios' styles='text-white text-xl font-light'></Text>
            <Text text='entre Av. Salvador Bustamante' styles='text-white text-xl font-light'></Text>
            <Text text='Celi y Beethoven. Sector Jipiro ' styles='text-white text-xl font-light'></Text>
        </div>
        <div className='md:w-1/4 w-full text-center md:text-left mt-4 md:mt-0'> {/* Ancho adaptable para el contacto */}
            <Text text='Contacto' styles='text-white text-xl font-medium'></Text>
            <Text text='charlie.act7@gmail.com' styles='text-white text-xl font-light'></Text>
            <Text text='099 266 7927' styles='text-white text-xl font-light'></Text>
        </div>
      </section>
      
      <Footer />
    </>
  );
}

export default Home;
