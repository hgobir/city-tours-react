import React, { Component } from 'react'
// setup with package.json means you dont need to navigate to Tour.js as main is mapped to that file already
// think of index.js as aggregating components for single import to  app.js
import Tour from '../Tour'
import './TourList.scss'
import {tourData} from '../../tourData'


export default class TourList extends Component {

    state = {
        tours: tourData
    };

    removeTour = (id) => {
        console.log(id);
        const {tours} = this.state;
        const sortedTours = tours.filter(tour => tour.id !== id);

        this.setState({
            tours:sortedTours
        });

    }
    render() {

        // console.log(this.state.tours);

        const {tours} = this.state;
        return (
            <section className="tourlist">
                {
                    tours.map(tour => (
                        <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/> 
                    ))
                }
            </section>
        )
    }
}
