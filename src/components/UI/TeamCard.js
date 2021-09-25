import React from "react";

const TeamCard = (props) => {
  return (
    <div class="our-team">
      <div class="pic">
        <img src={props.src} alt="" />
      </div>
      <div class="team-content">
        <h2 class="title">{props.title}</h2>
        <span class="post">{props.post}</span>
      </div>

      <ul class="social">
        <li>
          <a href={props.github} class="icofont-github"></a>
        </li>
        <li>
          <a href={props.linkedin} class="icofont-linkedin"></a>
        </li>
        <li>
          <a href={props.insta} class="icofont-instagram"></a>
        </li>
      </ul>
    </div>
  );
};

export default TeamCard;
