/* postreply Entity */
var reply = function(replyId,postId,Author,body,time) {
    this.replyId =replyId;
    this.postId =postId;
    this.replyAuthor =Author;
    this.replyBody =body;
    this.replyTime =time;
}

module.exports = reply;
