import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/_authenticated/groups/$groupId')({
  component: Group,
  loader: async ({ params }) => {
    return {
      groupId: params.groupId,
    }
  },
})

function Group() {
  return <div>Hello "/groups/$groupId"!</div>
}
