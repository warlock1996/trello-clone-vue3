export type TaskDate = {
  dueDate: Date
  startDate: Date
  endDate: Date
}

export type Comment = {
  _id: string
  comment: string
}

export type Attachment = {
  _id: string
  url: string
}

export type Label = {
  _id: string
  text: string
  color: string
}

export type Permission = {
  board: Record<string, unknown>
  list: Record<string, unknown>
  task: Record<string, unknown>
}

export type Member = {
  _id: string
  name: string
  email: string
  permissions: Array<Permission>
}

export type Task = {
  _id: string
  task: string
  description?: string
  date?: TaskDate
  members?: Array<string>
  labels?: Array<string>
  reporter?: Array<string>
  comments?: Array<Comment>
  attachment?: Array<Attachment>
}

export type List = {
  _id: string
  name: string
  tasks: Array<Task>
}

export type Board = {
  name: string
  lists: Array<List>
  members: Array<Member>
  labels: Array<Label>
  userId: string
}
