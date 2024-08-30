import { useState } from 'react';

function FilterMovies() {
    const [selectedFruit, setSelectedFruit] = useState('');
    return ( <
        >
        <
        label >
        Pick a fruit:
        <
        select value = { selectedFruit }
        onChange = { e => setSelectedFruit(e.target.value) } >
        <
        option value = "apple" > Apple < /option> <
        option value = "banana" > Banana < /option> <
        option value = "orange" > Orange < /option> < /
        select > <
        /label>

        <
        />
    );
}

export default FilterMovies;