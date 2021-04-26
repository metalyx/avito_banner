import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBannerSrc, setBannerText, setBannerColor, setBannerLink } from '../redux/banner/action'
import CreateForm from './CreateFormComponent';


const mapStateToProps = state => {
    return{
        src: state.banner.src,
        text: state.banner.text,
        color: state.banner.color,
        link: state.banner.link
    };
}

const mapDispatchToProps =  {
    setBannerSrc,
    setBannerText,
    setBannerColor,
    setBannerLink
}

class CreateFormContainer extends Component {


    render () {
    
        return (
            
            <CreateForm 
            src={this.props.src} 
            text={this.props.text} 
            color={this.props.color} 
            link={this.props.link}
            setBannerSrc={this.props.setBannerSrc}
            setBannerText={this.props.setBannerText}
            setBannerColor={this.props.setBannerColor}
            setBannerLink={this.props.setBannerLink}
            />
        );
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CreateFormContainer);