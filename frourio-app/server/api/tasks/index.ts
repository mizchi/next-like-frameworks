import { Task } from '$prisma/client'

export type Methods = {
  get: {
    query?: {
      limit?: number
    }

    resBody: Task[]
  }
  post: {
    reqBody: Pick<Task, 'label'>
    resBody: Task
  }
}
