import axiosSecure from "."

export const postUser = async (user) => {
      const { data } = axiosSecure.post('/users', user);
      return data;
}

export const postTeammate = async (teammate) => {
      const { data } = axiosSecure.post('/teammates', teammate);
      return data;
}