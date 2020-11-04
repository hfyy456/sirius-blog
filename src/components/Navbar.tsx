import React from 'react';
import styles from './Navbar.scss'
import { useSelector } from 'react-redux';
import { selectTheme } from '../store/reducers/configSlice'
export default function Navbar(): JSX.Element {
  const theme: string = useSelector(selectTheme)
  return (
    <header className={styles.headerContainer} >
      {theme}
    </header>
  )
}