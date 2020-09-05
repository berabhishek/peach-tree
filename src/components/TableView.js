import React from 'react';

class TableView extends React.Component {
    constructor(props) {
        super(props)
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
                <table className="table">
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
                            body.map(row => {
                                return <tr>
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