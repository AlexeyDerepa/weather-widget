import React from 'react';

const TabItem = ({ tab, currentActiveTab, handlerChooseTab, handlerDeleteTab }) => {
  //console.log(tab, currentActiveTab  === tab.id);
  return (
    <div className={!(currentActiveTab  === tab.id)?'main-tab-item-container':'main-tab-item-container active-tab'}>
      <div className="main-tab-item">
        <span className='delete-tab-item' onClick={()=>{handlerDeleteTab(tab)}}>X</span>
        <div className={'tab-item-container'} onClick={()=>{handlerChooseTab(tab)}}>
          <div className='tab-title'> {tab.name}</div>
        </div>
      </div>
    </div>
  );
}

export default TabItem;
