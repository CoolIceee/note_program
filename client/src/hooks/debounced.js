import { useEffect, useState } from 'react'

export function useDebounced(value, valueTwo, delay = 300) {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay)

    return () => clearTimeout(handler)
  }, [value, valueTwo, delay])
  return debounced
}

export function useDebouncedTwo(value, delay = 300) {
  const [debouncedTwo, setDebouncedTwo] = useState(value)
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedTwo(value), delay)
    return () => clearTimeout(handler)
  }, [value, delay])
  return debouncedTwo
}
