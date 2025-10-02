import type { Rect } from "../types/components";

// Inspection of migration with a small margin
export const checkOverlap = (r1: Rect, others: Rect[], margin = 4) =>
    others.every(
        (r2) =>
            r1.x + r1.width + margin < r2.x ||
            r1.x - margin > r2.x + r2.width ||
            r1.y + r1.height + margin < r2.y ||
            r1.y - margin > r2.y + r2.height
    );

// Obtaining a safe position inside the container
export const getSafePosition = (
    width: number,
    height: number,
    containerWidth: number,
    containerHeight: number,
    placed: Rect[],
    maxTries = 1000
) => {
    let x = 0, y = 0, tries = 0, fits = false;

    while (!fits && tries < maxTries) {
        x = Math.random() * (containerWidth - width);
        y = Math.random() * (containerHeight - height);
        fits = checkOverlap({ x, y, width, height }, placed, 4);
        tries++;
    }

    if (!fits) x = y = 0;
    return { x, y };
};

export const randomOffset = () => (Math.random() * 40 - 20);

export function getRandomSkills(arr: string[], count: number): string[] {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}