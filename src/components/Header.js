import React from 'react'
import {sage, darkScarlet} from '../colors'

class Header extends React.Component {
    render() {
        return (
            <div style={{
                height: "100px",
                backgroundColor: sage,
                position: "fixed",
                top: "0",
                left: "0",
                "right": "0",
                "display": "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 3px 4px 0 rgba(0, 0, 0, .1), 0 5px 7px 0 rgba(0, 0, 0, .25), inset 0 -1px 2px rgba(0, 0, 0, .15)"
            }} >
                <h1>
                    <a href="#" style={{
                        textDecoration: "none",
                        color: "black",
                        fontFamily: "'Mansalva', cursive",
                        fontSize: "120%"
                    }} >
                        BAB &nbsp; Dashboard
                    </a>
                </h1>
            </div>
        );
    }
}

export default Header