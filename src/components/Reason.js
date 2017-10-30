import React from 'react';
import { Button, Header } from 'semantic-ui-react';
import ReasonSection from '../assets/styledComponents/ReasonSection';

const renderButton = (note) => {
  if(note) {
    return <Button basic>Click Me</Button>
  }
}

const Reason = ({ reason: { body, id, image, note, title } }) => {
  return(
    <ReasonSection>
      <Header as='h1'>Reason { id }: { title }</Header>
      <Header as='h5'>{ body }</Header>
      { renderButton(note) }
    </ReasonSection>
  )
}


export default Reason;