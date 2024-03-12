import mongoose from "mongoose";

const tweetSchema = new Schema ({
    content: {
        type: String,
        required: true
    },

    owne: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {})

export const Tweet = mongoose.model("Tweet", tweetSchema)