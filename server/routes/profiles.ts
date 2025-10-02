import express from 'express';
import { getProfiles, getProfilesWithSearch } from '../controllers/profilesController.js';

const router = express.Router();

router.get('/profiles', getProfiles);

router.post('/search', getProfilesWithSearch);

export default router;
