import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import FileUpload from "../components/FileUpload";

function NewPost() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState([
        { type: "paragraph", subtitle: "", text: "" },
    ]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, "posts"), {
                title,
                category,
                content,
            });

            setTitle("");
            setCategory("");
            setContent([{ type: "paragraph", subtitle: "", text: "" }]);

            console.log("Blog post created successfully!");
        } catch (error) {
            console.error("Error creating blog post:", error);
        }
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
        <div className="min-h-screen grid place-items-center inner !max-w-pMax">
            <span className="mx-auto service-heading text-5xl font-bold w-fit border-b-green midScreen:border-b-4 pb-2">
                Upload image
            </span>
            <FileUpload />
            <span className="mx-auto service-heading text-5xl font-bold w-fit border-b-pink midScreen:border-b-4 pb-2">
                Create new post
            </span>
            <form
                className="flex flex-col gap-8 w-full"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col">
                    <label htmlFor="title" className="text-xl text-offWhite">
                        Title:
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
                        Category:
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
                    </div>
                ))}
                <button type="button" onClick={addNewContent}>
                    Add Content
                </button>
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
}

export default NewPost;
