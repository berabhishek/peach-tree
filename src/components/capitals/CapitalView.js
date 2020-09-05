import React from 'react';
import AddCapital from './AddCapital';
import TableView from '../TableView';
import { connect } from 'react-redux';
import {addCapital}  from "../../actions/actions";

class CapitalView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            capital: []
        };

    }
    getCapital() {
        let capital = [];
        let date = new Date();
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        this.props.capital.forEach(t => {
            let sub_capital = t.slice();
            let formatted_date = "";
            if(sub_capital[0].getTime() > (date.getTime() - (6 * 24 * 60 * 60 * 1000))) {
                formatted_date = days[sub_capital[0].getDay()];
            } else if(sub_capital[0].getFullYear() === date.getFullYear()){
                formatted_date =  sub_capital[0].getDate()+"/"+sub_capital[0].getMonth();
            } else {
                formatted_date =  sub_capital[0].getDate()+"/"+sub_capital[0].getMonth()+"/"+sub_capital[0].getFullYear();
            }
            formatted_date += " "+sub_capital[0].getHours()+":"+sub_capital[0].getMinutes();
            sub_capital[0] = formatted_date;
            capital.push(sub_capital);
        });
        return capital;

    }
    componentDidMount() {
        
    }
    render() {
        const headers = ["Date", "Document", "Preview", "Amount", "Status"]
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <AddCapital addCapital={this.props.addCapital}/>
                    </div>
                    <div className="col-8 view-transaction">
                        <TableView headers={headers}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    capital: state.capital,
    count: state.count
})

const mapDispatchToProps = dispatch => ({
    addCapital: capitalObj => {
        dispatch(addCapital(capitalObj))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CapitalView);