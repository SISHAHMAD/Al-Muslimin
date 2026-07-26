import { supabase } from "../../utils/supabase";
import { useEffect, useState } from "react";

const ProfileUser = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProfile = async () => {
            setLoading(true);

            // Get logged-in user
            const {
                data: { user },
            } = await supabase.auth.getUser();


            if (!user) {
                setProfile(null);
                setLoading(false);
                return;
            }

            // Get profile from profiles table
            const { data, error } = await supabase
                .from("profiles")
                .select("*")
                .eq("id", user.id)
                .single();

            if (error) {
                console.log(error);
            } else {
                setProfile(data);
            }

            setLoading(false);
        };

        getProfile();

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange(() => {
            getProfile();
        });

        return () => subscription.unsubscribe();
    }, []);

    return { profile, loading };
};

export default ProfileUser;