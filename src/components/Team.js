import React from "react";
import TeamCard from "./UI/TeamCard";

const Team = (props) => {
  return (
    <>
      <section className="team">
        <h1 className="text-center">Team</h1>
        <div className="cont">
          <TeamCard
            src="assets/img/abhisek.jpeg"
            title="Abhisek Yadav"
            post="Co-founder & Blockchain Developer"
            linkedin="https://www.linkedin.com/in/abhisekyadav/"
            github="https://github.com/Abhisek0x"
            insta="https://www.instagram.com/_abhisek_yadav/"
          />
          <TeamCard
            src="assets/img/sifan.jpeg"
            title="Sifan Khan"
            post="Co-founder & Blockchain Developer"
            linkedin="https://www.linkedin.com/in/sifan-khan-2359a1192/"
            github="https://github.com/Zephyr-Phoenix"
            insta="#"
          />
          <TeamCard
            src="assets/img/mypic.jpg"
            title="Prateek Nair"
            post="Co-founder & Web Developer"
            linkedin="https://www.linkedin.com/in/prateek-nair-91489719a/"
            github="https://github.com/prateek-jpg"
            insta="https://www.instagram.com/prat___07/"
          />
        </div>
        <div className="cont">
          <TeamCard
            src="assets/img/biswajeet.jpeg"
            title="Biswajeet Panda"
            post="Co-founder & Web Developer"
            linkedin="https://www.linkedin.com/in/biswajeetpanda-/"
            github="https://github.com/Biswa-bob"
            insta="https://www.instagram.com/b.o.b_builder_/"
          />
          <TeamCard
            src="assets/img/pratyush.jpeg"
            title="Pratyush Vakadi"
            post="Unity Developer"
            linkedin="https://www.linkedin.com/in/vakadi-sai-pratyush-ba9b18200/"
            github="https://github.com/Sai-Pratyush"
            insta="https://www.instagram.com/pratyushvakadi5711/"
          />
          <TeamCard
            src="assets/img/ishita.jpeg"
            title="Ishita Satpathy"
            post="Unity Developer"
            linkedin="https://www.linkedin.com/in/ishita-satpathy-619a38201/"
            github="https://github.com/IshitaSatpathy"
            insta="https://www.instagram.com/ishitasatpathy/"
          />
          <TeamCard
            src="assets/img/ritu.jpg"
            title="Ritu Mohapatro"
            post="UI/UX Designer"
            linkedin="https://www.linkedin.com/in/ritu-rani-mohapatra-45a0bb209/"
            github="https://github.com/RituRanii"
            insta="https://www.instagram.com/__a_m_b_i_v_e_r_t.__/"
          />
        </div>
      </section>
    </>
  );
};
export default Team;
