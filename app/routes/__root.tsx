import { Nav } from '@/app/components/Nav'
import kizoCSS from '@/lib/styles/kizo.css?url'
import { QueryClient } from '@tanstack/react-query'

import {
    Outlet,
    ScrollRestoration,
    createRootRoute,
    createRootRouteWithContext,
} from '@tanstack/react-router'
import { Meta, Scripts } from '@tanstack/start'
import type { ReactNode } from 'react'

export const Route = createRootRouteWithContext<{ queryClient: QueryClient, isAuthed: boolean }>()({
    head: () => ({
        meta: [
            {
                charSet: 'utf-8',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                title: 'Kizo',
            },
        ],
        links: [
            { rel: 'stylesheet', href: kizoCSS },
        ],
    }),
    component: RootComponent,
})

function RootComponent() {
    return (
        <RootDocument>
            <Nav />
            <Outlet />
        </RootDocument>
    )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html>
            <head>
                <Meta />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    )
}