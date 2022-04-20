import { useState, useEffect } from 'react';
import { userService } from 'services';

import { USER_TOKEN } from '../lib/constants'
import SwrResponse from '../components/swr-response'

import { Box } from '@chakra-ui/react'

import Navbar from '../components/Nav/Navbar'

const sampleFetch = `await fetch('/api?edge') await fetch('/api')`

function Home() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    userService.getAll().then(x => setUsers(x));
  }, []);


  return (
    <Box>
      <Navbar />
      <Box>
      </Box>
      <Box className="mb-6 border border-accents-2 rounded-md divide-y divide-accents-2">
        {users &&
          <ul>
            {users.map(user =>
              <li key={user.id}>{user.firstName} {user.lastName}</li>
            )}
          </ul>
        } 
        {!users && <div className="spinner-border spinner-border-sm"></div>}
      </Box>
    </Box>
  )
}

export default Home;