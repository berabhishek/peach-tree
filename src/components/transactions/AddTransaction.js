import React from "react";
import { Form } from "react-bootstrap";

class AddTransition extends React.Component {
    constructor(props) {
        super(props);
    }

    addTransaction() {
        let transactionObj = [];
        let from = document.getElementById("from");
        let to = document.getElementById("to");
        let paymentType = document.getElementById("paymentType");
        let amount = document.getElementById("amount");
        if (from.value !== "" && to.value !== "" && amount.value !== "") {
            transactionObj.push(new Date());
            transactionObj.push(from.value)
            transactionObj.push(to.value)
            transactionObj.push(amount.value)
            from.value = "";
            to.value = "";
            amount.value = "";
            this.props.addTransaction(transactionObj);
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row transition-padding">
                    <div className="col align-mid transition-font">
                            <h3>Add Transition</h3>
                    </div>
                </div>
                <form>
                <div className="row transition-padding">
                    <div className="col-12">
                        <input type="text" id="from" class="full-width align-mid transition-font transition-padding transition-input" placeholder="From" required/>
                    </div>
                </div>
                <div className="row transition-padding">
                    <div className="col-12">
                        <input type="text" id="to" class="full-width align-mid transition-font transition-padding transition-input" placeholder="To" required/>
                    </div>
                </div>
                <div className="row transition-padding">
                    <div className="col-12">
                        <input type="number" id="amount" class="full-width align-mid transition-font transition-padding transition-input" placeholder="Amount" required/>
                    </div>
                </div> 
                <div className='row transition-padding'>
                    <div className="col-2"></div>
                    <div className="col-8">
                    <input onClick={this.addTransaction.bind(this)} type="submit" class="btn btn-warning full-width align-mid transition-font transition-padding" value="Pay Now"/>
                    </div>
                    <div className="col-2"></div>
                </div>              
                
                </form>
            </div>
        )
    }
}

export default AddTransition;