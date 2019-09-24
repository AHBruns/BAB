import React from 'react'
import {sage, ochre, darkScarlet} from  '../../colors'
import OpportunityLine from '../OpportunityLine';

class OpportunityMonitor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detailsOpen: false,
            opportunities: [
                {
                    ROI: 1.3,
                    cycle: [
                        {
                            direction: "buy",
                            baseTicker: "BTC",
                            assetTicker: "ETH",
                            amount: 0.23405678,
                            worstPrice: 0.11241245,
                            weightedPrice: 0.12304560
                        },
                        {
                            direction: "buy",
                            baseTicker: "ETH",
                            assetTicker: "ROX",
                            amount: 0.23405678,
                            worstPrice: 0.11241245,
                            weightedPrice: 0.12304560
                        },
                        {
                            direction: "sell",
                            baseTicker: "BTC",
                            assetTicker: "ROX",
                            amount: 0.23405678,
                            worstPrice: 0.11241245,
                            weightedPrice: 0.12304560
                        }
                    ],
                    timestamp: 1569246291
                },
                {
                    ROI: 1.3,
                    cycle: [
                        {
                            direction: "buy",
                            baseTicker: "BTC",
                            assetTicker: "ETH",
                            amount: 0.23405678,
                            worstPrice: 0.11241245,
                            weightedPrice: 0.12304560
                        },
                        {
                            direction: "buy",
                            baseTicker: "ETH",
                            assetTicker: "ROX",
                            amount: 0.23405678,
                            worstPrice: 0.11241245,
                            weightedPrice: 0.12304560
                        },
                        {
                            direction: "sell",
                            baseTicker: "BTC",
                            assetTicker: "ROX",
                            amount: 0.23405678,
                            worstPrice: 0.11241245,
                            weightedPrice: 0.12304560
                        }
                    ],
                    timestamp: 1569246291
                },
            ]
        }
    }

    render() {
        return (
            <div style={{
                backgroundColor: sage,
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
                    Opportunity Monitor
                </h2>
                <hr style={{
                    border: "solid black",
                    borderWidth: "1px 0 1px 0 ",
                    width: "100%",
                    margin: "0"
                }} /> 
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    // "alignItems": "flex-start"
                }} >
                    {
                        this.state.opportunities.map(
                            opportunity => <OpportunityLine opportunity={opportunity} />
                        )
                    }
                </div>
            </div>
        );
    }
}

export default OpportunityMonitor