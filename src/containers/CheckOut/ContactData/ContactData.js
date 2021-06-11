import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import axios from "../../../axios-orders";
import classes from "./ContactData.css";
class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Onwuma Esther",
        address: {
          street: "Ijaiye Ojokoro, Lagos",
          zipcode: "123045",
          country: "Nigeria",
        },
        email: "OEsther@gmail.com",
      },
      deliveryMethod: "Fastest",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
        console.log(response);
      })
      .catch((err) => {
        this.setState({ loading: false });
        console.log(err);
      });
  };
  render() {
    let form = (
      <form>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your Email" />
        <input type="text" name="street" placeholder="Street" />
        <input type="text" name="postal" placeholder="Postal Code" />
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4> Enter Your Contact Data</h4>
        {form}
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </div>
    );
  }
}

export default ContactData;
