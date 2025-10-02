import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProfiles } from "../../api/profiles";
import type { Profile } from "../../types/profile";
import { CustomMessage, NoData } from "../Reusable/Helpers";
import { RatingStars } from "../Reusable/RatingStars";

export function Profile() {
    const { id } = useParams<{ id: string }>();
    const [profile, setProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        getProfiles()
            .then((profiles) => profiles.find((p) => p.id === Number(id)) || null)
            .then((foundProfile) => setProfile(foundProfile))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <CustomMessage message="Loading..." />;
    if (!profile) return <NoData />;
    return (
        <section className="myContainer">
            <div className="flex gap-5 items-center justify-center flex-col mt-10 max-w-[30vw] max-lg:max-w-[50vw] max-md:max-w-full bg-[#ffffff79] p-5 rounded-xl mx-auto">
                <div className="w-30">
                    {profile.imgURL && <img src={profile.imgURL} alt="img" />}
                    {!profile.imgURL && <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="img" />}
                </div>
                <h2 className="font-bold text-5xl montseratt">{profile.name}</h2>
                <p>{profile.age}, {profile.city}</p>
                <div className="flex gap-2 flex-wrap">
                    {profile.skills.map((skill, index) => (
                        <p key={index} className="text-[14px] p-2 bg-[var(--accent-blue)] rounded-lg text-[var(--accent-blue-hover)]">{skill}</p>
                    ))}
                </div>
                <p> <span className="font-bold mb-1">About</span> <br />{profile.description}</p>
                <RatingStars rating={profile.rating} />
            </div>
        </section>
    )
}