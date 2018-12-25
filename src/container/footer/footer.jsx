import React, { Component } from 'react';
class FooterComponent extends Component {
    state = { 
        date: ''
     }
    render() {
        let { children } = this.props;
        return ( 
            <footer>
                {children}
            </footer>
         );
    }
}
 
export default FooterComponent;