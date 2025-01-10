import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/_authenticated/recipients')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/recipients"!</div>
}
