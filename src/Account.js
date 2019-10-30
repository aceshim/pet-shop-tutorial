import React, { Component } from 'react';
import { drizzleConnect } from 'drizzle-react'

class Account extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div>
                {this.props.account}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state,
        account: state.accounts[0],
    }
}

export default Account = drizzleConnect(Account, mapStateToProps);