import React from "react";
import TeamCard from "./UI/TeamCard";

const Team = (props) => {
  return (
    <>
      <section className="team">
        <h1 className="text-center">Team</h1>
        <div className="cont">
          <TeamCard
            src="assets/img/abhisek.png"
            title="Abhisek Yadav"
            post="Co-founder & Blockchain Developer"
            linkedin="https://www.linkedin.com/in/abhisekyadav/"
            github="https://github.com/Abhisek0x"
            twitter="https://twitter.com/Abhisek__Yadav"
          />
          <TeamCard
            src="assets/img/sifan.png"
            title="Sifan Khan"
            post="Co-founder & Blockchain Developer"
            linkedin="https://www.linkedin.com/in/sifan-khan-2359a1192/"
            github="https://github.com/Zephyr-Phoenix"
            twitter="#"
          />
          <TeamCard
            src="assets/img/mypic.png"
            title="Prateek Nair"
            post="Co-founder & Web Developer"
            linkedin="https://www.linkedin.com/in/prateek-nair-91489719a/"
            github="https://github.com/prateek-jpg"
            twitter="#"
          />
          <TeamCard
            src="assets/img/biswajeet.png"
            title="Biswajeet Panda"
            post="Co-founder & Web Developer"
            linkedin="https://www.linkedin.com/in/biswajeetpanda-/"
            github="https://github.com/Biswa-bob"
            twitter="https://twitter.com/Biswaje21679577"
          />
        </div>
        <div className="cont">
          <TeamCard
            src="assets/img/appy.png"
            title="Aparajita Panda"
            post="Content Writer"
            linkedin="https://www.linkedin.com/in/aparajitapanda5/"
            github="https://github.com/Aparajitapanda"
            twitter="#"
          />
          <TeamCard
            src="assets/img/pratyush.png"
            title="Pratyush Vakadi"
            post="Unity Developer"
            linkedin="https://www.linkedin.com/in/vakadi-sai-pratyush-ba9b18200/"
            github="https://github.com/Sai-Pratyush"
            twitter="#"
          />
          <TeamCard
            src="assets/img/ishita.png"
            title="Ishita Satpathy"
            post="Unity Developer"
            linkedin="https://www.linkedin.com/in/ishita-satpathy-619a38201/"
            github="https://github.com/IshitaSatpathy"
            twitter="#"
          />
          <TeamCard
            src="assets/img/ritu.png"
            title="Ritu Mohapatro"
            post="UI/UX Designer"
            linkedin="https://www.linkedin.com/in/ritu-rani-mohapatra-45a0bb209/"
            github="https://github.com/RituRanii"
            twitter="#"
          />
        </div>
      </section>
    </>
  );
};
export default Team;
