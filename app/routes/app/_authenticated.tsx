import { createFileRoute, redirect } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/start'
import { getCookie } from 'vinxi/http'

const getUserAuth = createServerFn()
    .handler(async () => {
        return !!getCookie('token')
    })

export const Route = createFileRoute('/app/_authenticated')({
    beforeLoad: async () => {
        const isAuthed = await getUserAuth()
        if (!isAuthed) {
            throw redirect({
                to: '/',
                replace: true,
            })
        }
    },
})
