import React, { Component } from 'react';

class ExportJson extends Component {
    constructor(props) {
        super(props);
    }

    nodeToString ( node ) {
        var tmpNode = document.createElement( "div" );
        tmpNode.appendChild( node.cloneNode( true ) );
        var str = tmpNode.innerHTML;
        tmpNode = node = null; // prevent memory leaks in IE
        return str;
    }

    copyJson () {
        const q = document.querySelector('.storie');
        console.log(this.nodeToString(q));
    }

    render () {
        this.copyJson();
        console.log("lodfsdfsdfsfsdsf")
        return (
            <div />
        );
            
        
    }

}

export default ExportJson;