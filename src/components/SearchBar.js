import React, { useState } from 'react';

const SearchBar = (props) => {
    const [ term, setTerm ] = useState('');

    const onInputChange = event => {
        setTerm(event.target.value);
    };

    const onFormSubmit = event => {
        event.preventDefault();

        props.onFormSubmit(term);
    };

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <div>
                    <label>Search: </label>
                    <input type="text" value={term} onChange={onInputChange} />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
