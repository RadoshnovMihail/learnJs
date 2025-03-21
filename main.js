const newPost  = (post, addedAt = Date()) => ({
    ...post,
    addedAt
})

const firstPost = {
    id: 1,
    author: 'Misha'
}

console.log(newPost(firstPost))