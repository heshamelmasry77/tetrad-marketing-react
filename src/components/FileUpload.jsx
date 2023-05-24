import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { firebaseStorage } from "../firebase"; // Updated this line

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            setMessage("Please select a file to upload");
            return;
        }

        const storageRef = ref(firebaseStorage, `images/${file.name}`); // Updated this line
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // Progress function ...
            },
            (error) => {
                // Handle unsuccessful uploads
                setMessage(`Upload failed: ${error.message}`);
            },
            () => {
                // Handle successful uploads on complete
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setMessage(`File available at ${downloadURL}`);
                });
            }
        );
    };

    return (
        <div className="p-4">
            <input
                type="file"
                onChange={handleFileChange}
                className="mb-4 text-white border-2 border-gray-300"
            />
            <button
                onClick={handleUpload}
                className="py-2 px-4 text-white bg-blue-500 hover:bg-blue-700"
            >
                Upload
            </button>
            <div
                className={
                    message.startsWith("Upload failed")
                        ? "mt-4 text-red-500"
                        : "mt-4 text-green-500"
                }
            >
                {message}
            </div>
        </div>
    );
};

export default FileUpload;
