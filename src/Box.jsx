import PropTypes from 'prop-types';

function Box({ id,name, hp, image, type }) {
    return (
        <div className="box-container">
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p>ID : {id}</p>
            <p>HP: {hp}</p>
            <p>Type: {type.join(', ')}</p>
        </div>
    );  
}

Box.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    hp: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    type: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Box;
