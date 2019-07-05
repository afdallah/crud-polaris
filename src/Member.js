import React from "react";
import { Form, FormLayout, TextField, Button, Card } from "@shopify/polaris";

export default class Member extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value) {
    this.setState({ value });
  }

  handleSubmit(event) {
    if (!this.state.value) return;
    event.preventDefault();
    let nama = this.state.value;
    nama = nama.charAt(0).toUpperCase() + nama.slice(1);

    this.props.addMember(nama);
    this.setState({ value: "" });
  }

  render() {
    return (
      <div>
        <Card sectioned>
          <Form onSubmit={this.handleSubmit}>
            <FormLayout>
              <TextField
                type="text"
                label="Add member"
                value={this.state.value}
                onChange={this.handleChange}
                name="member"
                ref={input => (this.input = input)}
                autoFocus
              />
              <Button submit primary>
                Add
              </Button>
            </FormLayout>
          </Form>
        </Card>

        {this.props.children}
      </div>
    );
  }
}
