var express = require('express');
var router = express.Router();
import { Request, Response, NextFunction } from 'express';
import Heros from '@/const/heros.json';
import { getHeroById, getHeroProfileById } from '@/services/hero';

// Define the type for the route parameters
interface HeroParams {
  id: string; // or number if you parse it
}

interface Hero {
  id: string;
  name: string;
  image: string;
}

interface Abilities {
  [x: string]: number;
}

interface UpdateHeroProfileTypes {
  heroId: string;
  abilities: Abilities;
}

router.get('/', function (req: Request, res: Response, next: NextFunction) {
  res.status(200).json({ success: true, data: Heros });
});

router.get('/:id', function (req: Request, res: Response, next: NextFunction) {
  // Extract the 'id' parameter from req.params
  const id = req.params.id;
  const resource = getHeroById(id); // Replace with your actual logic

  if (resource) {
    res.status(200).json({ success: true, data: resource });
  } else {
    res.status(404).json({ success: false, message: 'Resource not found' });
  }
});

router.get('/:heroId/profile', function (req: Request, res: Response, next: NextFunction) {
  const id = req.params.id;
  const profile = getHeroProfileById(id); // Replace with your actual logic

  if (profile) {
    res.status(200).json({ success: true, data: profile });
  } else {
    res.status(404).json({ success: false, message: 'Resource not found' });
  }
});

router.patch('/:heroId/profile', function (req: Request, res: Response, next: NextFunction) {
  res.send('respond with a resource');
});

module.exports = router;
