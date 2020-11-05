import React, { ReactNode } from 'react';
import './App.scss';
import { selectTheme } from '../store/reducers/configSlice'
import { useSelector } from 'react-redux';
import Header from '../components/Header';
type Props = {
  children: ReactNode;
};

function App(props: Props) {
  const theme: string = useSelector(selectTheme)
  const { children } = props;
  return (
    <div className={'theme-' + theme}>
      <Header />
      {children}
    </div>
  );
}

export default App;
