import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';

class Banner extends Component {
    constructor(props) {
        super(props);


       this.renderImg = this.renderImg.bind(this);
       
    }
    

    renderImg () {
            return (
                <div key={this.props.id} id="storie" className="storie" style={{background: this.props.color}}>
                    <img src={this.props.src} /> 
                    <span>{this.props.text}</span>
                </div>
            );
    }
    
    render () {
    
        return (
            <div className="flex">
                <div className="col-12 col-md-10 m-5 banner">
                    <div className="row">
                        <div className="col-12">
                            {this.renderImg()}
                        </div>
                    </div>
                    
                </div>
            </div>
            
            
            
        );
        
    }


}


export default Banner;