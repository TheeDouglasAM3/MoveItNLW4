import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { useTheme } from '../contexts/ThemeContext'
import { shade } from 'polished'

interface Props {
  toggleTheme(): void 
}

const SwitchTheme: React.FC<Props> = () => {
  const { title, colors } = useContext(ThemeContext)

  const { toggleTheme, theme } = useTheme()

  function handleToggle() {
    toggleTheme();
  }

  return (
    <div className="switch-theme">
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