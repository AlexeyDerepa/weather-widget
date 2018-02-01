import React, {Component, Fragment} from 'react';

import HeaderSide from '../components/headerSide';
import BodySide from '../components/bodySide';

class MainPage extends Component {
    render() {
      return (
        <Fragment>
            <HeaderSide/>
            <BodySide/>
        </Fragment>
      );
    }
  }
  
  export default MainPage;