import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useCallback } from 'react'
import { createServerFn } from "@tanstack/start"

export const sendLoginCode = createServerFn({ method: 'POST' })
  .validator((data: FormData) => {
    const email = data.get('email')
    console.log('validate email', email)
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

export const Route = createFileRoute('/login/')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()
  const onSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const response = await sendLoginCode({ data: formData })

      if (response.success) {
        navigate({
          to: '/login/validate',
          search: {
            email: formData.get('email') as string,
          },
        })
      }
    },
    [],
  )

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input type="email" name="email" placeholder="Email" />
        <button type="submit">Get code</button>
      </form>
    </div>
  )
}
