const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

const PostSchema = new mongoose.Schema({
  userId : {
    type: String,
    required: true
  },
  content: {
      type: String,
      required: true
  },
  image : {
    type: String,
    required: true
  }
});

PostSchema.set('toJSON', { virtuals: true })

PostSchema.virtual("user", {
  ref: "User",
  foreignField: "_id",
  localField: "userId"
});

PostSchema.virtual("category", {
  ref: "Category",
  foreignField: "_id",
  localField: "categoryId"
});



PostSchema.plugin(timestamps);
mongoose.model("Post", PostSchema)