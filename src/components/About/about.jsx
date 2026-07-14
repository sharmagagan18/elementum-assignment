import person4 from "../../assets/images/person4.jpg";
import "./about.css";

function About() {
  return (
    <section className="about">
      <div className="about-text">
        <h2>Tomorrow should be better than today.</h2>

        <p>
          We believe that every business has the potential to grow with the
          right strategy, creativity, and execution. Our team works together to
          create meaningful digital experiences.
        </p>

        <button>Read More →</button>
      </div>

    <div className="about-image">
  <img src={person4} alt="About" className="about-img" />
</div>
    </section>
  );
}

export default About;