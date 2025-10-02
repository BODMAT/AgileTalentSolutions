import type { Profile } from "../types/profile";

export const API_BASE_URL = "https://agiletalentsolutions.onrender.com/api"

let cachedProfiles: Profile[] | null = null;

export const getProfiles = async (): Promise<Profile[]> => {
    if (cachedProfiles) return cachedProfiles;
    try {
        const res = await fetch(`${API_BASE_URL}/profiles`);

        if (!res.ok) {
            console.error(`API Error: ${res.status} ${res.statusText}`);
            return [];
        }

        const data: Profile[] = await res.json();
        if (!Array.isArray(data)) {
            console.error("API returned non-array data:", data);
            return [];
        }

        cachedProfiles = data;
        return data;
    } catch (err) {
        console.error("Failed to fetch profiles:", err);
        return [];
    }
};

export const getProfilesWithSearch = async (skills: string[]): Promise<Profile[]> => {
    try {
        const res = await fetch(`${API_BASE_URL}/search`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ skills }),
        });

        if (!res.ok) {
            console.error(`Search API Error: ${res.status} ${res.statusText}`);
            return [];
        }

        const data = await res.json();
        if (!Array.isArray(data)) {
            console.error("Search API returned non-array data:", data);
            return [];
        }

        return data as Profile[];
    } catch (err) {
        console.error("Failed to search profiles:", err);
        return [];
    }
};