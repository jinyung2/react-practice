import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
        // this.context is from the static contextType
        console.log(this.context.auth);
    }

    render() {

        return (
            <React.Fragment>
                {this.context.auth ? <p>Authenticated</p> : <p>Please Log in</p>}

                <p onClick={this.props.click}> I'm a {this.props.name} and I am {this.props.age} years old.</p>
                <p> {this.props.children}</p>
                <input
                    type="text"
                    ref={this.inputElementRef}
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    onChange={this.props.changed}
                    defaultValue={this.props.name} />
            </React.Fragment>
        );
    }

}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.string,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);