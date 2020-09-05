import React from "react";

class AddTransition extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row transition-padding">
                    <div className="col align-mid transition-font">
                            <h3>Add Transition</h3>
                    </div>
                </div>
                <div className="row transition-padding">
                    <div className="col-12">
                        <input type="text" class="full-width align-mid transition-font transition-padding transition-input" placeholder="From"/>
                    </div>
                </div>
                <div className="row transition-padding">
                    <div className="col-12">
                        <input type="text" class="full-width align-mid transition-font transition-padding transition-input" placeholder="To"/>
                    </div>
                </div>
                <div className="row transition-padding">
                    <div className="col-12">
                        <input type="text" class="full-width align-mid transition-font transition-padding transition-input" placeholder="Amount"/>
                    </div>
                </div> 
                <div className='row transition-padding'>
                    <div className="col-2"></div>
                    <div className="col-8">
                    <button type="button" class="btn btn-warning full-width align-mid transition-font transition-padding">Pay Now</button>
                    </div>
                    <div className="col-2"></div>
                </div>              
            </div>
        )
    }
}

export default AddTransition;