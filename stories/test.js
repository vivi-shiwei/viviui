import React, { useState } from 'react'
import {
  Box
} from '@chakra-ui/core'

import MyImage from '../static/QQ20200518181405.jpg'
export default {
  title: 'Test'
}
export const noProfilePhoto = () => {
  const [recipientID, setRecipientID] = useState(1)
  const isRecipientOnline = useFriendStatus(recipientID)
  const friendList = [
    { id: 1, name: 'Phoebe' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Ross' }
  ]
  return (
    <>
      <Box color={isRecipientOnline ? 'green' : 'red'}>fdf</Box>
      <select
        value={recipientID}
        onChange={e => setRecipientID(Number(e.target.value))}
      >
        {friendList.map(friend => (
          <option key={friend.id} value={friend.id}>
            {friend.name}
          </option>
        ))}
      </select>
    </>
  )
}
