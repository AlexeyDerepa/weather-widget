import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

const Details = ({ details }) => {
  let convertObject = () => {
    let general = {};
    let newDetails = {};
    Object.keys(details).map(key => {
      if (typeof (details[key]) === 'object') {
        newDetails[key] = details[key];
      } else {
        general[key] = details[key]
      }
      return true;
    });
    newDetails.general = general
    return newDetails;
  }

  let newDetails = convertObject();

  let listTabs = <Tabs>
    {
      Object.keys(newDetails).map((keyTabName, index) => <Tab key={keyTabName} label={keyTabName} >
        <div>
          <ul key={[keyTabName] + index + "_ul"}>
            {Object.keys(newDetails[keyTabName]).map(underKey => {
              let alias = newDetails[keyTabName][underKey];

              if (Array.isArray(newDetails[keyTabName])) {
                return <li key={alias.id + '_newDetails_li'}> ID {alias.id} <ul>
                  {Object.keys(alias).map(uniqKey => <li key={uniqKey + alias[uniqKey] + ''}>{uniqKey}: {alias[uniqKey]}</li>)}
                </ul></li>
              } else {
                return <li key={underKey + alias}>
                  {underKey}: {alias}
                </li>
              }
            })}
          </ul>
        </div>
      </Tab>
      )
    }
  </Tabs>

  return <div>{listTabs}</div>
}


export default Details;