import { useState, useEffect } from 'react'

export default function useTimer(initialMins = 23, initialSecs = 14) {
  const [time, setTime] = useState({ mins: initialMins, secs: initialSecs })

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { mins, secs } = prev
        secs -= 1
        if (secs < 0) { secs = 59; mins -= 1 }
        if (mins < 0) { mins = initialMins; secs = initialSecs }
        return { mins, secs }
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [initialMins, initialSecs])

  const formatted = `${String(time.mins).padStart(2, '0')}:${String(time.secs).padStart(2, '0')}`
  return formatted
}
