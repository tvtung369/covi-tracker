import React, { useState, useEffect } from 'react';
import styles from './CountryPicker.module.css';
import {fetchCountries} from './../../api'

const CountryPicker = ({handleCountryChange}) => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setCountries]);
    console.log(countries);
    return (
        <div className={styles.container}>
            <select defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {countries.map((x, i) => (<option key={i} value={x}>{x}</option>))}
            </select>
        </div>
    )
}

export default CountryPicker;