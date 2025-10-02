import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import type { Request, Response } from 'express';
import { ProfileSchema } from '../types.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const profilesFile = path.join(__dirname, '../data/profiles.json');

export const getProfiles = (req: Request, res: Response) => {
    try {
        const data = fs.readFileSync(profilesFile, 'utf-8');
        const profiles: unknown = JSON.parse(data);
        console.log(profiles);
        const parsedProfiles = ProfileSchema.array().parse(profiles);
        console.log(parsedProfiles);
        res.json(parsedProfiles);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to read profiles' });
    }
};

export const getProfilesWithSearch = (req: Request, res: Response) => {
    try {
        const { skills } = req.body;
        const data = fs.readFileSync(profilesFile, 'utf-8');
        const profiles: unknown = JSON.parse(data);
        const parsedProfiles = ProfileSchema.array().parse(profiles);

        if (!skills || skills.length === 0) {
            return res.json(parsedProfiles);
        }

        const results = parsedProfiles
            .map(profile => {
                const matchingSkills = profile.skills.filter(skill =>
                    skills.some((s: string) => s.toLowerCase() === skill.toLowerCase())
                );
                const score = Math.min(matchingSkills.length, 5); // max 5
                return { ...profile, score };
            })
            .filter(profile => profile.score > 0)
            .sort((a, b) => {
                if (b.score !== a.score) return b.score - a.score; //desc
                return (b.rating ?? 0) - (a.rating ?? 0); //rating desc
            });

        res.json(results);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to search profiles' });
    }
};
