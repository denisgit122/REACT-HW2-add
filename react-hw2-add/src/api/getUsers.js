export const getUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json());
}

export const getPosts = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(resp => resp.json());
}