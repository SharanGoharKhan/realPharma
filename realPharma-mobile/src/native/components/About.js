import React from 'react';
import {
  Container, Content, Text, H1, H2, H3,
} from 'native-base';
import { TextInput, Button } from 'react-native';
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
        style={{ height: 40 }}
        placeholder="Type here to translate!"
      />
      <Spacer size={10} />
      <Button
        
        title="Submit"
        color="#841584"
      />
    </Content>
  </Container>
);

export default About;
