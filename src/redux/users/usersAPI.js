import axios from "axios";

const usersAPI = {
  getAllUsers: async () => {
    // Simulating an API call to fetch all items
    try {
      const users = await new axios("https://jsonplaceholder.typicode.com/users");
      if (users.status === 200) {
        return users.data;
      } else {
        return [];
      }
    } catch (err) {
      console.log(err);
    }
  },
};

export default usersAPI;
