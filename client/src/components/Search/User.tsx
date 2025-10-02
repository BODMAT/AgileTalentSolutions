import { Link } from "react-router-dom";
import type { Profile } from "../../types/profile";
import { RatingStars } from "../Reusable/RatingStars";

export function User({ id, name, city, age, skills, description, rating, imgURL }: Profile) {
    return (
        <Link to={`/profile/${id}`} className="bg-[var(--bg-gray)] rounded-lg p-5 border-1 border-[#8a8c8f] flex flex-col gap-3 transitioned hover:scale-105 hover:shadow-lg">
            <div className="flex gap-4 items-center">
                {imgURL && (
                    <img src={imgURL} alt="profile" className="w-13 h-13 rounded-full" />
                )}
                {!imgURL && (
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profile" className="w-13 h-13 rounded-full" />
                )}
                <div className="flex flex-col">
                    <h1 className="font-bold montseratt text-[20px]">{name}</h1>
                    <p className="text-[14px]">{city}, {age}</p>
                </div>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
                {skills.map((skill, index) => (
                    <p key={index} className="text-[14px] p-2 bg-[var(--accent-blue)] rounded-lg text-[var(--accent-blue-hover)]">{skill}</p>
                ))}
            </div>
            <div className="text-[14px]">{description}</div>
            <RatingStars rating={rating} />
        </Link>
    )
}