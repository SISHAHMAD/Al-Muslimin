import { supabase } from "../../utils/supabase";
import { useEffect, useState } from "react";

const AuthUser = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUser = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();


            setUser(user);
            setLoading(false);
        };

        getUser();

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, session) => {

            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);
    return { user, loading };
}
export default AuthUser;