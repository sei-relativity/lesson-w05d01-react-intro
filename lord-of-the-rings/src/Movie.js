import React from 'react';
 import Info from './info';
export default class Movie extends React.Component {
    render() {
        // const movie1 = this.props.movie1.map(function (msg, index) {
        //    return <Info key = {index}message = {msg}/> 
        // });
        // const movie2 = this.props.movie2.map(function (msg, index) {
        //     return <Info key = {index}message = {msg}/> 
        // });
        // const movie3 = this.props.movie3.map(function (msg, index) {
        //     return <Info key = {index}message = {msg}/> 
        // });
        const movie1 = < Info message = {this.props.movie1[1] + 'h ' + this.props.movie1[2] + ' min'}/>;
        const movie2 = <Info message = {this.props.movie2[1] + 'h ' + this.props.movie2[2] + ' min'}/>;
        const movie3 = <Info message = {this.props.movie3[1] + 'h ' + this.props.movie3[2] + ' min' }/>;
        return ( 
            <div>
                 {/* <h1> The Lord of the Rings: A Trilogy </h1> 
                 <p> 4 h 37 min </p> */}
                 <center>
                         {/* <h1> The Lord of the Rings: {this.props.title}</h1>
                          <p> {this.props.hours}h {this.props.minutes}min </p> */}
                          < h1> The Lord of the Rings: {this.props.movie1[0]} </h1>
                          <p>{movie1}</p>
                          < h1> The Lord of the Rings:  {this.props.movie2[0]}</h1>
                          <p>{movie2}</p>
                          < h1> The Lord of the Rings:  {this.props.movie3[0]}</h1>
                        <p>{movie3}</p>
                 </center>
                
        </div>
        );
    }
}