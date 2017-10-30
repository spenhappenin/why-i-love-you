import React from 'react'
import Reason from './Reason';

const ReasonsList = ({ reasons }) => (
  <div>
    {
      reasons.map( reason => {
        return <Reason key={reason.id} reason={reason} />
      })
    }
  </div>
)

export default ReasonsList;