import axios from "axios";
import React, { useEffect, useContext } from "react";

import { UserContext } from './Context/UserContext';

const Home = () => {
  const { user } = useContext(UserContext);
  // const { location } = data;
  // const [id, setId] = useState("");
  // const [color, setColor] = useState("");
  // const [compatibility, setCompatibility] = useState("");
  // const [description, setDescription] = useState("");
  // const [number, setNumber] = useState();
  // const [mood, setMood] = useState("");
  // const [name, setName] = useState({ firstname: "", lastname: "" });

  // console.log(location, "location", id, "id", "data inside home after login");

  // console.log(
  //   "states that should persist in home",
  //   id,
  //   color,
  //   compatibility,
  //   description,
  //   number,
  //   mood
  // );

  useEffect(() => {

  }, []);

  // useEffect(() => {
  //   if (location.userId) {
  //     console.log("inside location userid condition in home");
  //     setId(location.userId);
  //     axios
  //       .post(
  //         `https://aztro.sameerkumar.website?sign=${location.sign}&day=today`
  //       )
  //       .then((response) => {
  //         const { data } = response;
  //         console.log(data, "request horscope info from aztro");
  //         setNumber(data.lucky_number);
  //         setColor(data.color);
  //         setDescription(data.description);
  //         setCompatibility(data.compatibility);
  //         setMood(data.mood);
  //         setName({
  //           firstname: location.name.firstName,
  //           lastname: location.name.lastName,
  //         });
  //       })
  //       .catch((error) => {
  //         console.log(error, "error retrieving horscope from aztro");
  //       });
  //   }
  // }, []);

  console.log(user, 'inside home');
  return (
    <> {
      user ? 
      (<>
        <h2>
        Welcome {user.firstName} {user.lastName}
        !!
      </h2>
      <p>
        <b>Horoscope of the day:</b>
        <br />
        {/* {description} */}
      </p>
      <p>
        <b>Compatibility:</b>
        <br />
        {/* {compatibility} */}
      </p>
      <p>
        <b>Mood:</b>
        <br />
        {/* {mood} */}
      </p>
      <p>
        <b>Color:</b>
        <br />
        {/* {color} */}
      </p>
      </>)
    : null
    }
    </>
  );
};

export default Home;
