import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useRecoilValue } from 'recoil';
import useApp from './hooks/useApp';
import useAppRecoil from './hooks/useAppRecoil';
import useAppMutaion from './querys/useAppMutation';
import useAppQuery from './querys/useAppQuery';
import { AppState } from './recoils/App.recoil';



function App() {
  
  // const {onClickCountPlus, onClickCountMinus } = useApp(0);
  const {onClickCountPlus, onClickCountMinus } = useAppRecoil();
  const count = useRecoilValue(AppState);
  const appQuery = useAppQuery();
  const appMutation = useAppMutaion();

  


  return (
    <div className="App">
      {count}
      <button onClick={onClickCountPlus}>plus</button>
      <button onClick={onClickCountMinus}>minus</button>
    </div>
  );
}

export default App;
