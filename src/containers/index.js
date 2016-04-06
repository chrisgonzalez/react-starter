import React, { PropTypes, Component } from 'react';
import { render } from 'react-dom';
import StackedBar from 'stacked-bar';
import XAxis from 'x-axis';
import YAxis from 'y-axis';
import d3 from 'd3';

require('./visualization.scss');

class App extends Component {

    render() {
        return (
            <svg className="visualization">
                <StackedBar
                    {...this.props}
                    keyMapping={['drugs', 'no drugs']}
                />
                <XAxis
                    {...this.props}
                    labelKey="year"
                />
                <YAxis
                    {...this.props}
                    keyMapping={['drugs', 'no drugs']}
                    labelKey="year"
                />
            </svg>
        )
    }
}

const createViz = (data) => {
    const elem = document.querySelector('#visualization');
    const visualization = (<App data={data} elem={elem} gutter={[50, 20, 50, 60]} />);
    render(visualization, elem);
}

d3.csv("lethal-injection-executions.csv", function(error, data) {
    createViz(data);
});
