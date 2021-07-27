const imageSearch = require('google-images');

module.exports = {
    getArtworkImage: post => {

        const client = new imageSearch('aaa85ab66f54710ea', 'AIzaSyDqGVCxuxEb2QxnCSTHTZ5DfJ6HYkGRY28');

        client.search(`${post.title}`)
    }
}
