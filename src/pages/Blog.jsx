import { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

function Blog() {
    const [posts, setPosts] = useState([]);

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
        });

        return unsubscribe;
    }, []);

    return (
        <div className="flex flex-col">
            <h1>Blog</h1>
            <div className="flex flex-col gap-8">
                {posts.map((post) => (
                    <div className="inner flex flex-col gap-4" key={post.id}>
                        <h2 className="font-semibold text-5xl pb-8">
                            <Link to={`/blog/${post.id}`}>
                                {post.data.title}
                            </Link>
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
