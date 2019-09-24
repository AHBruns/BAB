import React from 'react'
import {oliveDrab} from  '../colors'
import Requests from './cards/Requests'
import OpportunityMonitor from './cards/OpportunityMonitor'

class Content extends React.Component {
    render() {
        return (
            <div style={{
                paddingTop: "100px",
                minHeight: "calc(100% - 100px)",
                backgroundColor: oliveDrab
            }} >
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "20px"
                }} >
                    <Requests />
                    <div style={{flexBasis: "20px"}}/>
                    <OpportunityMonitor />
                </div>
            </div>
        );
    }
}

export default Content