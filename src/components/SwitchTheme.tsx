import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { useTheme } from '../contexts/ThemeContext'
import { shade } from 'polished'
import styles from '../styles/components/SwitchTheme.module.css'


const SwitchTheme: React.FC = () => {
  const { title, colors } = useContext(ThemeContext)

  const { toggleTheme } = useTheme()

  function handleToggle() {
    toggleTheme();
  }

  return (
    <div className={styles.switchTheme}>
      <Switch 
        onChange={handleToggle}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        width={40}
        handleDiameter={15}
        onColor={colors.button}
        offColor={shade(0.15, colors.button)}
      />
    </div>
  )
}

export default SwitchTheme