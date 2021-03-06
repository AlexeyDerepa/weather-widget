import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findCity } from 'actions/header';
import 'assets/styles/header.css';

class HeaderSide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: '',
        }
    }


    handlerOnChange(event) {
        this.setState({ cityName: event.target.value });
    }
    handlerOnClick(){
        this.props.findCity(this.state.cityName);
        this.setState({ cityName: '' });
    }
    render() {
        return (
            <div className='header-container'>
                <div className='form-input'>
                    <input type='text' placeholder='enter city name' onChange={this.handlerOnChange.bind(this)} value={this.state.cityName} />
                    <input type='button' onClick={this.handlerOnClick.bind(this)} value='Go' />
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({
    findCity: (cityName) => dispatch(findCity(cityName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSide);