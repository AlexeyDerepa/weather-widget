import React, {Component, Fragment} from 'react';

import HeaderSide from '../components/headerSide';
import BodySide from '../components/bodySide';

class MainPage extends Component {
    render() {
      return (
        <div className='main-container-for-header-body'>
            <HeaderSide/>
            <BodySide/>
        </div>
      );
    }
  }
  
  export default MainPage;