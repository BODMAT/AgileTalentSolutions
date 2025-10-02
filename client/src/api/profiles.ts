import type { Profile } from "../types/profile";

let cachedProfiles: Profile[] | null = null;
export const getProfiles = async (): Promise<Profile[]> => {
    if (cachedProfiles) return cachedProfiles;
    try {
        const res = await fetch("http://localhost:4000/api/profiles");
        const data: Profile[] = await res.json();
        cachedProfiles = data;
        return data;
    } catch (err) {
        console.error(err);
        return [];
    }
};

export const getProfilesWithSearch = async (skills: string[]): Promise<Profile[]> => {
    return await fetch("http://localhost:4000/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ skills }),
    })
        .then((res) => res.json())
        .catch((err) => console.error(err));
};