// app/routes/index.tsx
import * as fs from 'node:fs'
import { createFileRoute, Link, useRouter } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/start'

const filePath = 'count.txt'

async function readCount() {
    return parseInt(
        await fs.promises.readFile(filePath, 'utf-8').catch(() => '0'),
    )
}

const getCount = createServerFn({
    method: 'GET',
}).handler(() => {
    return readCount()
})

const updateCount = createServerFn({ method: 'POST' })
    .validator((d: number) => d)
    .handler(async ({ data }) => {
        const count = await readCount()
        await fs.promises.writeFile(filePath, `${count + data}`)
    })

export const Route = createFileRoute('/')({
    component: Home,
    loader: async () => await getCount(),
})

function Home() {
    const router = useRouter()
    const state = Route.useLoaderData()

    return (
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Welcome to Kizo</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              to="/gifts"
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              Manage Gifts
            </Link>
            <Link
              to="/recipients"
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              Manage Recipients
            </Link>
          </div>
        </div>
      );
}