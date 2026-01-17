import { useSession } from "next-auth/react";

export function useAuth() {
    const { data: session, status } = useSession();

    return {
        session,
        user: session?.user,
        isAuthenticated: status === "authenticated",
        isLoading: status === "loading",
    };
}
