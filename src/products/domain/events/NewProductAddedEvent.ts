export class NewProductAddedEvent {
  constructor(public productId: number, public productName: string) {}
}
