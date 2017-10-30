import React from 'react';
import { Button, Header, Transition } from 'semantic-ui-react';
import StyledButton from '../assets/styledComponents/StyledButton';
import ReasonSection from '../assets/styledComponents/ReasonSection';

class Reason  extends React.Component {
  state = { visible: false };

  renderButton = (note) => {
    if(note) {
      return (
        <Button 
          as={StyledButton}
          content={this.state.visible ? 'Hide' : 'Show'} 
          onClick={this.toggleNote} 
        />
      )
    }
  }

  toggleNote = () => this.setState({ visible: !this.state.visible });

  render() {
    const { body, id, image, note, title } = this.props.reason;
    const { visible } = this.state;
    return(
      <ReasonSection>
        <Header as='h1'>Reason { id }: { title }</Header>
        <Header as='h5'>{ body }</Header>
        { this.renderButton(note) }
        <Transition visible={visible} animation='scale' duration={500}>
          <Header as='h5'>{ note }</Header>
        </Transition>
      </ReasonSection>
    )
  }
}


export default Reason;