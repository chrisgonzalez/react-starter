import React, { PropTypes, Component } from 'react';
import d3 from 'd3';

require('./x-axis.scss');

export default class XAxis extends Component {
    constructor(props) {
        super(props);

        this.renderAxis = this.renderAxis.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.renderAxis);
        this.renderAxis();
    }

    renderAxis() {
        const { labelKey, gutter, data, elem } = this.props;

        const elemHeight = parseInt(window.getComputedStyle(elem).height);
        const elemWidth = parseInt(window.getComputedStyle(elem).width);

        const x = d3.scale.ordinal()
                    .domain(data.map((d, i) => (labelKey && d[labelKey] || i)))
                    .rangeRoundBands([gutter[3], elemWidth - gutter[1]], .2);

        const xAxis = d3.svg.axis()
                        .scale(x)
                        .orient("bottom")
                        .outerTickSize(1);

        if (labelKey) {
            xAxis.tickFormat((d) => (d))
        }

        const axis = d3.select(elem)
                       .select('.x-axis')
                       .attr('transform', () => (`translate(0, ${elemHeight - gutter[2]})`))
                       .call(xAxis);
    }

    render() {
        this.renderAxis();

        return (
            <g className="x-axis"></g>
        )
    }
}

XAxis.defaultProps = {
    gutter: [0, 0, 0, 0]
}

XAxis.propTypes = {
    data: PropTypes.array,
    elem: PropTypes.object,
    labelKey: PropTypes.string,
    gutter: PropTypes.array
}
