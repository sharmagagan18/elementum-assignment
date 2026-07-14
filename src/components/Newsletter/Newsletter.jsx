import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">
      <h2>Let's create progress together.</h2>

      <p>
        Subscribe to our newsletter and receive the latest updates from our
        team.
      </p>

      <div className="newsletter-box">
        <input
          type="email"
          placeholder="Enter your email"
        />

        <button>Subscribe</button>
      </div>
    </section>
  );
}

export default Newsletter;