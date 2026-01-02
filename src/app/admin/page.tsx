
import db from "@/lib/db";
import Link from "next/link";

export default async function AdminDashboard() {
    const totalEnquiries = await db.enquiry.count();
    const newEnquiries = await db.enquiry.count({ where: { status: 'NEW' } });

    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold">Dashboard</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                    <h3 className="text-lg font-semibold text-blue-900">New Enquiries</h3>
                    <p className="text-4xl font-bold text-blue-600 mt-2">{newEnquiries}</p>
                    <div className="mt-4">
                        <Link href="/admin/enquiries" className="text-sm text-blue-700 hover:underline">
                            View all &rarr;
                        </Link>
                    </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900">Total Enquiries</h3>
                    <p className="text-4xl font-bold text-gray-600 mt-2">{totalEnquiries}</p>
                </div>
            </div>
        </div>
    );
}
