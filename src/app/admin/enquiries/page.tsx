
import db from "@/lib/db";

// Checking package.json... date-fns not in dependencies. I'll use native Intl.DateTimeFormat.

export default async function EnquiriesPage() {
    const enquiries = await db.enquiry.findMany({
        orderBy: { createdAt: 'desc' },
    });

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold">Enquiries</h2>
            </div>

            <div className="rounded-md border bg-white overflow-hidden">
                <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 text-gray-700 font-medium">
                        <tr>
                            <th className="px-4 py-3">Date</th>
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Email</th>
                            <th className="px-4 py-3">Subject</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {enquiries.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">
                                    No enquiries found.
                                </td>
                            </tr>
                        ) : (
                            enquiries.map((enquiry) => (
                                <tr key={enquiry.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-3 whitespace-nowrap">
                                        {new Date(enquiry.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="px-4 py-3 font-medium">{enquiry.name}</td>
                                    <td className="px-4 py-3 text-muted-foreground">{enquiry.email}</td>
                                    <td className="px-4 py-3 max-w-xs truncate" title={enquiry.subject || ''}>
                                        {enquiry.subject || '-'}
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ring-1 ring-inset ${enquiry.status === 'NEW' ? 'bg-blue-50 text-blue-700 ring-blue-700/10' :
                                            enquiry.status === 'CONTACTED' ? 'bg-yellow-50 text-yellow-800 ring-yellow-600/20' :
                                                'bg-green-50 text-green-700 ring-green-600/20'
                                            }`}>
                                            {enquiry.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <button className="text-brand-blue hover:underline">View</button>
                                        {/* View details implementation can be added later */}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
