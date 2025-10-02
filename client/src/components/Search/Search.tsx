import { useEffect, useState } from "react";
import { User } from "./User";
import type { Profile } from "../../types/profile";
import { getProfilesWithSearch } from "../../api/profiles";
import { SearchForm } from "./SearchForm";
import { CustomMessage, NoData } from "../Reusable/Helpers";

export function Search() {
    const [options, setOptions] = useState<string[]>([]);
    const [users, setUsers] = useState<Profile[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getProfilesWithSearch(options).then((data) => setUsers(data)).finally(() => setLoading(false));;
    }, [options]);

    if (loading) return <CustomMessage message="Loading..." />;
    if (!users || users.length === 0) return <NoData />;

    return (
        <section className="myContainer my-10">
            <div className="flex flex-col items-center gap-10">
                <h2 className="font-bold text-center text-5xl montseratt">Search Profiles</h2>
                <SearchForm options={options} setOptions={setOptions} />
            </div>
            <div className="grid grid-cols-3 gap-7 mt-10 max-md:grid-cols-2 max-sm:grid-cols-1">
                {users.map((user) => (
                    <User key={user.id} {...user} />
                ))}
            </div>
        </section>
    );
}
