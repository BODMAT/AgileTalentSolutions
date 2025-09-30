import express from 'express';
import { getProfiles } from '../controllers/profilesController.ts';

const router = express.Router();

router.get('/profiles', getProfiles);

export default router;
