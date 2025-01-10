import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/_authenticated/groups')({
  component: Groups,
})

function Groups() {
  return <div>Hello "/groups"!</div>
}
