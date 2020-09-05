import React from 'react';
import { connect } from 'react-redux';
import { setUser } from '../actions/actions';

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
        dispatch(setUser(userObj))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);