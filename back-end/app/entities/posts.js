/* posts Entity */
var posts = function (postId, postauthor,postheading,postbody,postcategory,posttime) {

    this.postId = postId;
    this.postAuthor = postauthor;
    this.postTitle = postheading;
    this.postBody = postbody;
    this.postCategory = postcategory;
    this.postTime = posttime;
}

module.exports = posts;
