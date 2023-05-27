import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import CloudinaryUploadWidget from "../components/UploadWidget";

function NewPost() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState([
        { type: "paragraph", subtitle: "", text: "" },
    ]);

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError(null);

        if (title === "" || category === "") {
            setError("Title and category are required.");
            return;
        }

        setIsLoading(true);

        try {
            await addDoc(collection(db, "posts"), {
                title,
                category,
                content,
            });

            setTitle("");
            setCategory("");
            setContent([{ type: "paragraph", subtitle: "", text: "" }]);
        } catch (error) {
            setError("Error creating blog post. Please try again later.");
            console.error("Error creating blog post:", error);
        }

        setIsLoading(false);
    };

    const addNewContent = () => {
        setContent((prevContent) => [
            ...prevContent,
            { type: "paragraph", subtitle: "", text: "" },
        ]);
    };

    const updateContent = (index, field, value) => {
        setContent((prevContent) => {
            const newContent = [...prevContent];
            newContent[index][field] = value;
            return newContent;
        });
    };

    const handleContentTypeChange = (index, newType) => {
        setContent((prevContent) => {
            const newContent = [...prevContent];
            newContent[index].type = newType;
            if (newType === "list") {
                newContent[index].listItems = [""];
            }
            return newContent;
        });
    };

    return (
        <div className="min-h-screen grid place-items-center inner !max-w-pMax py-16">
            <span className="mx-auto service-heading text-5xl font-bold w-fit border-b-green border-b-4 pb-2">
                Upload image
            </span>
            <div className="flex inner justify-center py-8">
                <CloudinaryUploadWidget />
                <hr />
            </div>
            <span className="mx-auto service-heading text-5xl font-bold w-fit border-b-pink border-b-4 pb-2">
                Create new post
            </span>
            {error && <div>{error}</div>}
            <form
                className="flex flex-col gap-8 w-full"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col">
                    <label htmlFor="title" className="text-xl text-offWhite">
                        Title: <span className="text-sm">Required</span>
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="category" className="text-xl text-offWhite">
                        Category: <span className="text-sm">Required</span>
                    </label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                    >
                        <option value="">Select a category</option>
                        <option value="OrgSyn">OrgSyn</option>
                        <option value="InnProd">InnProd</option>
                        <option value="MarkedF">MarkedF</option>
                    </select>
                </div>
                {content.map((contentItem, index) => (
                    <div key={`content${index}`}>
                        <div className="flex flex-col">
                            <label
                                htmlFor={`contentType${index}`}
                                className="text-xl text-offWhite"
                            >
                                Content Type:
                            </label>
                            <select
                                id={`contentType${index}`}
                                value={contentItem.type}
                                onChange={(e) =>
                                    handleContentTypeChange(
                                        index,
                                        e.target.value
                                    )
                                }
                                className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                            >
                                <option value="paragraph">Paragraph</option>
                                <option value="list">List</option>
                                <option value="image">Image</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor={`subtitle${index}`}
                                className="text-xl text-offWhite"
                            >
                                Subtitle:
                            </label>
                            <input
                                type="text"
                                id={`subtitle${index}`}
                                value={contentItem.subtitle}
                                onChange={(e) =>
                                    updateContent(
                                        index,
                                        "subtitle",
                                        e.target.value
                                    )
                                }
                                className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                            />
                        </div>
                        {contentItem.type === "paragraph" && (
                            <div className="flex flex-col">
                                <label
                                    htmlFor={`paragraph${index}`}
                                    className="text-xl text-offWhite"
                                >
                                    Paragraph:
                                </label>
                                <textarea
                                    id={`paragraph${index}`}
                                    value={contentItem.text}
                                    onChange={(e) =>
                                        updateContent(
                                            index,
                                            "text",
                                            e.target.value
                                        )
                                    }
                                    className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                                />
                            </div>
                        )}
                        {contentItem.type === "list" && (
                            <>
                                <div className="flex flex-col">
                                    <label
                                        htmlFor={`listTitle${index}`}
                                        className="text-xl text-offWhite"
                                    >
                                        List Title:
                                    </label>
                                    <input
                                        type="text"
                                        id={`listTitle${index}`}
                                        value={contentItem.text}
                                        onChange={(e) =>
                                            updateContent(
                                                index,
                                                "text",
                                                e.target.value
                                            )
                                        }
                                        className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                                    />
                                </div>
                                {contentItem.listItems.map(
                                    (listItem, listItemIndex) => (
                                        <div
                                            className="flex flex-col"
                                            key={`listItem${listItemIndex}`}
                                        >
                                            <label
                                                htmlFor={`listItem${listItemIndex}`}
                                                className="text-xl text-offWhite"
                                            >
                                                List Item {listItemIndex + 1}:
                                            </label>
                                            <input
                                                type="text"
                                                id={`listItem${listItemIndex}`}
                                                value={listItem}
                                                onChange={(e) => {
                                                    const newListItems = [
                                                        ...contentItem.listItems,
                                                    ];
                                                    newListItems[
                                                        listItemIndex
                                                    ] = e.target.value;
                                                    updateContent(
                                                        index,
                                                        "listItems",
                                                        newListItems
                                                    );
                                                }}
                                                className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                                            />
                                        </div>
                                    )
                                )}
                                <button
                                    type="button"
                                    onClick={() => {
                                        const newListItems = [
                                            ...contentItem.listItems,
                                            "",
                                        ];
                                        updateContent(
                                            index,
                                            "listItems",
                                            newListItems
                                        );
                                    }}
                                >
                                    Add List Item
                                </button>
                            </>
                        )}
                        {contentItem.type === "image" && (
                            <div className="flex flex-col">
                                <label
                                    htmlFor={`imageUrl${index}`}
                                    className="text-xl text-offWhite"
                                >
                                    Image URL:
                                </label>
                                <input
                                    type="text"
                                    id={`imageUrl${index}`}
                                    value={contentItem.imageUrl}
                                    onChange={(e) =>
                                        updateContent(
                                            index,
                                            "imageUrl",
                                            e.target.value
                                        )
                                    }
                                    className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                                />
                            </div>
                        )}
                    </div>
                ))}
                <button type="button" onClick={addNewContent}>
                    Add Content
                </button>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
}

export default NewPost;
