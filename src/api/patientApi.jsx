import axios from "axios";

export const getPatients = () =>
   
  axios.get("https://fedskillstest.coalitiontechnologies.workers.dev", {
    auth: {
      username: "coalition",
      password: "skills-test"
    }
  });


  


