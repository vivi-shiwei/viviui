
import React from 'react'
import Intelligence from '../src/components/editIntelligence/index'
import DeleteIcon from '../src/components/editIntelligence/deleteIcon'
import ConfirmButton from '../src/components/editIntelligence/confirmButton'
import CancelButton from '../src/components/editIntelligence/cancelButton'
import EditIntelligence from '../src/components/editIntelligence/editIntelligence'

export default {
  title: 'EditIntelligenceOne'
}

export const EditIntelligenceTest = () => {
  return (
    <>
      <Intelligence
        left={
          <>
            <EditIntelligence value='jfiekj' color='#CC6600' />
            <EditIntelligence value='jfiekj' color='#99CC33' />
          </>
        }
        right={
          <DeleteIcon onClick={() => { console.log('杰克') }} />
        }
        buttonGroup={
          <>
            <ConfirmButton />
            <CancelButton />
          </>
        }
      />
    </>
  )
}
