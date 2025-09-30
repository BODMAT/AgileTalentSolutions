import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import type { Request, Response } from 'express';
import { ProfileSchema } from '../types.ts';
import type { Profile } from '../types.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const profilesFile = path.join(__dirname, '../data/profiles.json');

export const getProfiles = (req: Request, res: Response) => {
    try {
        const data = fs.readFileSync(profilesFile, 'utf-8');
        const profiles: unknown = JSON.parse(data);
        const parsedProfiles = ProfileSchema.array().parse(profiles);
        res.json(parsedProfiles);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to read profiles' });
    }
};