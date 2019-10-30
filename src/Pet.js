import React, { Component } from 'react';
import { drizzleConnect } from 'drizzle-react'

class Account extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div id="petTemplate">
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="panel panel-default panel-pet">
                        <div className="panel-heading">
                            <h3 className="panel-title">Scrappy</h3>
                        </div>
                        <div className="panel-body">
                            <img alt="140x140" data-src="holder.js/140x140" className="img-rounded img-center" style={{width: "100%"}} src="https://animalso.com/wp-content/uploads/2017/01/Golden-Retriever_6.jpg" data-holder-rendered="true" />
                            <br /><br />
                            <strong>Breed</strong>: <span className="pet-breed">Golden Retriever</span><br />
                            <strong>Age</strong>: <span className="pet-age">3</span><br />
                            <strong>Location</strong>: <span className="pet-location">Warren, MI</span><br /><br />
                            <button className="btn btn-default btn-adopt" type="button" data-id="0">Adopt</button>
                        </div>
                    </div>
                </div>
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