import React, { Component } from 'react';
import './ListItems.scss';

class ListItems extends Component {

    constructor(props) {
        super(props);
        // Called only once
        // Cannot use setState({}), becuase component is not yet mounted yet.
        // cannot set this.prop, we need to pass it as paramter in construcor to use it.
        // Contructor is called once, is better place to initialize state props using props
        this.state = {
            title: this.props.title
        }

    }

    componentDidMount() {
        //Use to call http requests as component is mounted to DOM

    }

    componentDidUpdate(prevProps,prevState){
    }

    componentWillUnmount(){
        // clear timers, subscriptions etc before unmounting component
        console.log('Component deleted');
    }

    state = {}

    confirmDelete = (item) => {
        let confirm = window.confirm(`Do you want to remove: ${item.name}?`);
        if (confirm) {
            this.props.onDelete(item.id)
        }
    }
    render() {
        const { items } = this.props;
        return (
            <ul>
                {items.map(item => <li key={item.id} onClick={() => this.confirmDelete(item)}>{item.name}</li>)}
            </ul>
        );
    }
}

export default ListItems;