import React, { Component } from 'react';
class NavListItem extends Component {
    state = {
        items: [
        ]
    }
    render() {
        let { item } = this.props;
        return (<li key={item.id}>
            <a href={item.href} onClick={() => this.getId(item)}>{item.title}</a>
        </li>);
    }
}

export default NavListItem;