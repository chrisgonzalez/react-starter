import React, { PropTypes, Component } from 'react';
import d3 from 'd3';

require('./y-axis.scss');

export default class YAxis extends Component {
    constructor(props) {
        super(props);

        this.renderAxis = this.renderAxis.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.renderAxis);
        this.renderAxis();
    }

    renderAxis() {
        const { keyMapping, gutter, data, elem } = this.props;

        const elemHeight = parseInt(window.getComputedStyle(elem).height);
        const elemWidth = parseInt(window.getComputedStyle(elem).width);

        const maxValue = d3.max(data.map((d) => (
            keyMapping.reduce((prev, key) => (
                prev + +d[key]
            ), 0)
        )));

        const y = d3.scale.linear()
                    .domain([0, maxValue])
                    .rangeRound([elemHeight - gutter[2], gutter[0]]);

        const yAxis = d3.svg.axis()
                        .scale(y)
                        .orient("left")
                        .outerTickSize(1);

        const axis = d3.select(elem)
                       .select('.y-axis')
                       .attr('transform', () => (`translate(${gutter[3]}, 0)`))
                       .call(yAxis);
    }

    render() {
        this.renderAxis();

        return (
            <g className="y-axis"></g>
        )
    }
}

YAxis.defaultProps = {
    gutter: [0, 0, 0, 0]
}

YAxis.propTypes = {
    data: PropTypes.array,
    elem: PropTypes.object,
    labelKey: PropTypes.string,
    gutter: PropTypes.array
}
