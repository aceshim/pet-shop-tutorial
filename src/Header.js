import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-8 col-sm-push-2">
                    <h1 className="text-center">Pete's Pet Shop</h1>
                    <hr />
                    <br />
                </div>
            </div>
        )
    }
}

export default Header;