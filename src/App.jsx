import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/about";
import Progress from "./components/Progress/progress";
import Services from "./components/Services/services";
import Testimonials from "./components/Testimonials/Testimonials";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Progress />
      <Services />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;