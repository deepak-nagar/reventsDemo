import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";

class EventListAttendee extends Component {
  render() {
    const { attendee } = this.props;
    return (
      <List.Item>
        <Image avatar size="mini" circular src={attendee.photoURL} />
        <List.Content>
          <List.Header>{attendee.name}</List.Header>
        </List.Content>
      </List.Item>
    );
  }
}
export default EventListAttendee;
