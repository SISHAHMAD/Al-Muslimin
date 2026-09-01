
import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";

export default function StudentsTable() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // ============================================
    // FETCH STUDENTS
    // ============================================
    const fetchStudents = async () => {
        try {
            setLoading(true);
            setError("");

            const { data, error } = await supabase
                .from("profiles")
                .select("id, email, payment_status, is_access")
                .order("email", { ascending: true });

            if (error) {
                throw error;
            }

            setStudents(data || []);
        } catch (err) {
            console.error("Fetch students error:", err);
            setError(err.message || "Failed to fetch students");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    // ============================================
    // UPDATE PAYMENT STATUS
    // ============================================
    const handlePaymentStatusChange = async (id, status) => {
        try {
            const { error } = await supabase
                .from("profiles")
                .update({
                    payment_status: status,
                })
                .eq("id", id);

            if (error) {
                throw error;
            }

            // Update UI immediately
            setStudents((currentStudents) =>
                currentStudents.map((student) =>
                    student.id === id
                        ? {
                            ...student,
                            payment_status: status,
                        }
                        : student
                )
            );
        } catch (err) {
            console.error(
                "Payment status update error:",
                err
            );

            alert(
                err.message ||
                "Failed to update payment status"
            );
        }
    };

    // ============================================
    // UPDATE ACCESS
    // ============================================
    const handleAccessChange = async (id, value) => {
        const isAccess = value === "yes";

        try {
            const { error } = await supabase
                .from("profiles")
                .update({
                    is_access: isAccess,
                })
                .eq("id", id);

            if (error) {
                throw error;
            }

            // Update UI immediately
            setStudents((currentStudents) =>
                currentStudents.map((student) =>
                    student.id === id
                        ? {
                            ...student,
                            is_access: isAccess,
                        }
                        : student
                )
            );
        } catch (err) {
            console.error(
                "Access update error:",
                err
            );

            alert(
                err.message ||
                "Failed to update access"
            );
        }
    };

    // ============================================
    // LOADING
    // ============================================
    if (loading) {
        return (
            <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
                <div className="mx-auto h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-gray-900" />

                <p className="mt-3 text-sm text-gray-500">
                    Loading students...
                </p>
            </div>
        );
    }

    // ============================================
    // ERROR
    // ============================================
    if (error) {
        return (
            <div className="rounded-xl border border-red-200 bg-red-50 p-6">
                <p className="text-sm font-medium text-red-700">
                    {error}
                </p>

                <button
                    onClick={fetchStudents}
                    className="mt-3 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm p-6 text-center">

            {/* ========================================
                HEADER
            ======================================== */}
            <div className="border-b border-gray-200 px-2 py-2">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="mt-1 text-sm text-gray-500">
                            Manage student payment and access.
                        </p>
                    </div>

                    <div className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
                        {students.length} Students
                    </div>

                </div>
            </div>

            {/* ========================================
                TABLE
            ======================================== */}
            <div className="overflow-x-auto">

                <table className="w-full border-collapse">

                    <thead>
                        <tr className="border-b border-gray-200 bg-gray-50">

                            {/* EMAIL */}
                            <th className="px-6 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                                Email
                            </th>

                            {/* PAYMENT STATUS */}
                            <th className="px-6 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                                Payment Status
                            </th>

                            {/* ACCESS */}
                            <th className="px-6 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                                Is Access
                            </th>

                        </tr>
                    </thead>

                    <tbody>

                        {students.map((student) => (
                            <tr
                                key={student.id}
                                className="border-b border-gray-100 transition hover:bg-gray-50"
                            >

                                {/* ==================================
                                    EMAIL
                                ================================== */}
                                <td className="px-6 py-2">
                                    <p className="text-sm font-medium text-gray-900">
                                        {student.email}
                                    </p>
                                </td>


                                {/* ==================================
                                    PAYMENT STATUS
                                ================================== */}
                                <td className="px-6 py-2">

                                    <select
                                        value={
                                            student.payment_status ||
                                            "pending"
                                        }
                                        onChange={(e) =>
                                            handlePaymentStatusChange(
                                                student.id,
                                                e.target.value
                                            )
                                        }
                                        className={`
                                            rounded-lg
                                            border
                                            px-3
                                            py-2
                                            text-sm
                                            font-medium
                                            outline-none
                                            focus:ring-2
                                            focus:ring-indigo-500
                                            ${student.payment_status ===
                                                "success"
                                                ? "border-green-300 bg-green-50 text-green-700"
                                                : student.payment_status ===
                                                    "failed"
                                                    ? "border-red-300 bg-red-50 text-red-700"
                                                    : "border-yellow-300 bg-yellow-50 text-yellow-700"
                                            }
                                        `}
                                    >
                                        <option value="pending">
                                            Pending
                                        </option>

                                        <option value="success">
                                            Success
                                        </option>

                                        <option value="failed">
                                            Failed
                                        </option>
                                    </select>

                                </td>


                                {/* ==================================
                                    IS ACCESS
                                ================================== */}
                                <td className="px-6 py-2">

                                    <select
                                        value={
                                            student.is_access
                                                ? "yes"
                                                : "no"
                                        }
                                        onChange={(e) =>
                                            handleAccessChange(
                                                student.id,
                                                e.target.value
                                            )
                                        }
                                        className={`
                                            rounded-lg
                                            border
                                            px-3
                                            py-2
                                            text-sm
                                            font-medium
                                            outline-none
                                            focus:ring-2
                                            focus:ring-indigo-500
                                            ${student.is_access
                                                ? "border-green-300 bg-green-50 text-green-700"
                                                : "border-gray-300 bg-gray-50 text-gray-700"
                                            }
                                        `}
                                    >
                                        <option value="yes">
                                            Yes
                                        </option>

                                        <option value="no">
                                            No
                                        </option>
                                    </select>

                                </td>

                            </tr>
                        ))}


                        {/* ==================================
                            EMPTY STATE
                        ================================== */}
                        {students.length === 0 && (
                            <tr>
                                <td
                                    colSpan="3"
                                    className="px-6 py-2 text-center"
                                >
                                    <p className="text-sm font-medium text-gray-900">
                                        No students found
                                    </p>

                                    <p className="mt-1 text-sm text-gray-500">
                                        There are no students
                                        registered yet.
                                    </p>
                                </td>
                            </tr>
                        )}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

