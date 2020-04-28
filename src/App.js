import React from 'react';

import {Cards, Chart, CountryPicker} from './Components';
import styles from './App.module.css';
import {fetchData} from './api';

class App extends React.Component {
    state = {
        data: {},
    }
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
    }
    render() {
        const {data} = this.state;
        return (
            <div className={styles.container}>
                {/* this makes sure that you don't have any interference another other css file across your whole file system */}
                <Cards data={data}/>
                <CountryPicker/>
                <Chart/>
            </div>
        );
    }
}

export default App;