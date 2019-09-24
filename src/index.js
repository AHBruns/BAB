import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Content from './components/Content'

class Index extends React.Component {
    render() {
        return(
            <React.Fragment>
                <a name=""></a>
                <Header />
                <Content />
            </React.Fragment>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById("root-id-for-react"));