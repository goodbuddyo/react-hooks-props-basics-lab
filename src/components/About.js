import React from "react";
import Links from "./Links";

function About(props) {
  const bio=props.bio;
  const github=props.github;
  const linkedin=props.linkedin;

  return (
    <div id="about">
      <h2>About Me</h2>
      {bio? <p>{bio}</p>:null}

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
