import React, { useState, useEffect } from 'react';
import { fetchDailyData } from './../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect( () => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    });

    const lineChart = (
        dailyData[0] ?
        (
            <Line
                data={{
                    labels: dailyData.map(x => x.date),
                    datasets: [{
                        data: dailyData.map(({confirmed}) => confirmed),
                        label: 'Infected',
                        borderColor: '#ff5d6c',
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        fill: true,
                    }, {
                        data: dailyData.map(({deaths}) => deaths),
                        label: 'Deaths',
                        borderColor: '#35495e',
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        fill: true,
                    }]
                }}
            />
        ) : null
    );
    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart;