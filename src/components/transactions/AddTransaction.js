import React from "react";
import { Form } from "react-bootstrap";

class AddTransition extends React.Component {
    constructor(props) {
        super(props);
    }

    addTransaction() {
        let transactionObj = [];
        let to = document.getElementById("to");
        let paymentType = document.getElementById("paymentType");
        let amount = document.getElementById("amount");
        if (to.value !== "" && amount.value !== "") {
            transactionObj.push(new Date());
            transactionObj.push(to.value)
            transactionObj.push(paymentType.value)
            transactionObj.push(amount.value)
            to.value = "";
            amount.value = "";
            this.props.addTransaction(transactionObj);
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row transaction-padding">
                    <div className="col align-mid transaction-font">
                            <h3>Add Transaction</h3>
                    </div>
                </div>
                <form>
                <div className="form-group transaction-padding">
                        <select className="form-control" id="paymentType">
                            <option value="Cheque">Cheque</option>
                            <option value="UPI">UPI</option>
                            <option value="Online">Online</option>
                        </select>
                    </div>
                <div className="row transaction-padding">
                    <div className="col-12">
                        <input type="text" id="to" className="full-width align-mid transaction-font transaction-padding transaction-input" placeholder="Beneficiary" required/>
                    </div>
                </div>
                <div className="row transaction-padding">
                    <div className="col-12">
                        <input type="number" id="amount" className="full-width align-mid transaction-font transaction-padding transaction-input" placeholder="Amount" required/>
                    </div>
                </div> 
                <div className='row transaction-padding'>
                    <div className="col-2"></div>
                    <div className="col-8">
                    <input onClick={this.addTransaction.bind(this)} type="submit" className="btn btn-warning full-width align-mid transaction-font transaction-padding" value="Pay Now"/>
                    </div>
                    <div className="col-2"></div>
                </div>              
                
                </form>
            </div>
        )
    }
}

export default AddTransition;