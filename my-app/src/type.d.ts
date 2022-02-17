interface INumber {
    value: number
}
  
  type NumberAction = {
    type: string
    number: INumber
  }
  
  type DispatchType = (args: NumberAction) => NumberAction