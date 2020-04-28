import React from 'react';

import {Cards, Chart, CountryPicker} from './Components';
import styles from './App.module.css';
import {fetchData} from './api';

class App extends React.Component {
    async componentDidMount() {
        const data = await fetchData();
        console.log(data);
    }
    render() {
        return (
            <div className={styles.container}>
                {/* this makes sure that you don't have any interference another other css file across your whole file system */}
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        );
    }
}

export default App;