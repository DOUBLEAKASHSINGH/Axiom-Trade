import React from 'react'

type Props = {
	className?: string
	width?: string | number
	height?: string | number
	rounded?: boolean
}

export const Skeleton: React.FC<Props> = ({ className = '', width = '100%', height = 12, rounded = true }) => {
	const style: React.CSSProperties = {
		width: typeof width === 'number' ? `${width}px` : width,
		height: typeof height === 'number' ? `${height}px` : `${height}px`,
	}

	return <div className={`skeleton ${rounded ? 'rounded-md' : ''} ${className}`} style={style} />
}

export default Skeleton
