export default interface ITask {
    id?: number,
    title: string,
    description: string,
    due_date: string,
    priority: boolean,
    user_id: NumberConstructor,
    status: number
}