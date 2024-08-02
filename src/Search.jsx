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
                <option value = "poison">Poison</option>
                <option value = "bug">Bug</option>
                <option value = "normal">Normal</option>
                <option value = "flying">Flying</option>
                <option value= "electric">Electric</option>
                <option value = "ground">ground</option>
                <option value = "pyschic">Pyschic</option>
                <option value="ground">Ground</option>
                <option value="rock">Rock</option>
            </select>
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
    