"use client"
import React from 'react'

type Props = { children: React.ReactNode }

export class ErrorBoundary extends React.Component<Props, { hasError: boolean; error?: Error }> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    console.error('ErrorBoundary caught', error)
    this.setState({ error })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6">
          <h3 className="text-lg font-semibold">Something went wrong</h3>
          <p className="text-sm text-muted-foreground">An error occurred while loading this section.</p>
          <details className="mt-3 text-xs text-muted-foreground">{this.state.error?.message}</details>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
