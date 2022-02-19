export interface Model {
  _id: string
  createdAt: string
  updatedAt: string
}

export interface TaskDate {
  dueDate: Date
  startDate: Date
  endDate: Date
}

export interface Comment {
  _id: string
  comment: string
}

export interface Attachment {
  _id: string
  url: string
}

export interface Label {
  _id: string
  text: string
  color: string
}

export interface Permission {
  board: Record<string, unknown>
  list: Record<string, unknown>
  task: Record<string, unknown>
}

export interface MemberModel extends Model {
  name: string
  email: string
  permissions: Array<Permission>
}

export interface TaskModel extends Model {
  task: string
  description?: string
  date?: TaskDate
  members?: Array<string>
  labels?: Array<string>
  reporter?: Array<string>
  comments?: Array<Comment>
  attachment?: Array<Attachment>
}

export interface ListModel extends Model {
  name: string
  tasks: Array<TaskModel>
}

export interface BoardModel extends Model {
  name: string
  lists?: Array<ListModel>
  members?: Array<MemberModel>
  labels?: Array<Label>
  userId?: string
  starred?: boolean
}
