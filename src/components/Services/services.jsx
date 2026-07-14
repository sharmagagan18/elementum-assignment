import "./services.css";

function Services() {
  const services = [
    {
      number: "01",
      title: "Brand Strategy",
      description: "Building strong and memorable brands for businesses."
    },
    {
      number: "02",
      title: "UI/UX Design",
      description: "Designing clean, modern and user-friendly interfaces."
    },
    {
      number: "03",
      title: "Development",
      description: "Creating fast, responsive and scalable web applications."
    }
  ];

  return (
    <section className="services">
      <h2>What we can offer you!</h2>

      {services.map((service) => (
        <div className="service-card" key={service.number}>
          <div className="left">
            <span>{service.number}</span>
            <h3>{service.title}</h3>
          </div>

          <p>{service.description}</p>

          <button>→</button>
        </div>
      ))}
    </section>
  );
}

export default Services;