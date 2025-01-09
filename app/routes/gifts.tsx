import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/gifts')({
    component: Gifts,
})

function Gifts() {
    return <div>Hello "/gifts"!</div>
}
