import React, { PropTypes, Component } from 'react';
import d3 from 'd3';

require('./stacked-bar.scss');

export default class StackedBar extends Component {
    constructor(props) {
        super(props);

        this.renderStackedBar = this.renderStackedBar.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.renderStackedBar);
        this.renderStackedBar();
    }

    renderStackedBar() {
        const { keyMapping, gutter, data, elem } = this.props;

        const elemHeight = parseInt(window.getComputedStyle(elem).height);
        const elemWidth = parseInt(window.getComputedStyle(elem).width);

        const maxValue = d3.max(data.map((d) => (
            keyMapping.reduce((prev, key) => (
                prev + +d[key]
            ), 0)
        )));

        const x = d3.scale.ordinal()
                    .domain(data.map((d, i) => (i)))
                    .rangeRoundBands([gutter[3], elemWidth - gutter[1]], .2);

        const y = d3.scale.linear()
                    .domain([0, maxValue])
                    .rangeRound([elemHeight - gutter[2], gutter[0]]);

        const height = d3.scale.linear()
                         .domain([0, maxValue])
                         .rangeRound([0, elemHeight - (gutter[2] + gutter[0])]);

        const bars = d3.select(elem).select('.stacked-bar').selectAll('.dot').data(data);

        bars.enter()
            .append('g')
            .attr('class', 'bar-group')
            .each(function(d) {
                const barGroup = d3.select(this);

                keyMapping.forEach((key) => {
                    barGroup.append('rect')
                            .attr('data-key', key)
                });
            });

        bars.attr('transform', (d, i) => {
                const xPos = x(i);
                const yPos = y(keyMapping.reduce((value, key) => (value + +d[key]), 0));
                return `translate(${xPos}, ${yPos})`;
            })
            .each(function(d, i) {
                const barGroup = d3.select(this);

                keyMapping.forEach((key, i) => {
                    let yVal = 0;

                    for (let j = 0; j < i; j++) {
                        yVal += height(+d[keyMapping[j]])
                    }

                    barGroup.select(`[data-key="${key}"]`)
                            .attr('width', () => (x.rangeBand()))
                            .attr('height', (d) => (height(+d[key])))
                            .attr('transform', () => (`translate(0, ${yVal})`));
                });
            });

        bars.exit().remove('.bar-group');
    }

    render() {
        this.renderStackedBar();

        return (
            <g className="stacked-bar"></g>
        )
    }
}

StackedBar.defaultProps = {
    gutter: [0, 0, 0, 0]
}

StackedBar.propTypes = {
    data: PropTypes.array,
    elem: PropTypes.object,
    keyMapping: PropTypes.array,
    gutter: PropTypes.array
}
