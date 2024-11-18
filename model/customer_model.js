export default class CustomerModel{

    constructor(customer_id,name,address,email,mobile) {

        this._customer_id = customer_id;
        this._name = name;
        this._address = address;
        this._email = email;
        this._mobile = mobile;
    }


    get customer_id() {
        return this._customer_id;
    }

    set customer_id(value) {
        this._customer_id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get mobile() {
        return this._mobile;
    }

    set mobile(value) {
        this._mobile = value;
    }
}