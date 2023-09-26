import React from "react";
import PropTypes from "prop-types";
import Star from "./Star";
import { customAlphabet } from 'nanoid'

export default function Stars({count}) {
    const nanoid = customAlphabet('1234567890abcdef', 10);

    if (count < 1 || count > 5 || !Number.isInteger(count)) { //Number.isInteger() Статический метод определяет, является ли переданное значение целым числом.
        return null;
    }

    const stars = [];
    for (let i = 0; i < count; i++) {
        stars.push(<Star key={nanoid()} />)
    }
    // console.log(stars)
    return (
        <ul class="card-body-stars u-clearfix">
            {stars}
        </ul>
    );
}

    Stars.defaultProps = {
        count: 0
    }

    Stars.propTypes = {
        count: PropTypes.number,
    }