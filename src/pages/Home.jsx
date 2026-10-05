import "../styles/Home.css";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Tutors from "../components/Tutors";
import { homeSection } from "../data/HomeSection";
import { courseSection } from "../data/CourseSection";
import { tutorsSection } from "../data/TutorsSection";
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
            <Tutors />
          </div>
        </section>
        {/* Tutors */}
      </div>
      <Footer />
    </>
  );
}

export default Home;
