import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';



const Details = ({ details }) => {
  let convertObject = () => {
    let jeneral = {};
    let newDetails = {};
    Object.keys(details).map(key => {
      if (typeof (details[key]) === 'object') {
        newDetails[key] = details[key];
      } else {
        jeneral[key] = details[key]
      }
      return true;
    });
    newDetails.jeneral = jeneral
    return newDetails;
  }

  let some = convertObject();

  let listTabs = <Tabs>
    {
      Object.keys(some).map((keyTabName, index) => <Tab key={keyTabName} label={keyTabName} >
        <div>
          <ul key={[keyTabName] + index + "_ul"}>
            {Object.keys(some[keyTabName]).map(underKey => {
              let alias = some[keyTabName][underKey];

              if (Array.isArray(some[keyTabName])) {
                return <li key={alias.id + '_some_li'}> ID {alias.id} <ul>
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