import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/start'
import { useCallback } from 'react'

const sendLoginCode = createServerFn({ method: 'POST' })
    .validator((data: unknown) => {
        if (!(data instanceof FormData)) {
            throw new Error('Invalid form data')
        }
        const email = data.get('email')
        console.log(email)
        if (typeof email !== 'string') {
            throw new Error('Invalid email')
        }

    })
    .handler(async ({ data }) => {
        console.log(data)

        return {
            success: true,
        }
    })

export const Route = createFileRoute('/login')({
    component: RouteComponent,
})

function RouteComponent() {
    const onSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const response = await sendLoginCode({ data: formData })
        console.log(response)
    }, []);

    return <div>
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
            <input type="email" name="email" placeholder="Email" />
            <button type="submit">Get code</button>
        </form>
    </div>
}
