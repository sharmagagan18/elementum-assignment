import "./progress.css";
import person3 from "../../assets/images/person3.jpg";
function Progress() {
  return (
    <section className="progress">
      <div className="progress-image">
        <img src={person3} alt="Progress" className="progress-img" />
      </div>

      <div className="progress-text">
        <h2>See how we can help you progress.</h2>

        <p>
          We combine strategy, design, and technology to help businesses
          create better experiences and achieve meaningful growth.
        </p>

        <button>Learn More →</button>
      </div>
    </section>
  );
}

export default Progress;