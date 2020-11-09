import React, { } from 'react';
// import PropTypes from 'prop-types';
import classes from './Burger.module.css';
import Ingredient from './Ingredient';

const burger = (props) => {
    let ingredients = Object.keys(props.ingredients)
        .map(key => {
            return [...Array(props.ingredients[key])]
                .map((_, i) => {
                    return <Ingredient key={key + i} type={key} />
                })
        })
        .reduce((prev, curr) => { return prev.concat(curr) }, []);

    if (ingredients.length === 0) {
        ingredients = 
        <div>
            <p>This is a sad burger :(</p>
            <p>Add some ingredients!</p>
        </div>
    }
    return (
        <div className={classes.Burger}>
            <Ingredient type="bread-top"></Ingredient>
            {ingredients}
            <Ingredient type="bread-bottom"></Ingredient>
        </div>
    )
};

export default burger;