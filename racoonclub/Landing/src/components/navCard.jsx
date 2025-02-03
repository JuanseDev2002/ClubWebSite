import React from "react";
import Card from "./card";

const NavCard = ({ styles }) => {
  return (
    <div class={`${styles} max-w-[100%]`}>
      <ul class="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory p-4">
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
          <li key={index} class="flex mx-8 justify-center shrink-0 snap-center">
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
