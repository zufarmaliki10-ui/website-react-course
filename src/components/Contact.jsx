import HTMLReactParser from "html-react-parser/lib/index";
import "../styles/Contact.css";

function Contact(props) {
  return (
    <div id="contact">
      <div className="wrapper">
        <div className="footer">
          {props.contactSection.map((item, index) => {
            return (
              <div className="footer-section" key={index}>
                {HTMLReactParser(item.content)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Contact;
