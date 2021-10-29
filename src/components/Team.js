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
            linkedin="#"
            github="#"
            insta="#"
          />
          <TeamCard
            src="assets/img/sifan.jpeg"
            title="Sifan Khan"
            post="Co-founder & Blockchain Devloper"
            linkedin="#"
            github="#"
            insta="#"
          />
          <TeamCard
            src="assets/img/mypic.jpg"
            title="Prateek Nair"
            post="Co-founder & Web Developer"
            linkedin="#"
            github="#"
            insta="#"
          />
        </div>
        <div className="cont">
          <TeamCard
            src="assets/img/biswajeet.jpeg"
            title="Biswajeet Panda"
            post="Co-founder & Web Developer"
            linkedin="#"
            github="#"
            insta="#"
          />
          <TeamCard
            src="assets/img/pratyush.jpeg"
            title="Pratyush Vakadi"
            post="Unity Developer"
            linkedin="#"
            github="#"
            insta="#"
          />
          <TeamCard
            src="assets/img/ishita.jpeg"
            title="Ishita Satpathy"
            post="Unity Developer"
            linkedin="#"
            github="#"
            insta="#"
          />
          <TeamCard
            src="assets/img/ritu.jpg"
            title="Ritu Mohapatro"
            post="UI/UX Designer"
            linkedin="#"
            github="#"
            insta="#"
          />
        </div>
      </section>
    </>
  );
};
export default Team;
