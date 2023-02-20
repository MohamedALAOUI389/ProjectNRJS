import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 1,
            max: 40,
        },
        lastName: {
            type: String,
            required: true,
            min: 1,
            max: 40,
        },
        email: {
            type: String,
            required: true,
            max: 40,
            unique: true
        },
        password: {
            type: String,
            require: true,
            min: 5,
            
        },
        picturePath: {
            type: String,
            default: "",
        },
        friends: {
            type: Array,
            default: []
        }

        
    }
);
const User = mongoose.model("User",UserSchema);
export default User;