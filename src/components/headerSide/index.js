import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findCity } from '../../actions/header';


class HeaderSide extends Component {
    state = {
        cityName: '',
    }

    handlerOnChange = (event) => {
        this.setState({ cityName: event.target.value });
    }
    handlerOnClick = () => {
        this.props.findCity(this.state.cityName);
        this.setState({cityName:''});
    }
    render() {
        return (
            <div className='header-container'>
                <input type='text' placeholder='enter city name' onChange={this.handlerOnChange} value={this.state.cityName} />
                <input type='button' onClick={this.handlerOnClick} value='Go' />
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