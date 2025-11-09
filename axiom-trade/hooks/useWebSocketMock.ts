import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setRealtime } from '@/store/slices/tableSlice'

export function useWebSocketMock(enabled: boolean) {
  const dispatch = useDispatch()
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (enabled) {
      dispatch(setRealtime(true))
      intervalRef.current = setInterval(() => {
        // Simulate real-time updates by refetching or updating state
        // For now, just log; in real implementation, update query cache or state
        console.log('WebSocket mock update')
      }, 2000 + Math.random() * 2000) // 2-4s random interval
    } else {
      dispatch(setRealtime(false))
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [enabled, dispatch])
}
