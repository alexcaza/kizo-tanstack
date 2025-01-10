import { Link } from "@tanstack/react-router";

export function Nav() {
    return (
        <>
            <h1 className="text-4xl font-bold mb-8">Welcome to Kizo</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                    to="/app/gifts"
                    className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
                >
                    Manage Gifts
                </Link>
                <Link
                    to="/app/recipients"
                    className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
                >
                    Manage Recipients
                </Link>
            </div>
        </>
    )
}