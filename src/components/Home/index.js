import React from 'react';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from '../Session';
import Messages from '../Messages';
import Chats from '../Chats'

const HomePage = () => (
  <>
    {/* <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p> */}

    {/* <Messages /> */}
    <Chats/>
  </>
);

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);