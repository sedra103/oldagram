const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postSectionEl = document.getElementById("post-section")


function renderPost() {
    let listItems = ""
    for(let i = 0; i < posts.length; i++) {
        const post = posts[i]
        listItems += `
            <div class="user-info">
                <img src="${post.avatar}" class="profile-pic" >
                <div class="user-details">
                    <h3>${post.name}</h3>
                    <p>${post.location}</p>
                </div>
            </div>
                
            <img src="${post.post}" class="post-image">
            <div class="interactions">
                <div class="icons">
                    <img src="images/icon-heart.png" onclick="likePost(${i})">
                    <img src="images/icon-comment.png">
                    <img src="images/icon-dm.png">
                </div>
                <p class="like-count" id="like-count-${i}">${post.likes} Likes</p>
                <h4>${post.username}</h4>
                <span>${post.comment}</span>
            </div>
            <div class="divider"></div>
        `
    }
    postSectionEl.innerHTML = listItems
}

renderPost()


function likePost(postIndex) {
    let likeEl = document.getElementById(`like-count-${postIndex}`)
    let post = posts[postIndex]
    post.likes += 1
    likeEl.textContent = `${post.likes} Likes`
}


