import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const Details = ({ details }) => {

  let listTabs = <Tabs>
    {
      Object.keys(details).map(item => {
      console.log(item)
      return <Tab label={item} >
        <div>
          <h2 style={styles.headline}>{item}</h2>
          
        </div>
      </Tab>})
    }

  </Tabs>




  Object.keys(details).map(item => console.log(item))
  return <div>
    {details.id}

    {listTabs}


  </div>

}


export default Details;