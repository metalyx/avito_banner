import React, { Component } from 'react';
import ExportJson from './ExportJson';
import { connect } from 'react-redux';
import domtoimage from 'dom-to-image';

const mapStateToProps = state => {
    return{
        src: state.banner.src,
        text: state.banner.text,
        color: state.banner.color,
        link: state.banner.link
    };
}

class ExportJsonContainer extends Component {
    constructor(props) {
        super(props);
        this.copyJson = this.copyJson.bind(this);
        this.getHtml = this.getHtml.bind(this);
        this.onClickButton = this.onClickButton.bind(this);
        this.downloadPng = this.downloadPng.bind(this);
    }

    nodeToString ( node ) {
        var tmpNode = document.createElement( "div" );
        tmpNode.appendChild( node.cloneNode( true ) );
        var str = tmpNode.innerHTML;
        tmpNode = node = null; // prevent memory leaks in IE
        return str;
    }

    copyHtml = () =>  {
        const q = document.querySelector('.storie');
        navigator.clipboard.writeText(this.nodeToString(q));
    }

    getHtml = () => {
        const q = document.querySelector('.storie');
        return this.nodeToString(q);
    }

    copyJson = () => {
        const val = JSON.stringify(this.props);
        navigator.clipboard.writeText(val);
    }

    downloadURI(uri, name) {
        const link = document.createElement("a");
        link.href = uri;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
    }


    downloadPng = () => {
      var q = document.getElementById('storie');
        domtoimage.toPng(q)
            .then((dataUrl) => {
                var img = new Image();
                img.src = dataUrl;
                this.downloadURI(dataUrl, "lol.png");
                document.body.appendChild(img);
            }, this)
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
    }

    onClickButton = () => {
        this.downloadPng();
    }

    render () {
        return (
            <div>
            <div className="row">
                <div className="col-2 mr-1">
                    <button 
                    className="btn btn-secondary"
                    onClick={this.copyHtml}>
                        Скопировать html-разметку баннера
                    </button>   
                </div>
                <div className="col-2 mr-1">
                    <button 
                    className="btn btn-secondary"
                    onClick={this.copyJson}>
                        Скопировать JSON
                    </button>   
                </div>
            </div>
            <div className="col-12 mr-1" id="lol">
                    {/* <a href={this.downloadPng}>Download</a> */}
                    <button
                    onClick={this.downloadPng}>
                        Скачать баннер как png
                    </button>
                </div>
           </div>
            
        );
    }
}

export default connect(mapStateToProps)(ExportJsonContainer);