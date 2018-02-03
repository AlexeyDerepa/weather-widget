import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';



const Details = ({ details }) => {


  let jeneral = {};
  let some = {};
  Object.keys(details).map(key => {
    if (typeof (details[key]) === 'object') {
      some[key] = details[key];
    } else {
      jeneral[key] = details[key]
    }
    return true;
  });
  some.jeneral = jeneral
  some.weather = some.weather[0];


  let listTabs = <Tabs>
    {
      Object.keys(some).map((key, index) => {
 //       console.log(key)
        return <Tab key={key} label={key} >
          <div>
            <ul key={index + "_ul"}>
              {Object.keys(some[key]).map(underKey => {
                let obj = some[key];
               // console.log(obj);
                return <li key={obj}>
                  {underKey}:{obj[underKey]}
                </li>
              })}
            </ul>
          </div>
        </Tab>
      })
    }
  </Tabs>

  // let listTabs2 = <Tabs>
  //   {
  //     Object.keys(details).map(item => {
  //       //console.log(item)
  //       return <Tab key={item} label={item} >
  //         <div>
  //           <h2 style={styles.headline}>{item}</h2>
  //         </div>
  //       </Tab>
  //     })
  //   }
  // </Tabs>




  //Object.keys(details).map(item => console.log(item))
  return <div>
    {details.id}

    {listTabs}


  </div>

}


export default Details;