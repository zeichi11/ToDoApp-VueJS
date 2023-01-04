export interface ValueType {
  ty?: string,
  v: string | number | ValueType
}

export interface CommandType {
  cmd: string,
  type: string,
  listIndex: number,
  value: ValueType
}

export interface ActionProps {
  listId: string,
  type: string,
  value: any,
  offset: [number]
}