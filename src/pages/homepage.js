import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import UserListComponent from "../components/UserListComponent";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: uuidv4(),
          name: "Mihail",
          surname: "Tal",
          username: "mihailTal",
        },
        {
          id: uuidv4(),
          name: "Halil",
          surname: "Demircin",
          username: "haliboss",
        },
        {
          id: uuidv4(),
          name: "Noah",
          surname: "Todo",
          username: "üclüpriz",
        },
        {
          id: uuidv4(),
          name: "Eric",
          surname: "Navy",
          username: "striker",
        },
      ],
    };
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);
  }

  addUser = (name, surname, username) => {
    if ((name, surname, username)) {
      const users = [...this.state.users];
      users.push({
        id: uuidv4(),
        name: name,
        surname: surname,
        username: username,
      });
      this.setState({ users });
      toast(`"${name}" kullanıcısı eklendi.`);
    } else {
      alert("Please fill all fields...");
    }
  };

  deleteUser = (obj) => {
    const users = this.state.users.filter((user) => {
      return user.id !== obj.id;
    });
    this.setState({ users });
    toast(`"${obj.name}" kullanıcısı silindi.`);
  };

  editUser = (id, name, surname, username) => {
    if ((id, name, surname, username)) {
      const users = [...this.state.users];
      let updatedUsers = users.map((user) => {
        if (user.id === id) {
          user = {
            id: id,
            name: name,
            surname: surname,
            username: username,
          };
        }
        return user;
      });
      this.setState({
        users: updatedUsers,
    });
  };
};

  render() {
    return (
      <div>
        <ToastContainer />
        <Navbar className="bg-info" expand="md" light>
          <div className="container text-center">
            <NavbarBrand href="#">React List</NavbarBrand>
          </div>
        </Navbar>
        <UserListComponent
          users={this.state.users}
          addUser={this.addUser}
          deleteUser={this.deleteUser}
          editUser={this.editUser}
        />
      </div>
    );
  }
}
