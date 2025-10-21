'use client'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useId, useState } from 'react'

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
          className={`block w-13 h-6 rounded-full cursor-pointer transition-colors ${
            isDark ? 'bg-[#0d8bf2]' : 'bg-gray-300'
          }`}
        >
          <span
            className={`absolute block w-5 h-5 bg-white rounded-full top-[2px] flex items-center justify-center transition-transform duration-300 ease-in-out ${
              isDark ? 'translate-x-[29px]' : 'translate-x-[2px]'
            }`}
          >
            {isDark ? (
              <Moon className="h-3 w-6 text-blue-500" />
            ) : (
              <Sun className="h-4 w-7 text-yellow-400" />
            )}
          </span>
        </label>{' '}
      </div>
    </div>
  )
}

export { ThemeSwitcher }
