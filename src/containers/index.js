import React, { PropTypes, Component } from 'react';
import { render } from 'react-dom';
import StackedBar from 'stacked-bar';
import d3 from 'd3';

require('./visualization.scss');

class App extends Component {

    render() {
        return (
            <div className="visualization">
                <StackedBar {...this.props} />
            </div>
        )
    }
}

const createViz = (data) => {
    const elem = document.querySelector('#visualization');
    const visualization = (<App data={data} elem={elem} />);
    render(visualization, elem);
}

d3.csv("lethal-injection-executions.csv", function(error, data) {
    createViz(data);
});
