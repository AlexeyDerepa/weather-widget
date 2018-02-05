import React from 'react';
import TabItem from './TabItem';

const TabsList = ({ tabsList, currentActiveTab, handlerChooseTab, handlerDeleteTab }) => {
    const list = tabsList.map((tab) => (
        <TabItem
            key={tab.id}
            handlerChooseTab={handlerChooseTab}
            handlerDeleteTab={handlerDeleteTab}
            tab={{ id: tab.id, name: tab.name }}
            currentActiveTab={currentActiveTab}
        />
    ))

    return (
        !!tabsList.length
            ? (
                list
            ) : (
                null
            )
    )
}


export default TabsList;
