import { Header, Icon, Segment, Label } from 'semantic-ui-react';

const AccountHeader = ({ role, email, name, createdAt }) => {
  return (
    <Segment secondary inverted color="violet">
      <Label
        color="teal"
        size="large"
        ribbon
        icon="privacy"
        style={{ textTransform: 'capitalize' }}
        content={role}
      />
      <Header as="h1" inverted textAlign="center" icon>
        <Icon name="user" />
        {name}
        <Header.Subheader>{email}</Header.Subheader>
        <Header.Subheader>Joined {createdAt}</Header.Subheader>
      </Header>
    </Segment>
  );
};

export default AccountHeader;
