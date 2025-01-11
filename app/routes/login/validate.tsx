import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useCallback } from 'react'
import { createServerFn } from '@tanstack/start'
import { sendLoginCode } from '@/app/routes/login/index'
import { setCookie } from 'vinxi/http'

export const validateCode = createServerFn({ method: 'POST' })
    .validator((data: FormData) => {
        const code = data.get('code')
        if (typeof code !== 'string') {
            throw new Error('Invalid code')
        }
    })
    .handler(async () => {
        // TODO: Validate code via db
        setCookie('token', '123', {
            path: '/',
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 30,
        });

        return {
            success: true,
            token: '123',
        }
    })


type ValidateSearch = {
    email: string
}

export const Route = createFileRoute('/login/validate')({
    component: RouteComponent,
    validateSearch: (search): ValidateSearch => {
        if (typeof search.email !== 'string') {
            throw new Error('Invalid email')
        }
        return {
            email: search.email,
        }
    }
})

function RouteComponent() {
    const navigate = useNavigate()
    const { email } = Route.useSearch()

    const onSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const response = await validateCode({ data: formData })
        console.log(response)
        if (response.success) {
            navigate({
                to: '/app',
                replace: true,
            })
        }
    }, [email]);

    const onResendCode = useCallback(async () => {
        const formData = new FormData()
        formData.append('email', email);
        const response = await sendLoginCode({ data: formData })
        console.log(response)
    }, [email]);

    return <div>
        <h1>Validate code</h1>
        <form onSubmit={onSubmit}>
            <input type="text" name="code" placeholder="Code" />
            <button type="submit">Submit</button>
        </form>
        <button type="button" onClick={onResendCode}>Resend code</button>
    </div>
}
