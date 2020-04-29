import React from 'react';

import {Cards, Chart, CountryPicker} from './Components';
import styles from './App.module.css';
import {fetchData} from './api';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
    }
    
    handleCountryChange = async (country) => {
        // fetch the data
        const fetchedData = await fetchData(country);
        // set the sate
        this.setState({data: fetchedData, country: country});
    }

    render() {
        const {data, country} = this.state;
        return (
            <div className={styles.container}>
                {/* this makes sure that you don't have any interference another other css file across your whole file system */}
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country} />
            </div>
        );
    }
}

export default App;