import React, { Component } from 'react';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

class Cards extends Component {
    render() {
        console.log(this.props.data)
        return (
            <div className={styles.container}>
                <div className={cx(styles.card, styles.confirmed)}>
                    <div className={styles.card_body}>
                        <div className={styles.card_title}>Infected</div>
                        <div className={styles.card_number}>
                            <CountUp
                                start={0}
                                end={this.props.data.confirmed ? this.props.data.confirmed.value : 0}
                                duration={2.75}
                                separator=",">
                            </CountUp>
                        </div>
                        <div className={styles.card_date}>{this.props.data.lastUpdate? (new Date(this.props.data.lastUpdate)).toDateString() : 0}</div>
                        <div className={styles.card_description}>Number of active cases of COVID-19</div>
                    </div>
                </div>
                <div className={cx(styles.card, styles.recovered)}>
                    <div className={styles.card_body}>
                        <div className={styles.card_title}>Recovered</div>
                        <div className={styles.card_number}>
                            <CountUp
                                start={0}
                                end={this.props.data.recovered ? this.props.data.recovered.value : 0}
                                duration={2.75}
                                separator=",">
                            </CountUp>
                        </div>
                        <div className={styles.card_date}>{this.props.data.lastUpdate? (new Date(this.props.data.lastUpdate)).toDateString() : 0}</div>
                        <div className={styles.card_description}>Number of recovered from of COVID-19</div>
                    </div>
                </div>
                <div className={cx(styles.card, styles.deaths)}>
                    <div className={styles.card_body}>
                        <div className={styles.card_title}>Deaths</div>
                        <div className={styles.card_number}>
                            <CountUp
                                start={0}
                                end={this.props.data.deaths ? this.props.data.deaths.value : 0}
                                duration={2.75}
                                separator=",">
                            </CountUp>
                        </div>
                        <div className={styles.card_date}>{this.props.data.lastUpdate? (new Date(this.props.data.lastUpdate)).toDateString() : 0}</div>
                        <div className={styles.card_description}>Number of deaths caused by COVID-19</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;