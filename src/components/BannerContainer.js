import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBannerSrc, setBannerText, setBannerColor, setBannerLink } from '../redux/banner/action'
import Banner from './BannerComponent';
import CreateForm from './CreateFormComponent';


const mapStateToProps = state => {
    return{
        src: state.banner.src,
        text: state.banner.text,
        color: state.banner.color,
        link: state.banner.link
    };
}

class BannerContainer extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <Banner
                src={this.props.src} 
                text={this.props.text} 
                color={this.props.color} 
                link={this.props.link}
            />
        );
    }


}

export default connect(mapStateToProps)(BannerContainer);