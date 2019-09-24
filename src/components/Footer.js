import React from 'react'
import { sage } from '../colors';

class Footer extends React.Component {
    render() {
        return (
            <div style={{
                height: "50px",
                backgroundColor: sage,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Mansalva', cursive",
                boxShadow: "0 -3px 4px 0 rgba(0, 0, 0, .1), 0 -5px 7px 0 rgba(0, 0, 0, .25), inset 0 1px 2px rgba(0, 0, 0, .15)"
            }} >
                Alex Bruns - 2019
            </div>
        );
    }
}

export default Footer