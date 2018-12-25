import React, { Component } from 'react';
import './NavList.scss';
import NavItem from '../nav-list-item/NavListItem';
class NavList extends Component {
    state = {
        navMenu: [{
            title: 'Home',
            href: '/home',
            id: 1
        }, {
            title: 'Setting',
            href: '/setting',
            id: 2
        }, {
            title: 'About',
            href: '/about',
            id: 3
        }],
        toggleClass: false,
        displayNone: false
    }
    render() {
        return (<nav className="nav">
            <div className={(this.state.toggleClass ? 'change' : '') + ' container'} onClick={this.toggle}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>

            <ul className={(this.state.displayNone === true ? '' : 'nope') + ' menu'}>
                {this.state.navMenu.map(item => <NavItem key={item.id} item={item}  />)}
            </ul>
        </nav>);
    }
    toggle = () => {
        this.setState({
            toggleClass: !this.state.toggleClass,
            displayNone: !this.state.displayNone
        });
    }

    getId = (item) => {
        console.log(this.state.navMenu.filter(items => items.id === item.id));
    }
}

export default NavList;