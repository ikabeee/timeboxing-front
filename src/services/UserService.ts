import api from "../config/api";
import IUser from "../interfaces/IUser";

const getUsers = () => {
  return api.get<Array<IUser>>("/user");
};

const getUserById = (id: number) => {
  return api.get<IUser>(`/user/${id}`);
};

const createUser = (data: IUser) => {
  return api.post(`/user`, data);
};

const updateUser = (id: number, data: IUser) => {
  return api.put<IUser>(`/user/${id}`, data);
};

const deleteUser = (id: number) => {
  return api.delete<IUser>(`/user/${id}`);
};

const UserService = {
    getUsers, getUserById, createUser, updateUser, deleteUser
}

export default UserService;