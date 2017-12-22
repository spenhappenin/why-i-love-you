import React from 'react';
import { Button, Header, Segment, Transition } from 'semantic-ui-react';
import StyledButton from '../assets/styledComponents/StyledButton';
import ReasonTitle from '../assets/styledComponents/ReasonTitle';
import ReasonBody from '../assets/styledComponents/ReasonBody';
import ReasonSection from '../assets/styledComponents/ReasonSection';

class Reason  extends React.Component {
  state = { visible: false };

  renderButton = (note) => {
    if(note) {
      return (
        <Button 
          as={StyledButton}
          circular 
          icon='mail' 
          size='huge'
          color={this.state.visible ? 'brown' : 'red'} 
          onClick={this.toggleNote} 
        />
      )
    }
  }

  toggleNote = () => this.setState({ visible: !this.state.visible });

  render() {
    const { body, id, note, title } = this.props.reason;
    const { visible } = this.state;
    return(
      <ReasonSection>
        <Header as={ReasonTitle} textAlign='center'>Reason { id }: { title }</Header>
        <Header as={ReasonBody} textAlign='center'>{ body }</Header>
        <Segment basic textAlign='center'>
          { this.renderButton(note) }
        </Segment>
        <Transition visible={visible} animation='scale' duration={500}>
          <Header as='h4' textAlign='center'>{ note }</Header>
        </Transition>
      </ReasonSection>
    )
  }
}


export default Reason;