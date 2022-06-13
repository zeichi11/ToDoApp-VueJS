export interface ValueType {
  ty?: string,
  v: string | number | ValueType
}

export interface CommandType {
  type: string,
  listIndex: number,
  value: ValueType
}