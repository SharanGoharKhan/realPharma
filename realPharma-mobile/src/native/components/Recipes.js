import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList, TouchableOpacity, RefreshControl, Image,
} from 'react-native';
import {
  Container, Content, Card, CardItem, Body, Text, Button,H2
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Loading from './Loading';
import Error from './Error';
import Header from './Header';
import Spacer from './Spacer';

const RecipeListing = ({
  error,
  loading,
  recipes,
  reFetch,
}) => {
  // Loading
  if (loading) return <Loading />;

  // Error
  if (error) return <Error content={error} />;

  const keyExtractor = item => item.id;

  const onPress = item => Actions.recipe({ match: { params: { id: String(item.id) } } });
  const contCont = `Name: Sharan Gohar Khan,Expertise: React Native and React ,Email: sharan.gohar@gmail.com \n Name: Kashif, Expertise: Node.js, Email: Pb193105@gmail.com \n Name: Ahsan, Expertise: Node.js Email: mfarooq.bese16seecs \n Name: Maryam, Expertise: Mbbs Doctor,Email: maryamzec5october1997@gmail.com`
  return (
    <Container>
      <Content padder>
        <Header
          title="About Us realPharma"
          content="More than 50% of medicine are Fake Medicine in Pakistan realPharma helps in restricting the selling of those fake medicine."
        />
        <Header
          title="How it Works"
          content="Scratch the card on the medicine and check its authenticity. We have a database of verified medicine that is going to check the validity of medicine. Fake medicine is reported immediately."
        />
        <Header
          title="Our Team"
          content="This App is created by our team for JAZZ SDG HACKATHON 2018. We are a team of 4 members. Sharan,Kahsif,Ahsan and Maryam."
        />
        <Header
          title="Contact Us"
          content={contCont}
        />
      </Content>
    </Container>
  );
};

RecipeListing.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  reFetch: PropTypes.func,
};

RecipeListing.defaultProps = {
  error: null,
  reFetch: null,
};

export default RecipeListing;
