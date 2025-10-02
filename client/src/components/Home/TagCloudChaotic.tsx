import { motion } from "framer-motion";
import { useTagCloud } from "../../hooks/useTagCloud";
import { randomOffset } from "../../utils/functions";

const skills = ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Zustand", "PostgreSQL", "HTML", "CSS"];

export function TagCloudChaotic() {
    const { positions, sizes, colors, cursor, initialized, containerWidth, containerHeight } = useTagCloud({ skills });

    const containerLeft = (window.innerWidth - containerWidth) / 2;
    const containerTop = 50;

    return (
        <div
            className="relative rounded-xl mx-auto"
            style={{ width: containerWidth, height: containerHeight }}
        >
            {positions.map((pos, i) => {
                const cursorX = cursor ? cursor.x - containerLeft : null;
                const cursorY = cursor ? cursor.y - containerTop : null;

                const animateX = initialized
                    ? Math.min(Math.max(pos.x + (cursorX !== null ? (cursorX - containerWidth / 2) * 0.05 : randomOffset()), 0), containerWidth - sizes[i].width)
                    : pos.x;

                const animateY = initialized
                    ? Math.min(Math.max(pos.y + (cursorY !== null ? (cursorY - containerHeight / 2) * 0.05 : randomOffset()), 0), containerHeight - sizes[i].height)
                    : pos.y;
                return (
                    <motion.div
                        key={skills[i]}
                        className="absolute px-3 py-1 rounded-2xl text-[var(--text-color)] font-medium"
                        style={{
                            left: pos.x,
                            top: pos.y,
                            width: sizes[i].width,
                            height: sizes[i].height,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: colors[i % colors.length],
                        }}
                        animate={{ x: animateX - pos.x, y: animateY - pos.y }}
                        transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, repeatType: "mirror" }}
                    >
                        {skills[i]}
                    </motion.div>
                );
            })}
        </div>
    );
}

