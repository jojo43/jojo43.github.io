import { useEffect, useState } from 'react'

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] {
  const [value, setValue] = useState(() => {
    if (typeof window === 'undefined') return initialValue

    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.error(e)
    }
  }, [value])

  return [value, setValue]
}
