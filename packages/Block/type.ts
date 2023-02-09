export type TPlaceHolder = {
  // This is a placeholder for a type
  // that will be exported from a package
  // that is not yet available
  w?: number | string
  h?: number | string
  isGuideLines?: boolean
  isCSSStyles?: boolean
  bgColor?: string
  color?: string
  text?: string
  round?: boolean
}
export type TBlockStyle = {
  width: number | string
  height: number | string
  backgroundColor?: string
  backgroundImage?: string
  color: string
  borderRadius: number
  lineHeight?: number | string
  border?: string
}
