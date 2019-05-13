import React from 'react';
import { connect } from 'react-redux';

const increment = () => ({ type: 'increment' });
const decrement = () => ({ type: 'decrement' });

class Test extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <button className='increment' onClick={this.props.increment}>Increment</button>
                Current Count: {this.props.count}
                <button className='decrement' onClick={() => this.props.decrement()}>Decrement</button>                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        count: state.count
    }
}

export default connect(mapStateToProps, { increment, decrement })(Test)