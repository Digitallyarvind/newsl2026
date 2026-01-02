
import { auth, signOut } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    if (!session?.user) {
        redirect("/api/auth/signin"); // Or proper login page
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
            <aside className="w-full md:w-64 bg-white border-r min-h-[200px] md:min-h-screen p-6 space-y-6">
                <div>
                    <h1 className="text-2xl font-bold text-brand-blue">Admin</h1>
                    <p className="text-sm text-muted-foreground">{session.user.email}</p>
                </div>

                <nav className="space-y-2">
                    <Link href="/admin" className="block p-2 hover:bg-gray-100 rounded font-medium">
                        Dashboard
                    </Link>
                    <Link href="/admin/enquiries" className="block p-2 hover:bg-gray-100 rounded font-medium">
                        Enquiries
                    </Link>
                </nav>

                <form action={async () => {
                    "use server"
                    await signOut()
                }}>
                    <Button variant="outline" className="w-full justify-start">
                        Sign Out
                    </Button>
                </form>
            </aside>

            <main className="flex-1 p-6 md:p-12">
                <div className="bg-white rounded-lg shadow-sm border p-6 min-h-[500px]">
                    {children}
                </div>
            </main>
        </div>
    );
}
