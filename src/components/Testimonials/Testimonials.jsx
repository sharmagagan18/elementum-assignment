import person5 from "../../assets/images/person5.jpg";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What our clients say</h2>

      <div className="testimonial-card">
        <p>
          "Working with Elementum completely transformed our online presence.
          Their team understood our vision and delivered beyond our expectations."
        </p>

        <div className="client">
          <img src={person5} alt="Client" className="avatar" />

          <div>
            <h4>John Smith</h4>
            <span>CEO, Creative Studio</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;