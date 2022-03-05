export interface Model {
  _id: string
  createdAt?: string
  updatedAt?: string
}

export interface TaskDateType {
  startDate: Date
  dueDate: Date
}

export interface CommentType extends Model {
  comment: string
  creator: string
}

export interface AttachmentType extends Model {
  name: string
  uploader: string
  isCover: boolean
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

export interface MemberType extends Model {
  name: string
  email: string
  password?: string
  token?: string
  // eslint-disable-next-line camelcase
  email_verified_at?: string
  permissions?: Array<PermissionType>
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
  members?: Array<MemberType>
  labels?: Array<LabelType>
  userId?: string
  starred?: boolean
}
