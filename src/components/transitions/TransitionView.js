import React from 'react';
import AddTransition from './AddTransition';

class TransitionView extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <AddTransition />
                    </div>
                    <div className="col-8">
                        Pending
                    </div>
                </div>
            </div>
        );
    }
}

export default TransitionView;