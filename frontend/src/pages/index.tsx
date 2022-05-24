import { useState } from 'react';

import { Box } from '@chakra-ui/react'

function Home() {
  const [users, setUsers] = useState(null);
  

  async function handleSignIn(data) {
    
  }

  return (
    <Box>
      {/* <Navbar /> */}
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