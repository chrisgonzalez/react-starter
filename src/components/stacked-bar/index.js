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
        const elemHeight = parseInt(window.getComputedStyle(this.props.elem).height);
        const elemWidth = parseInt(window.getComputedStyle(this.props.elem).width);

        const x = d3.scale.ordinal().rangeRoundBands([0, elemWidth], .1);

        const maxValue = d3.max(this.props.data.map((d) => (d['drugs'] + d['no drugs'])));
        const y = d3.scale.linear().domain([0, maxValue]).range([elemHeight, 0])
        const dots = d3.select(this.props.elem).select('.dots').selectAll('.dot').data(this.props.data);

        dots.enter()
            .append('div')
            .attr('class', 'dot');

        dots.each(function(d) {
            d3.select(this)
              .html((d) => (d))
              .style('width', (d) => (circleScale(d) + 'px'))
              .style('height', (d) => (circleScale(d) + 'px'))
              .style('line-height', (d) => (circleScale(d) + 'px'))
        });

        dots.exit().remove('.dot');
    }

    render() {
        console.log(this.props.data);
        this.renderStackedBar();

        return (
            <svg className="stacked-bar"></svg>
        )
    }
}

StackedBar.propTypes = {
    data: PropTypes.array,
    elem: PropTypes.object
}
