import React from 'react'

class OpportunityLine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detailsOpen: false
        }
    }

    render() {
        return(
            <div style={{
                display: "flex",
                marginTop: "5px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "10px",
                alignItems: "stretch",
                fontFamily: "'Work Sans', sans-serif",
                borderRadius: "3px",
                justifyContent: "stretch",
                flexWrap: "wrap",
                minHeight: "40px"
            }} >
                <h5 style={{
                    margin: "0",
                    marginRight: "10px",
                    flexBasis: "70px",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    padding: "10px",
                    borderRadius: "3px",
                    textAlign: "center",
                    border: "1px solid black",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }} >
                    {(this.props.opportunity.ROI * 100).toFixed(2)} %
                </h5>
                {this.props.opportunity.cycle.map(
                    market => {
                        return (
                            <React.Fragment>
                                <h5
                                    onClick={() => {
                                        window.open(`https://coinexchange.io/market/${market.assetTicker}/${market.baseTicker}`);
                                    }}
                                    style={{
                                        cursor: "pointer",
                                        margin: "0",
                                        padding: "10px",
                                        border: "1px solid black",
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                        border: "1px solid black",
                                        color: "white",
                                        borderRadius: "3px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                >
                                    {market.direction.toUpperCase()}&nbsp;[{market.assetTicker}&nbsp;/&nbsp;{market.baseTicker}]
                                    {
                                        this.state.detailsOpen
                                        && ` | ${market.amount} @ ${market.worstPrice} (Worst) & ${market.weightedPrice}`
                                    }
                                </h5>
                                <hr style={{
                                    flexBasis: "10px",
                                    margin: "0",
                                    padding: "0",
                                    alignSelf: "center",
                                    border: "0.5px solid black"
                                }} />
                            </React.Fragment>
                        );
                    }
                )}
                <h5
                    onClick={() => {
                        this.setState({detailsOpen: !this.state.detailsOpen});
                    }}
                    style={{
                        cursor: "pointer",
                        margin: "0",
                        marginRight: "10px",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        padding: "10px",
                        borderRadius: "3px",
                        textAlign: "center",
                        border: "1px solid black",
                        color: "white"
                    }}
                >
                    {this.state.detailsOpen ? "collapse": "expand"}
                </h5>
            </div>
        );
    }
}

export default OpportunityLine