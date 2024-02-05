import axiosSecure from "."

export const postUser = async (user) => {
      const { data } = await axiosSecure.post('/users', user);
      return data;
}

export const postTeammate = async (teammate) => {
      const { data } = await axiosSecure.post('/teammates', teammate);
      return data;
}

export const getTeammates = async (email, sort) => {
      const { data } = await axiosSecure.get(`/teammates/${email}?sort=${sort}`);
      return data;
}

export const makeInactive = async (_id) => {
      const { data } = await axiosSecure.patch(`/make_inactive/${_id}`);
      return data;
}

export const deleteTheTeammate = async (_id) => {
      const { data } = await axiosSecure.delete(`/delete_teammate/${_id}`);
      return data;
}