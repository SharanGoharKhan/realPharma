import React from 'react';
import {
  Container, Content, Text, H1, Label
} from 'native-base';
import { TextInput, Button } from 'react-native';
import Spacer from './Spacer';

class About extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hex: '',
      report: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleReport = this.handleReport.bind(this)
  }
  handleReport = () => {
    alert(`Reported successfully`)
    this.setState({report: false})
  }
  handleChange = (val) => {
    this.setState({
      hex: val
    })
  }
  handleSubmit = () => {
    alert(`Handle Submit Called: ${this.state.hex} Value`)
    if (this.state.hex == '7869db6a7a1e4d4') {
      alert(`Medicine name: Amoxicillim \n Status: Real`)
      this.setState({
        report: false
      })
    } else if (this.state.hex == 'f554128cdela34') {
      alert(`Medicine name: Naproxen \n Status: Real`)
      this.setState({
        report: false
      })
    } else {
      alert(`Medicine name: Not found please report \n Status: Fake`)
      this.setState({
        report: true
      })
    }
  }
  render() {
    reportButton = this.state.report ? <Button onPress={this.handleReport} title="Report" color="#ed4134"/>:null
    return (
      <Container>
        <Content padder>
          <Spacer size={30} />
          <H1>
            Check Medicine
          </H1>
          <Spacer size={10} />
          <Label>Type Hex Id here</Label>
          <TextInput
            onChangeText={v => this.handleChange(v)}
            style={{ height: 40 }}
          />
          <Spacer size={10} />
          <Button
            onPress={this.handleSubmit}
            title="Submit"
            color="#841584"
          />
          <Spacer size={10} />
          {reportButton}
        </Content>
      </Container>
    )
  }
}

export default About;
