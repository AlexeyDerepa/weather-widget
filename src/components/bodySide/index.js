import React, { Component, Fragment } from 'react';
import TabsList from './TabList';
import Details from './Details';
import { connect } from 'react-redux';
import { deleteTab, chooseTab, getInitialData } from '../../actions/tabs';

class BodySide extends Component {

    componentDidMount(){
        this.props.getInitialData();
    }
    handlerChooseTab = (tab) => {
        this.props.chooseTab(tab);
    }

    handlerDeleteTab = (tab) => {
        this.props.deleteTab(tab);
    }

    render() {
        return (
            <Fragment>
                <TabsList
                    handlerChooseTab={this.handlerChooseTab}
                    handlerDeleteTab={this.handlerDeleteTab}
                    tabsList={this.props.tabsList}
                    currentActiveTab={this.props.currentActiveTab}
                />
                {
                    this.props.details
                        ? (
                            <Details details={this.props.details} />
                        ) : (
                            null
                        )
                }
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