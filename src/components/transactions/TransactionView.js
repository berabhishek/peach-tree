import React from 'react';
import AddTransition from './AddTransaction';
import TableView from '../TableView';
import { connect } from 'react-redux';
import {addTransaction}  from "../../actions/actions";

class TransactionView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transaction: []
        };

    }
    getTransaction() {
        let transaction = [];//this.props.transaction.slice();
        let date = new Date();
        let total = 0;
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        this.props.transaction.forEach(t => {
            let sub_transaction = t.slice();
            let formatted_date = "";
            if(sub_transaction[0].getTime() > (date.getTime() - (6 * 24 * 60 * 60 * 1000))) {
                formatted_date = days[sub_transaction[0].getDay()];
            } else if(sub_transaction[0].getFullYear() === date.getFullYear()){
                formatted_date =  sub_transaction[0].getDate()+"/"+sub_transaction[0].getMonth();
            } else {
                formatted_date =  sub_transaction[0].getDate()+"/"+sub_transaction[0].getMonth()+"/"+sub_transaction[0].getFullYear();
            }
            formatted_date += " "+sub_transaction[0].getHours()+":"+sub_transaction[0].getMinutes();
            sub_transaction[0] = formatted_date;
            total += Number(sub_transaction[3]);
            transaction.push(sub_transaction);
        });
        transaction.push([<b>Balance</b>, "", "", <b>{total}</b>]);
        return transaction;

    }
    componentDidMount() {
        
    }
    render() {
        const headers = ["Date", "Beneficiary Name", "Payment Type", "Amount"]
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <AddTransition addTransaction={this.props.addTransaction}/>
                    </div>
                    <div className="col-8 view-transaction">
                        <TableView headers={headers} data={this.getTransaction()}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    transaction: state.transaction,
    count_transaction: state.count_transaction
})

const mapDispatchToProps = dispatch => ({
    addTransaction: transactionObj => {
        dispatch(addTransaction(transactionObj))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TransactionView);