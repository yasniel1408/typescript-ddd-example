export class NewProductAddedEvent {
  constructor(public productId: string, public productName: string) {}
}
