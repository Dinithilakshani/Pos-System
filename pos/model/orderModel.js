export default class OrderModel{
    constructor(order_id,customerName,date,payment) {
        this._order_id=order_id;
        this._customerName=customerName;
        this._date=date;
        this._payment=payment;
    }
    get order_id() {
        return this._order_id;
    }

    set order_id(value) {
        this._order_id = value;
    }

    get customerName() {
        return this._customerName;
    }

    set customerName(value) {
        this._customerName = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }

    get payment() {
        return this._payment;
    }

    set payment(value) {
        this._payment = value;
    }
}