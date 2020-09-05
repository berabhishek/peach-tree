import React from 'react';
import $ from "jquery";
class TableView extends React.Component {
    constructor(props) {
        super(props)
    }
    filterTable(event) {
        let value = $(event.target).val().toLowerCase();
        let element = $("#datatable tr");
        element.filter((param) => {
            if (param > 0 ){
                $(element[param]).toggle($(element[param]).text().toLowerCase().indexOf(value) > -1);
            }
        });
    }
    render() {
        const headers=this.props.headers ? this.props.headers : [];
        const body=this.props.data ? this.props.data: [];
        const getElement = function(arr) {
            let elements = [];
            arr.forEach(element => {
               elements.push(<td>{element}</td>) 
            });
            return elements;
        }
        
        return (
            <div>
                <input type="text" onKeyUp={this.filterTable} placeholder="Search Table"/>
                <table id="datatable" className="table">
                    <thead>
                        <tr>
                            {
                                headers.map(value => {
                                    return <th scope="col">{value}</th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            body.map((row, iterator) => {
                                return <tr key={iterator}>
                                    {getElement(row)}
                                </tr>
                            }) 
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TableView;