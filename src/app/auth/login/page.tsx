
"use client"

import { useFormState, useFormStatus } from "react-dom"
import { authenticate } from "@/lib/actions"
import { Button } from "@/components/ui/Button"

export default function LoginPage() {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined)

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to Admin Portal
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action={dispatch} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-blue sm:text-sm sm:leading-6 px-3"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-blue sm:text-sm sm:leading-6 px-3"
                            />
                        </div>
                    </div>

                    <div className="text-sm text-red-500 min-h-[20px]">
                        {errorMessage && <p>{errorMessage}</p>}
                    </div>

                    <div>
                        <LoginButton />
                    </div>
                </form>
            </div>
        </div>
    )
}

function LoginButton() {
    const { pending } = useFormStatus()

    return (
        <Button className="w-full justify-center bg-brand-blue hover:bg-brand-blue/90" aria-disabled={pending}>
            {pending ? "Signing in..." : "Sign in"}
        </Button>
    )
}
