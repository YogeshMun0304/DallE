import mongoose from 'mongoose';
 const Post = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is Required']
    },
    prompt:{
        type: String,
        required: true
    },
    photo:{
        type: String,
        require: true
    }

 })

 const PostSchema = mongoose.model('Post', Post);
 export default PostSchema









