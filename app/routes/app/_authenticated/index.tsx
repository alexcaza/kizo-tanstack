import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/_authenticated/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/app/"!</div>
}
