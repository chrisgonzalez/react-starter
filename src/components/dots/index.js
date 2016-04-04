import React, { PropTypes, Component } from 'react';
import d3 from 'd3';

require('./dots.scss');

export default class Dots extends Component {
    constructor(props) {
        super(props);

        this.renderDots = this.renderDots.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.renderDots);
        this.renderDots();
    }

    renderDots() {
        const elemHeight = parseInt(window.getComputedStyle(this.props.elem).height);
        const elemWidth = parseInt(window.getComputedStyle(this.props.elem).width);

        const dots = d3.select(this.props.elem).select('.dots').selectAll('.dot').data(this.props.data);

        dots.enter()
            .append('div')
            .attr('class', 'dot');

        dots.each(function(d) {
            d3.select(this).html((d) => (d));
        });

        dots.exit().remove('.dot');
    }

    render() {
        this.renderDots();

        return (
            <div className="dots"></div>
        )
    }
}

Dots.propTypes = {
    data: PropTypes.array,
    elem: PropTypes.object
}
