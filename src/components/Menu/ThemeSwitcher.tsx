'use client'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useId } from 'react'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'
  const id = useId()

  const handleToggle = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <div className="flex items-center">
      <div className="relative inline-block">
        <input
          type="checkbox"
          id={id}
          checked={isDark}
          onChange={handleToggle}
          className="sr-only"
        />
        <label
          htmlFor={id}
          className={`block w-10 h-5 rounded-full cursor-pointer transition-colors ${
            isDark ? 'bg-[#0d8bf2]' : 'bg-gray-300'
          }`}
        >
          <span
            className={`absolute block w-3.5 h-3.5 bg-white rounded-full shadow-md transform transition-transform duration-200 top-[3px] flex items-center justify-center ${
              isDark ? 'translate-x-[22px]' : 'translate-x-[3px]'
            }`}
          >
            {isDark ? (
              <Moon className="h-3 w-6 text-blue-500" />
            ) : (
              <Sun className="h-3 w-6 text-yellow-400" />
            )}
          </span>
        </label>{' '}
      </div>
    </div>
  )
}

export { ThemeSwitcher }
