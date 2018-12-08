import React from 'react';
import {
  Container, Content, Text, H1, H2, H3,
} from 'native-base';
import { TextInput } from 'react-native';
import Spacer from './Spacer';

const About = () => (
  <Container>
    <Content padder>
      <Spacer size={30} />
      <H1>
        Check Medicine
      </H1>
      <Spacer size={10} />
      <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
        />
    </Content>
  </Container>
);

export default About;
