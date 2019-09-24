import React from 'react'
import {sage, ochre, darkScarlet, frenchBistre} from  '../../colors'

class Requests extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            requests: [
                {
                    status: "success",
                    http: "POST",
                    endpoint: "/get/blah",
                    timestamp: 1569246291,
                    body: "{\"blah\": \"blah\"}"
                },
                {
                    status: "failure",
                    http: "POST",
                    endpoint: "/get/blah/",
                    timestamp: 1569246291,
                    body: "{\"blah\": \"blah\"}"
                },
                {
                    status: "success",
                    http: "POST",
                    endpoint: "/get/blah",
                    timestamp: 1569246291,
                    body: "{\"blah\": \"blah\", \"blah\": \"blah\", \"blah\": \"blah\", \"blah\": \"blah\", \"blah\": \"blah\", \"blah\": \"blah\", \"blah\": \"blah\", \"blah\": \"blah\", \"blah\": \"blah\", \"blah\": \"blah\"}"

                },
                {
                    status: "success",
                    http: "POST",
                    endpoint: "/get/blah",
                    timestamp: 1569246291,
                    body: "{\"blah\": \"blah\"}"
                },
            ]
        }
    }

    render() {
        return(
            <div style={{
                backgroundColor: ochre,
                // height: "500px",
                boxShadow: "0 3px 4px 0 rgba(0, 0, 0, .1), 0 5px 7px 0 rgba(0, 0, 0, .25), inset 0 -1px 2px rgba(0, 0, 0, .15)",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "stretch",
                padding: "20px"
            }} >
                <h2 style={{
                    alignSelf: "center",
                    margin: "0",
                    fontSize: "200%",
                    fontFamily: "'Mansalva', cursive",
                    marginBottom: "10px"
                }} >
                    Requests
                </h2>
                <hr style={{
                    border: "solid black",
                    borderWidth: "1px 0 1px 0 ",
                    width: "100%",
                    margin: "0"
                }} /> 
                <div style={{
                    display: "flex",
                    flexDirection: "column"
                }} >
                    {
                        this.state.requests.map(
                            request => {
                                return (
                                    <div style={{
                                        display: "flex",
                                        // borderBottom: "2px solid black",
                                        marginTop: "5px",
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                        // paddingLeft: "10px",
                                        // paddingRight: "10px",
                                        padding: "10px",
                                        alignItems: "center",
                                        fontFamily: "'Work Sans', sans-serif",
                                        borderRadius: "3px",
                                        flexWrap: "wrap",
                                        "alignItems": "flex-start"
                                    }} >
                                        <h5 style={{
                                            margin: "0",
                                            marginRight: "10px",
                                            flexBasis: "70px",
                                            backgroundColor: request.status == "success" ? sage : darkScarlet,
                                            padding: "10px",
                                            borderRadius: "3px",
                                            textAlign: "center",
                                            border: "1px solid " + (request.status == "success" ? "green" : "red"),
                                            color: request.status == "success" ? "green" : "red"
                                        }} >
                                            {request.status}
                                        </h5>
                                        <h5 style={{
                                            margin: "0",
                                            marginRight: "10px",
                                            backgroundColor: "rgba(0, 0, 0, 0.5",
                                            padding: "10px",
                                            borderRadius: "3px",
                                            textAlign: "center",
                                            border: "1px solid black",
                                            color: "white"
                                        }} >
                                            {request.http}
                                        </h5>
                                        <h5 style={{
                                            margin: "0",
                                            flex: "1",
                                            padding: "10px",
                                            borderRadius: "3px",
                                            border: "1px solid black",
                                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                                            color: "white", // request.status == "success" ? "green" : "red",
                                            marginRight: "10px"
                                        }} >
                                            {request.endpoint}
                                        </h5>
                                        <h5 style={{
                                            margin: "0",
                                            flex: "3",
                                            padding: "10px",
                                            borderRadius: "3px",
                                            border: "1px solid black",
                                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                                            color: "white", // request.status == "success" ? "green" : "red",
                                            marginRight: "10px"
                                        }} >
                                            {request.body}
                                        </h5>
                                        <h5 style={{
                                            margin: "0",
                                            color: request.status == "success" ? "green" : "red",
                                            padding: "10px",
                                            borderRadius: "3px",
                                            border: "1px solid black",
                                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                                            color: "white" // request.status == "success" ? "green" : "red",
                                        }} >
                                            {request.timestamp}
                                        </h5>
                                    </div>
                                );
                            }
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Requests