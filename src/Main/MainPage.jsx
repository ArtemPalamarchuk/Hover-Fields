import React, { useEffect, useRef, useState } from 'react';
import { Button, message } from 'antd';
import { createScheme } from './helpers/createScheme'
import DropDownMenu from './components/DropDownMenu';
import Table from './components/Table';
import History from './components/History';

import StyledMain from './StyledMain';


const MainPage = ({getPresets, currentMode, presets, clearHistory}) => {

  useEffect(() => {
    getPresets()
  }, [])

  const scrollRef = useRef(null);
  const [scheme, setScheme] = useState([]);

  const showField = () => {
    if(currentMode){
      const fieldCount = presets[currentMode].field;
      const scheme = createScheme(fieldCount);
      setScheme(scheme)
      clearHistory()
    }else{
      message.info('Please, choose mode')
    }
  }

  return (
    <StyledMain>

      <div className={'field-block'}>
        <div className={'settings-wrap'}>
          <DropDownMenu disabled={true}/>
          <Button onClick={showField} type={'primary'}>START</Button>
        </div>
        <Table scheme={scheme} scrollRef={scrollRef}/>
      </div>

      <History scrollRef={scrollRef}/>

    </StyledMain>
  )
}
export default MainPage;