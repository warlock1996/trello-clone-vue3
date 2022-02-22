export interface Model {
  _id: string
  createdAt: string
  updatedAt: string
}

export interface TaskDateType {
  startDate: Date
  dueDate: Date
}

export interface CommentType {
  _id: string
  comment: string
}

export interface AttachmentType {
  _id: string
  url: string
}

export interface LabelType {
  _id: string
  text: string
  color: string
}

export interface PermissionType {
  board: Record<string, unknown>
  list: Record<string, unknown>
  task: Record<string, unknown>
}

export interface MemberModel extends Model {
  name: string
  email: string
  permissions: Array<PermissionType>
}

export interface TaskType extends Model {
  task: string
  description?: string
  date?: TaskDateType
  members?: Array<string>
  labels?: Array<string>
  reporter?: Array<string>
  comments?: Array<CommentType>
  attachment?: Array<AttachmentType>
}

export interface ListType extends Model {
  name: string
  tasks: Array<TaskType>
}

export interface BoardType extends Model {
  name: string
  lists?: Array<ListType>
  members?: Array<MemberModel>
  labels?: Array<LabelType>
  userId?: string
  starred?: boolean
}
