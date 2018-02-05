import React, { Component, Fragment } from 'react';
import TabsList from './TabList';
import Details from './Details';
import { connect } from 'react-redux';
import { deleteTab, chooseTab, getInitialData } from '../../actions/tabs';
import '../../assets/styles/tabs.css';
import '../../assets/styles/details.css';

class BodySide extends Component {

    componentDidMount() {
        this.props.getInitialData();
    }
    handlerChooseTab(tab){
        this.props.chooseTab(tab);
    }

    handlerDeleteTab(tab){
        this.props.deleteTab(tab);
    }

    render() {
        return (
            <Fragment>
                <div className="tabs-list-container">
                    <TabsList
                        handlerChooseTab={this.handlerChooseTab.bind(this)}
                        handlerDeleteTab={this.handlerDeleteTab.bind(this)}
                        tabsList={this.props.tabsList}
                        currentActiveTab={this.props.currentActiveTab}
                    />
                </div>
                <div className='details-container'>
                    {
                        this.props.details
                            ? (
                                <Details details={this.props.details} />
                            ) : (
                                null
                            )
                    }
                </div>
            </Fragment>
        );
    }
}



const mapStateToProps = (state) => ({
    tabsList: state.tabsReducer.tabsList,
    currentActiveTab: state.tabsReducer.currentActiveTab,
    details: state.tabsReducer.details,
});
const mapDispatchToProps = (dispatch) => ({
    deleteTab: (tab) => dispatch(deleteTab(tab)),
    chooseTab: (tab) => dispatch(chooseTab(tab)),
    getInitialData: (tab) => dispatch(getInitialData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BodySide);