import "../styles/Home.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Tutors from "../components/Tutors.jsx";
import Partners from "../components/Partners.jsx";
import Contact from "../components/Contact.jsx";
import { homeSection } from "../data/HomeSection.jsx";
import { courseSection } from "../data/CourseSection.jsx";
import { tutorsSection, tutorsList } from "../data/TutorsSection.jsx";
import { partnersSection, partnersList } from "../data/PartnersSection.jsx";
import { contactSection } from "../data/ContactSection.jsx";
import HTMLReactParser from "html-react-parser/lib/index";

function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        {/* Home */}
        <section id="home">
          <img src={homeSection.image} />
          <div className="kolom">{HTMLReactParser(homeSection.content)}</div>
        </section>
        {/* Home */}
        {/* Course */}
        <section id="courses">
          <div className="kolom">{HTMLReactParser(courseSection.content)}</div>
          <img src={courseSection.image} />
        </section>
        {/* Course */}
        {/* Tutors */}
        <section id="tutors">
          <div className="tengah">
            <div className="kolom">
              {HTMLReactParser(tutorsSection.content)}
            </div>
            <Tutors tutorsList={tutorsList} />
          </div>
        </section>
        {/* Tutors */}
        {/* Partner */}
        <section id="partners">
          <div className="tengah">
            <div className="kolom">
              {HTMLReactParser(partnersSection.content)}
            </div>
            <Partners partnersList={partnersList} />
          </div>
        </section>
        {/* Partner */}
        {/* Contact */}
        <Contact contactSection={contactSection} />
        {/* Contact */}
      </div>
      <Footer />
    </>
  );
}

export default Home;
