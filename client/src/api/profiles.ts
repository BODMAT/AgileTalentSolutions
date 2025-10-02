import type { Profile } from "../types/profile";

export const getProfiles = async (): Promise<Profile[]> => {
    return await fetch("http://localhost:4000/api/profiles")
        .then((res) => res.json())
        .catch((err) => console.error(err));
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