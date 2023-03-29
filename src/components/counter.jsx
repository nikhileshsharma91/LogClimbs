import React, { Component } from 'react';

class Counter extends Component {
state = {
    count: this.props.value
};

handleIncrement = () =>  {
    this.setState({ count: this.state.count + 1});
}

    render() { 
        console.log("props", this.props);
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={this.handleIncrement} 
                    className='btn btn-secondary btn-sm'>
                        Increment
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = 'badge ';
        classes += this.state.count === 0 ? 'text-bg-warning' : 'text-bg-primary';
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}


 
export default Counter;