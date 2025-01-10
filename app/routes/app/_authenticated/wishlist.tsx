import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/_authenticated/wishlist')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/wishlist"!</div>
}
