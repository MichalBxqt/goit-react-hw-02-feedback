import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      {/* <Container> */}
      <div>
        <h2 className={css.title}>{title}</h2>
        {children}
      </div>
      {/* </Container> */}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;