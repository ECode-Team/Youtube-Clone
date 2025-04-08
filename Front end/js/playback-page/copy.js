const copyBtn = document.querySelector(".copy-button")
const shareLink = document.querySelector(".share-link")

function textCopy () {

        const val = shareLink.textContent

        navigator.clipboard.writeText(val)
        alert("Copied")
}

copyBtn.addEventListener("click", textCopy)