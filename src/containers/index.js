import React, { PropTypes, Component } from 'react';
import { render } from 'react-dom';
import Dots from 'dots';

require('./visualization.scss');

class App extends Component {

    render() {
        return (
            <div className="visualization">
                <Dots {...this.props} />
            </div>
        )
    }
}

const elem = document.querySelector('#visualization');

const visualization = (<App data={[10, 5, 20, 43, 52, 62, 6, 86, 53, 74, 64]} elem={elem} />);

render(visualization, elem);
