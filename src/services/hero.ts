import Heros from '@/const/heros.json';

export function getHeroById(id: string) {
  return Heros.find((hero) => hero.id === id);
}

export function getHeroProfileById(id: string) {
  return Heros.find((hero) => hero.id === id)?.abilities;
}
