import '../App.css'

// Import of Components
import Navbar from '../components/navBar'
import Image from '../components/image'
import Text from '../components/text'
import NavCard from '../components/navCard'
import Footer from '../components/footer'

// Import of Sources
import AiRacoonImg from '../assets/img/AiRacoon.webp'
import NetImg from '../assets/img/Net.webp'
import PatronImg from '../assets/img/Patron.webp'
import MetaPeopleImg from '../assets/img/MetaversePeople.webp'
import PeopleImg from '../assets/img/People.webp'
import RacoonDrawImg from '../assets/img/RacoonDraw.webp'

function Home() {

  return (
    <>
      <div>
      <Navbar></Navbar>
        <Image src={AiRacoonImg} alt='Ai Generated Racoon Image' styles='w-full'></Image>
        <Text text='¡Transforma' styles='absolute bottom-[230px] left-12 text-[50px] text-[var(--white)] font-medium'></Text>
        <Text text='ideas' styles='absolute bottom-[165px] left-12 text-[50px] text-[var(--tertiary)] font-medium'></Text>
        <Text text='en' styles='absolute bottom-[165px] left-50 text-[50px] text-[var(--white)] font-medium'></Text>
        <Text text='código' styles='absolute bottom-[110px] left-12 text-[50px] text-[var(--tertiary)] font-medium'></Text>
        <Text text='!' styles='absolute bottom-[110px] left-56 text-[50px] text-[var(--white)] font-medium'></Text>
        <Text text='Explora, crea y aprende en una comunidad' styles='absolute bottom-[55px] left-12 text-[19px] text-[var(--white)]'></Text>
        <Text text='que impulsa la innovación tecnológica' styles='absolute bottom-[25px] left-12 text-[19px] text-[var(--white)]'></Text>
        <Text text='30+' styles='absolute bottom-[220px] left-[74%] text-[50px] text-[var(--white)] font-medium'></Text>
        <Text text='Estudiantes' styles='absolute bottom-[180px] left-[74%] text-[30px] text-[var(--white)]'></Text>
        <Text text='3+' styles='absolute bottom-[100px] left-[74%] text-[50px] text-[var(--white)] font-medium'></Text>
        <Text text='Proyectos' styles='absolute bottom-[60px] left-[74%] text-[30px] text-[var(--white)]'></Text>
      </div>
      <div>
        <Image src={NetImg} alt='Global Network Net' styles='w-full'></Image>
        <Text text='Beneficios de unirte' styles='absolute block bottom-[-380px] left-[420px] text-[50px] text-[var(--secondary)] font-semibold'></Text>
        <Image src={MetaPeopleImg} alt='Global Network Net' styles='absolute bottom-[-108%] left-[12%] w-[290px] bg-[rgba(0,0,0,0)]'></Image>
        <Image src={PeopleImg} alt='Global Network Net' styles='absolute bottom-[-102%] left-[57%] w-[335px] bg-[rgba(0,0,0,0)]'></Image>
        <Text text='Desarrolla habilidades para el' styles='absolute bottom-[-108%] left-[12%] text-[19px] text-[var(--secondary)] font-semibold'></Text>
        <Text text='mundo laboral.' styles='absolute bottom-[-113%] left-[17%] text-[19px] text-[var(--secondary)] font-semibold'></Text>
        <Text text='Conecta con expertos y' styles='absolute bottom-[-107%] left-[61%] text-[19px] text-[var(--secondary)] font-semibold'></Text>
        <Text text='estudiantes apasionados.' styles='absolute bottom-[-112%] left-[60%] text-[19px] text-[var(--secondary)] font-semibold'></Text>
      </div>
      <div class='max-w-[100%]'>
        <Image src={PatronImg} alt='Global Network Net' styles='w-full max-w-[100%] bg-[var(--secondary)]'></Image>
        <Text text='Nuestros estudiantes' styles='absolute bottom-[-160%] left-[4%] text-[40px] text-[var(--white)] font-semibold'></Text>
        <Text text='nos avalan' styles='absolute bottom-[-167%] left-[4%] text-[40px] text-[var(--white)] font-semibold'></Text>
        <Text text='Descubre por qué estudiantes eligen formar parte del' styles='absolute bottom-[-156%] left-[758px] text-[20px] text-[var(--white)] font-light'></Text>
        <Text text='Club de Programación en la UIDE. Sus experiencias' styles='absolute bottom-[-162%] left-[58%] text-[20px] text-[var(--white)] font-light'></Text>
        <Text text='hablan por si solas' styles='absolute bottom-[-168%] left-[81%] text-[20px] text-[var(--white)] font-light'></Text>
        <NavCard styles='absolute top-[280%] bg-[rgba(0,0,0,0)]'></NavCard>
        <Image src={RacoonDrawImg} alyt='Racoon Draw' styles='absolute scale-75 left-[1015px] top-[1994px]'></Image>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Home
