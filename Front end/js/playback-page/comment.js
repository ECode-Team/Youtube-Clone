const commentInput = document.querySelector(".comment-input");
const commentBtn = document.querySelector(".comment-btn");
const commentList = document.querySelector(".comment-list");

// Simulated current user info (test)
const currentUser = {
  username: "@nigger",
  avatar: "imgs/profiles/test-avatar.png",
};

// Function to render a single comment
function renderComment({ username, avatar, text, likes = 0 }) {
  const commentHTML = `
    <div class="comment">
       <div class="avatar"><img src="imgs/profiles/Untitled-1.psd6.png"></div>
    <div class="content">
        <div class="username">${username}</div>
        <div class="comment-text">${text}</div>
        <div class="comment-action">
          <button class="button-like">
            <img class="comment-icon" src="imgs/Icons/playback page/like-icon.svg">
            <span class="comment-likes">${likes}</span>
          </button>
          <button class="button-dislike">
            <img class="comment-icon" src="imgs/Icons/playback page/dislike-icon.svg">
          </button>
          <button class="button-reply">Reply</button>
        </div>
      </div>
      <div class="ellipsis custom"><img src="imgs/Icons/playback page/more-icon.png"></div>
    </div>
  `;
  commentList.insertAdjacentHTML("afterbegin", commentHTML);
}

// Submit comment (no API)
function commentText() {
  const text = commentInput.value.trim();
  if (text !== "") {
    const newComment = {
      username: currentUser.username,
      avatar: currentUser.avatar,
      text: text,
      likes: 0,
    };

    // Add to DOM
    renderComment(newComment);

    // Clear input
    commentInput.value = "";
  } else {
    alert("Oops! Please write a comment.");
  }
}

// Event listener
commentBtn.addEventListener("click", commentText);
