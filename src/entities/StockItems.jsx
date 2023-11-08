export default class StockItems {
  constructor({ name, cover, price, quantity, description }) {
    this.id = Math.floor(Math.random() * 10000)
    this.name = name
    this.quantity = +quantity
    this.price = +price
    this.cover = cover
    this.description = description
  }
}