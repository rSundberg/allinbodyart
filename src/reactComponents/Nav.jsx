import React from 'react';
import Phone from '../images/phone.svg';
import Clock from '../images/clock.svg';
import Rx from 'rxjs';  
import '../css/Nav.css';

class Item extends React.Component {
    constructor() {
        super();
        this.state = {
            pressed: false
        };
    }

    render() {
        return (
            <div className="nav__item">
                <img className="nav__icon" src={this.props.logo} alt=""/>
            </div>
        );
    }

    componentDidMount() {
        
    }
}

class Nav extends React.Component {
    constructor() {
    super();
        this.state = { someKey: 'someValue' };
    }

    render() {
        return (
            <div className="nav">
                <Item logo={Phone}/>
                <Item logo={Phone}/>
                <Item logo={Clock}/>
            </div>
        );
    }

    componentDidMount() {
        const $items = document.querySelectorAll('.nav__item');
        const $clicks = Rx.Observable.fromEvent($items, 'click');
        $clicks.subscribe(value => console.log(value));
    }
}

export default Nav;
