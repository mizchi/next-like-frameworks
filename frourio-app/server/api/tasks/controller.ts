import { defineController } from './$relay'
import { getTasks, createTask } from '$/service/tasks'

export default defineController(() => ({
  get: async () => ({ status: 200, body: await getTasks() }),
  post: async ({ body }) => ({
    status: 201,
    body: await createTask(body.label)
  })
}))
