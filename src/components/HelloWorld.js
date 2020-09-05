import React from 'react';
import { connect } from 'react-redux';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount = () => {
        const user = {
            name: 'Abhishek'
        }
        this.props.setUser(user)
    }
    render() {
        console.log("userObj::: ", this.props.currentUser)
        return <div>Hello world component</div> 
    }    
}

const mapStateToProps = state => ({
    currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => ({
    setUser: userObj => {
        dispatch({type: 'SET_USER', payload: userObj})
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);