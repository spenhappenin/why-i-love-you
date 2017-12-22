import React from 'react'
import Reason from './Reason';

const ReasonsList = ({ reasons }) => (
  <div>
    <br />
    <br />
    {
      reasons.map( reason => {
        return <Reason key={reason.id} reason={reason} />
      })
    }
    <br />
    <br />
    <br />
  </div>
)

export default ReasonsList;