import React, { Component } from 'react';
import { drizzleConnect } from 'drizzle-react'
import PropTypes from 'prop-types'

class Pet extends Component {
    constructor(props, context) {
        super(props);
        this.state = {
            adopted: false
        }
        this.contracts = context.drizzle.contracts;
        this.dataKey = this.contracts.Adoption.methods.getAdopters.cacheCall();
    }

    handleAdopt = id => {
        console.log(id);
        const Adoption = this.contracts.Adoption;
        Adoption.methods.adopt(id).send();
    }

    render() {
        const { pet } = this.props;
        if (!(this.dataKey in this.props.Adoption.getAdopters)) {
            return (
                <span>Loading...</span>
            )
        }
        var data = this.props.Adoption.getAdopters[this.dataKey].value[pet.id];

        return (
            <div id={`pet-${pet.id}`}>
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="panel panel-default panel-pet">
                        <div className="panel-heading">
                            <h3 className="panel-title">{pet.name}</h3>
                        </div>
                        <div className="panel-body">
                            <img alt="140x140" data-src="holder.js/140x140" className="img-rounded img-center" style={{ width: "100%" }} src={pet.picture} data-holder-rendered="true" />
                            <br /><br />
                            <strong>Breed</strong>: <span className="pet-breed">{pet.breed}</span><br />
                            <strong>Age</strong>: <span className="pet-age">{pet.age}</span><br />
                            <strong>Location</strong>: <span className="pet-location">{pet.location}</span><br />
                            <strong>Adopter</strong>: <span className="pet-location">{
                                data !== '0x0000000000000000000000000000000000000000' ? data: null
                                }</span><br /><br />
                            {data !== '0x0000000000000000000000000000000000000000' ?
                                <button className="btn btn-default btn-adopt" type="button" data-id={pet.id} disabled>Success</button> :
                                <button className="btn btn-default btn-adopt" type="button" data-id={pet.id} onClick={() => this.handleAdopt(pet.id)}>Adopt</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
Pet.contextTypes = {
    drizzle: PropTypes.object
}

const mapStateToProps = state => {
    return {
        state: state,
        Adoption: state.contracts.Adoption,
        account: state.accounts[0],
    }
}

export default Pet = drizzleConnect(Pet, mapStateToProps);