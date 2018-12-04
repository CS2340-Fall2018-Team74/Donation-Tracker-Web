export class Item {
  constructor(public category: string = '',
              public id: string = '',
              public name: string = '',
              public quantity: number = 0,
              public uri: string = '') {
  }

  firebaseFormat(): any {
    return {
      category: this.category,
      id: this.id,
      name: this.name,
      quantity: this.quantity,
      uri: this.uri
    };
  }
}
