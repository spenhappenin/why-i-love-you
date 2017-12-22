import React from 'react';
import ReasonBody from '../assets/styledComponents/ReasonBody';
import ReasonSection from '../assets/styledComponents/ReasonSection';
import ReasonTitle from '../assets/styledComponents/ReasonTitle';
import StyledButton from '../assets/styledComponents/StyledButton';
import { Button, Header, Image, Segment, Transition } from 'semantic-ui-react';

class Reason  extends React.Component {
  state = { imageVisible: false, noteVisible: false };

  renderNoteButton = (note) => {
    if(note) {
      return(
        <Button 
          as={StyledButton}
          circular 
          icon='mail' 
          size='huge'
          color={this.state.noteVisible ? 'brown' : 'red'} 
          onClick={this.toggleNote} 
        />
      )
    }
  }

  renderImageButton = (image) => {
    if(image) {
      return(
        <Button
          as={StyledButton}
          circular
          icon='picture'
          size='huge'
          color={this.state.imageVisible ? 'brown' : 'red'}
          onClick={this.toggleImage}
        />
      )
    }
  }

  toggleNote = () => this.setState({ noteVisible: !this.state.noteVisible });

  toggleImage = () => this.setState({ imageVisible: !this.state.imageVisible });

  render() {
    const { body, id, image, note, title } = this.props.reason;
    const { noteVisible, imageVisible } = this.state;
    return(
      <ReasonSection>
        <Header as={ReasonTitle} textAlign='center'>Reason { id }: { title }</Header>
        <Header as={ReasonBody} textAlign='center'>{ body }</Header>
        <Segment basic textAlign='center'>
          { this.renderNoteButton(note) }
          { this.renderImageButton(image) }
        </Segment>
        <Transition visible={imageVisible} animation='scale' duration={500} unmountOnHide={true}>
          <Image src={image} />
        </Transition>
        <Transition visible={noteVisible} animation='scale' duration={500}>
          <Header as='h4' textAlign='center'>{ note }</Header>
        </Transition>
      </ReasonSection>
    )
  }
}


export default Reason;