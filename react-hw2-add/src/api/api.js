import React from 'react';

const Api = (id) => {
    return fetch(` https://jsonplaceholder.typicode.com/posts/${id}`).then(value => value.json())
};

export default Api;