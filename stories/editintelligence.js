
import React from 'react'
import Intelligence from '../src/components/editShow'
import DeleteIcon from '../src/components/editShow/deleteIcon'
import ConfirmButton from '../src/components/editShow/confirmButton'
import CancelButton from '../src/components/editShow/cancelButton'
import EditTable from '../src/components/editShow/editTable'

export default {
  title: 'EditIntelligenceOne'
}

export const EditIntelligenceTest = () => {
  return (
    <>
      <Intelligence
        left={
          <>
            <EditTable value='jfiekj' color='#CC6600' />
            <EditTable value='jfiekj' color='#99CC33' />
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
