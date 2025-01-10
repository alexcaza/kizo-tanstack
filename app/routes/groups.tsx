import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/groups')({
    component: Groups,
})

function Groups() {
    return <div>Hello "/groups"!</div>
}
