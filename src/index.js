import React from "react";
import ReactDOM from "react-dom";
import {
  ResourceList,
  AppProvider,
  Page,
  Card,
  Avatar,
  TextStyle,
  Button
} from "@shopify/polaris";

import Member from "./Member";

import "@shopify/polaris/styles.css";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    };

    this.addMember = this.addMember.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  addMember(nama) {
    let { members } = this.state;
    members.unshift({
      id: this.state.members.length + 1,
      nama
    });

    this.setState({ members });
  }

  removeMember(id) {
    const members = this.state.members.filter(todo => todo.id !== id);

    this.setState({ members });
  }

  renderItem(item) {
    const { id, nama } = item;
    const media = <Avatar customer size="medium" name={nama} />;

    return (
      <ResourceList.Item
        id={id}
        // url={url}
        media={media}
        accessibilityLabel={`View details for ${nama}`}
      >
        <h3>
          <TextStyle variation="strong">{nama}</TextStyle>
        </h3>

        <Button plain destructive onClick={this.removeMember.bind(this, id)}>
          Remove
        </Button>
      </ResourceList.Item>
    );
  }

  render() {
    const { members } = this.state;

    return (
      <Member addMember={this.addMember}>
        <Card>
          <ResourceList
            resourceName={{ singular: "customer", plural: "customers" }}
            items={members}
            renderItem={this.renderItem}
          />
        </Card>
      </Member>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <AppProvider>
    <Page nama="Simple Listing app">
      <App />
    </Page>
  </AppProvider>,
  rootElement
);
