import React, { ReactNode ,useEffect} from 'react';
import './App.scss';
import { selectTheme } from '../store/reducers/configSlice'
import { useSelector } from 'react-redux';
import { useLocation  } from 'react-router-dom'
import Header from '../components/Header';
import Tools from '../components/Tools';
type Props = {
  children: ReactNode;
};

function App(props: Props){
  const path: any = useLocation()
  const theme: string = useSelector(selectTheme)
  const { children } = props;
  useEffect(() => {
    console.log(path)
  },[path])
  useEffect(()=>{
    console.log(theme)
  },[theme])
  return (
    <div className={'theme-' + theme}>
      {path.pathname === '/' ? <Header /> : null}
      {children}
      <Tools />
    </div>
  );
}

export default App;
