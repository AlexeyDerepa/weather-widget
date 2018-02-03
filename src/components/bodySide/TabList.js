import React from 'react';
import TabItem from './TabItem';
import  './style.css';

const TabsList = ({ tabsList, currentActiveTab, handlerChooseTab, handlerDeleteTab }) => {
//console.log(currentActiveTab)
    const list = tabsList.map((tab) => (
        <TabItem
            key={tab.id}
            handlerChooseTab={handlerChooseTab}
            handlerDeleteTab={handlerDeleteTab}
            tab={{ id: tab.id, name: tab.name }}
            currentActiveTab={ currentActiveTab}
        />
    ))

    return (
        !!tabsList.length ? (
            <div className="tabs-list">
                {list}
            </div>
        ) : (
                null
            )
    )
}


export default TabsList;
