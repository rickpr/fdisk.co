declare module '*.png' {
  const value: string
  export default value
}

declare module '*.jpg' {
  const value: string
  export default value
}

declare module '*.mp4' {
  const value: string
  export default value
}

declare module '*.webp' {
  const value: string
  export default value
}

interface ChartDataset {
  label: string
  data: number[]
  backgroundColor: string
  borderColor?: string
  fill?: number
}

// For now, JSON importing is used only for Chart.js data
declare module '*.json' {
  const value: { labels: string[], datasets: ChartDataset[] }
  export default value
}
