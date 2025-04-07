const copyBtn = document.querySelector(".copy-button")
const shareLink = document.querySelector(".share-link")

function textCopy () {
        navigator.clipboard.writeText(shareLink)
        alert("Copied")
}

copyBtn.addEventListener("click", textCopy)