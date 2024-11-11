import api from "../config/api";
import ITask from "../interfaces/ITask";

const getTasks = () => {
  return api.get<Array<ITask>>("/task");
};

const getTaskById = (id: number) => {
  return api.get<ITask>(`/task/${id}`);
};

const createTask = (data: ITask) => {
  return api.post(`/task`, data);
};

const updateStatus = (id: number, status: number) => {
  return api.put<ITask>(`/task/${id}`, status);
};

const deleteTask = (id: number) => {
  return api.delete<ITask>(`/task/${id}`);
};

const TaskService = {
    getTasks, getTaskById, createTask, updateStatus, deleteTask
}

export default TaskService;