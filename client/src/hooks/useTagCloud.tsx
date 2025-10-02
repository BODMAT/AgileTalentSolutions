import { useEffect, useState } from "react";
import type { Rect, Skill, SkillPos } from "../types/components";
import { getSafePosition } from "../utils/functions";

const availableGradients = [
    "linear-gradient(to right, var(--accent-indigo) 85%, var(--accent-indigo-hover) 100%)",
    "linear-gradient(to right, var(--accent-blue) 85%, var(--accent-blue-hover) 100%)",
];

interface UseTagCloudProps {
    skills: Skill[];
    characterWidth?: number;
    characterHeight?: number;
}

export function useTagCloud({
    skills,
}: UseTagCloudProps) {
    const [positions, setPositions] = useState<SkillPos[]>([]);
    const [sizes, setSizes] = useState<{ width: number; height: number }[]>([]);
    const [colors, setColors] = useState<string[]>([]);
    const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);
    const [container, setContainer] = useState<{ width: number; height: number }>(() => {
        const w = window.innerWidth;
        if (w < 768) return { width: w - 30, height: 200 };
        if (w < 1024) return { width: w - 50, height: 300 };
        return { width: 500, height: 500 };
    });

    const [character, setCharacter] = useState(() => {
        const w = window.innerWidth;
        if (w < 768) return { width: 9, height: 20 };
        if (w < 1024) return { width: 12, height: 30 };
        return { width: 15, height: 40 };
    });
    const [initialized, setInitialized] = useState(false);


    const generatePositions = () => {
        const placed: Rect[] = [];
        const newPositions: SkillPos[] = [];
        const newSizes: { width: number; height: number }[] = [];
        const newColors: string[] = [];

        skills.forEach((skill) => {
            const width = skill.length * character.width + 20;
            const height = character.height;
            const pos = getSafePosition(width, height, container.width, container.height, placed);
            placed.push({ x: pos.x, y: pos.y, width, height });
            newPositions.push(pos);
            newSizes.push({ width, height });
            newColors.push(availableGradients[Math.floor(Math.random() * availableGradients.length)]);
        });

        setPositions(newPositions);
        setSizes(newSizes);
        setColors(newColors);
        setInitialized(true);
    };

    // mouse move
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // resize
    useEffect(() => {
        const handleResize = () => {
            const w = window.innerWidth;
            if (w < 768) {
                setContainer({ width: w - 30, height: 200 });
                setCharacter({ width: 9, height: 20 });
            } else if (w < 1024) {
                setContainer({ width: w - 50, height: 300 });
                setCharacter({ width: 12, height: 30 });
            } else {
                setContainer({ width: 500, height: 500 });
                setCharacter({ width: 15, height: 40 });
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    // generate positions on mount
    useEffect(() => {
        generatePositions();
    }, [container]);

    return { positions, sizes, colors, cursor, initialized, containerWidth: container.width, containerHeight: container.height };
}
