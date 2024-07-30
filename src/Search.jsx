import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
function Search()
{
    return(
        <div className="search-container">
            <input type="text" placeholder="Search" className="search-box-pokemon"></input>
            <FontAwesomeIcon icon={faFilter} className='hover-box'/>
        </div>
    );
}

export default Search