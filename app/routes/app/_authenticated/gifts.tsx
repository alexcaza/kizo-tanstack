import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/_authenticated/gifts')({
  component: Gifts,
})

function Gifts() {
  return <div>Hello "/gifts"!</div>
}
