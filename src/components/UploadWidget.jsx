import { Component } from "react";

class CloudinaryUploadWidget extends Component {
    state = {
        imageLinks: [],
        linkCopied: false,
    };

    componentDidMount() {
        var myWidget = window.cloudinary.createUploadWidget(
            {
                cloudName: "dqshopb2a",
                uploadPreset: "tetradmarketing",
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    console.log(result.info.url);
                    this.setState((prevState) => ({
                        imageLinks: [...prevState.imageLinks, result.info.url],
                    }));
                }
            }
        );
        document.getElementById("upload_widget").addEventListener(
            "click",
            function () {
                myWidget.open();
            },
            false
        );
    }

    copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(
            () => {
                console.log("Copying to clipboard was successful!");
                this.setState({ linkCopied: true }, () => {
                    setTimeout(() => {
                        this.setState({ linkCopied: false });
                    }, 2000); // Hide after 2 seconds
                });
            },
            (err) => {
                console.error("Could not copy text: ", err);
            }
        );
    };

    render() {
        const { linkCopied } = this.state;

        return (
            <div className="flex flex-col gap-4 justify-center relative">
                {linkCopied && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
                        <div className="text-white text-2xl">Link Copied</div>
                    </div>
                )}
                <button
                    id="upload_widget"
                    className="py-4 px-8 grid place-items-center bg-pink text-white rounded-full font-semibold text-xl"
                >
                    Upload image to get URL for blog
                </button>
                <div
                    id="linkBox"
                    className="flex flex-col justify-center text-center gap-4"
                >
                    <span>
                        Uploaded image links will appear under this line of
                        text:
                    </span>

                    {this.state.imageLinks.map((link, index) => (
                        <span
                            className="font-semibold cursor-pointer"
                            key={index}
                            onClick={() => this.copyToClipboard(link)}
                        >
                            {"Link " + (index + 1) + ": " + link}
                        </span>
                    ))}
                    <span className="flex flex-col">
                        <span>
                            Paste image links where you would like images to be
                            in the blog
                        </span>
                        <span>(The same way you add a paragraph or list)</span>
                    </span>

                    <span>Click on link to copy</span>
                </div>
            </div>
        );
    }
}

export default CloudinaryUploadWidget;
