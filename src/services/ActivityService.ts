import api from "../config/api";
import IActivity from "../interfaces/IActivity";

const getActivities = () => {
  return api.get<Array<IActivity>>("/activity");
};

const getActivityById = (id: number) => {
  return api.get<IActivity>(`/activity/${id}`);
};

const createActivity = (data: IActivity) => {
  return api.post(`/activity`, data);
};

const updateActivity = (data: IActivity, id: number) => {
  return api.put<IActivity>(`/activity/${id}`, data);
};

const deleteActivity = (id: number) => {
  return api.delete<IActivity>(`/activity/${id}`);
};

const ActivityService = {
    getActivities, getActivityById, createActivity, updateActivity, deleteActivity
}

export default ActivityService;