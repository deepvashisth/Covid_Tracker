import React, { Component } from 'react';



class Stats extends Component {

    constructor() {
        super();
        this.state = {
            stats :[

            ]
        }
    }

componentDidMount() {
    fetch('/api/stats')
    .then(res => res.json())
    .then(stats => this.setState({stats} , () => console.log('Stats Fetched ..',
    stats)));
}

    render() {
        return (
            <div>
                <h2>helo</h2>
            </div>
        );
    }
}

export default Stats;