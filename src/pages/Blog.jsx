import { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

function Blog() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, "posts"), where("category", "!=", ""));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const loadedPosts = [];
            querySnapshot.forEach((doc) => {
                loadedPosts.push({
                    id: doc.id,
                    data: doc.data(),
                });
            });
            setPosts(loadedPosts);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    if (loading) {
        return (
            <div className="inner grid place-items-center min-h-screen">
                <div className="text-4xl animate-spin">. . .</div>
                <div></div>
            </div>
        );
    }

    return (
        <div className="inner flex flex-col">
            <h1 className="mt-32 service-heading text-5xl font-bold w-fit border-b-pink midScreen:border-b-4 pb-3">
                Blogg
            </h1>
            <h2 className="mt-8 text-2xl mb-16">
                Les mer om markedsføring og strategier gjennom våre blogger!
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
                {posts.map((post) => (
                    <div className="flex flex-col" key={post.id}>
                        <div className="h-40 w-full mb-4 bg-offWhite"></div>
                        <span className="font-semibold text-2xl line-clamp-2">
                            <Link to={`/blog/${post.id}`}>
                                {post.data.title}
                            </Link>
                        </span>
                        <div className="flex mt-auto">
                            <button className="border-b-green w-fit border-b-4 text-xl">
                                Les Mer
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
