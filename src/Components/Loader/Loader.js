import './style.css'
import PropTypes from 'prop-types';

const Loader = ({ item, text }) => {
    console.log("Item")
  return (
    <>
      <h2 style={{textAlign: "center"}}> {item} {text}!</h2>
      <div className="main-spinner">
        <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
        </div>
      </div>
    </>
  );
};

Loader.propTypes = {
  item: PropTypes.string,
  text: PropTypes.string,
}

export default Loader;