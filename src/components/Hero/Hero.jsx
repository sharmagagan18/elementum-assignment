import "./hero.css";

import person1 from "../../assets/images/person.jpg";
import person2 from "../../assets/images/person2.jpg";
import person3 from "../../assets/images/person3.jpg";
import person4 from "../../assets/images/person4.jpg";
import person5 from "../../assets/images/person5.jpg";

function Hero() {
  return (
    <section className="hero">
      <h1>The thinkers and doers were changing the status Quo with</h1>

      <p>
        We are a team of strategists, designers, communicators,
        researchers and developers creating meaningful experiences.
      </p>

      <div className="avatars">
        <img src={person1} alt="" className="avatar" />
        <img src={person2} alt="" className="avatar" />
        <img src={person3} alt="" className="avatar" />
        <img src={person4} alt="" className="avatar" />
        <img src={person5} alt="" className="avatar" />
      </div>
    </section>
  );
}

export default Hero;