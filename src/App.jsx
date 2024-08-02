import './index.css'; 
import Heading from './Heading.jsx';
import Search from './Search.jsx';
import Api from './Api.jsx';
import { useState } from 'react';

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [typeFilter, setTypeFilter] = useState('');

    return (
        <>
            <Heading />
            <Search 
                searchTerm={searchTerm} 
                onSearchTermChange={setSearchTerm}
                typeFilter={typeFilter}
                onTypeFilterChange={setTypeFilter}
            />
            <Api searchTerm={searchTerm} typeFilter={typeFilter} />
        </>
    );
}

export default App;
