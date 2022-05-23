import PropTypes from "prop-types";
import stl from "./Section.module.css";

function Section({ title, classes, children }) {
  // const sectionTitle = ['Section__title']
  // sectionTitle.push(classes)
  // className={sectionTitle.join(' ')}

  return (
    <div className="section">
      {title && <h2 className={stl.section__title}>{title}</h2>}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
