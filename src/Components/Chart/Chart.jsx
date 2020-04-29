import React, { useState, useEffect } from 'react';
import { fetchDailyData } from './../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({data, country}) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect( () => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length ?
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
    const barChart = (
        data.confirmed ?
        (
            <Bar
                data = {{
                    labels: ['Infected', 'Recoverd', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['#ff5d6c','#8cba51','#35495e'],
                        data: [data.confirmed.value, data.recovered.value, data.deaths.value]
                    }],
                }}
                options={{
                    legend: {display: false},
                    title: {display: true, text: 'Current state in ' + country}
                }}
            />
        ) : null
    );

    return (
        <div className={styles.container}>
            {country? barChart : lineChart}
        </div>
    )
}

export default Chart;