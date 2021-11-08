import React, { useContext, createContext } from 'react';

export const UserContext = createContext({});

// export default function UserContext(props) {
//   const [user, setUser] = useState(null);

//   return (
//     <UserInfoContext.Provider>
//       {props.children}
//     </UserInfoContext.Provider>
//   );
// }
