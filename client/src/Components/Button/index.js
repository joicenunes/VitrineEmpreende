import React from 'react';
import colorsMap from '../../Helper/colors';

export default function Button(props) {
    const setButtonStyle = () => {
        let style = {};

        if (props.block) {
            style.width = '100%';
            style.borderRadius = '8px';
        }
        if (props.outline) {
            style.backgroundColor = 'transparent';
            style.borderStyle = 'solid';
            style.borderWidth = '1px';
            style.borderRadius = '8px';

            if (props.color) {
                style.color = colorsMap[props.color];
                style.borderColor = colorsMap[props.color];
            }
        } else {
            if (props.color) {
                style.color = '#fff';
                style.backgroundColor = colorsMap[props.color];
            }
        }

        return style;
    }
    return ( <
        div className = 'form-button' >
        <
        button className = 'button'
        style = { setButtonStyle() }
        onClick = { props.onClickButton }
        type = 'submit'
        disabled = { props.disabled } > { props.children } <
        /button>  <
        /div>
    );
}