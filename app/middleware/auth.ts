import { createMiddleware } from '@tanstack/start'

export const authMiddleware = createMiddleware().server(({ next }) => {
    // TODO: Check if user is authenticated
    return next({ context: { isAuthed: true } });
})
