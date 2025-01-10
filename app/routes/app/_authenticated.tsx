import { createFileRoute, redirect } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/start'
import { authMiddleware } from '@/app/middleware/auth'

const getUserAuth = createServerFn()
    .middleware([authMiddleware])
    .handler(async () => {
        // TODO: Check if user is authenticated
        // and return user object
        return false
    })

export const Route = createFileRoute('/app/_authenticated')({
    beforeLoad: async () => {
        console.log('beforeLoad')
        const _isAuthed = await getUserAuth()
        if (!_isAuthed) {
            throw redirect({
                to: '/',
                replace: true,
            })
        }
    },
})
