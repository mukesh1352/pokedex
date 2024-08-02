import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

function Search({ searchTerm, onSearchTermChange, typeFilter, onTypeFilterChange }) {
    return (
        <div className="search-container">
            <input 
                type="text" 
                placeholder="Search by name" 
                className="search-box-pokemon"
                value={searchTerm}
                onChange={(e) => onSearchTermChange(e.target.value)}
            />
            <select 
                className="type-filter" 
                value={typeFilter} 
                onChange={(e) => onTypeFilterChange(e.target.value)}
            >
                <option value="">All Types</option>
                <option value="grass">Grass</option>
                <option value="fire">Fire</option>
                <option value="water">Water</option>
                {/* Add more types as needed */}
            </select>
            <FontAwesomeIcon icon={faFilter} className='hover-box'/>
        </div>
    );
}

Search.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    onSearchTermChange: PropTypes.func.isRequired,
    typeFilter: PropTypes.string.isRequired,
    onTypeFilterChange: PropTypes.func.isRequired,
};

export default Search;
