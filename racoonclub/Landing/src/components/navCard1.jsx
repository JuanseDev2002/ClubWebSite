import React, { useRef, useState } from "react";
import Card from "./card";

const NavCard = ({ styles }) => {
  const listRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - listRef.current.offsetLeft);
    setScrollLeft(listRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - listRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Velocidad del desplazamiento
    listRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className={`${styles} max-w-[100%]`}>
      <ul
        ref={listRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory p-4 cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {[
          {
            date: "14 enero 2024",
            text: "Participar en el club me ayudó a entender mejor las tecnologías emergentes. ¡Ahora estoy desarrollando mi primera app!",
            user_name: "Juan Campana",
            carrer: "Estudiante de TI",
          },
          {
            date: "14 enero 2024",
            text: "Participar en el club me ayudó a entender mejor las tecnologías emergentes. ¡Ahora estoy desarrollando mi primera app!",
            user_name: "Leonardo Carrion",
            carrer: "Estudiante de TI - Presidente de la carrera",
          },
          {
            date: "14 enero 2024",
            text: "Participar en el club me ayudó a entender mejor las tecnologías emergentes. ¡Ahora estoy desarrollando mi primera app!",
            user_name: "Leonardo Carrion",
            carrer: "Estudiante de TI - Presidente de la carrera",
          },
          {
            date: "14 enero 2024",
            text: "Participar en el club me ayudó a entender mejor las tecnologías emergentes. ¡Ahora estoy desarrollando mi primera app!",
            user_name: "Leonardo Carrion",
            carrer: "Estudiante de TI - Presidente de la carrera",
          },
        ].map((card, index) => (
          <li key={index} className="flex mx-8 shrink-0 justify-center snap-center">
            <Card
              date={card.date}
              text={card.text}
              user_name={card.user_name}
              carrer={card.carrer}
              styles="inline-block p-6 min-w-[300px] max-w-[430px] h-50 rounded-2xl border-[var(--primary)] border-2 text-[var(--white)] bg-[var(--grey)]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavCard;
