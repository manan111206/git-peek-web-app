import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    githubId: {
      type: Number,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    name: {
      type: String,
      default: '',
    },
    avatar: {
      type: String,
      default: '',
    },
    bio: {
      type: String,
      default: '',
    },
    company: {
      type: String,
      default: '',
    },
    location: {
      type: String,
      default: '',
    },
    blog: {
      type: String,
      default: '',
    },
    twitter: {
      type: String,
      default: '',
    },
    followers: {
      type: Number,
      default: 0,
    },
    following: {
      type: Number,
      default: 0,
    },
    publicRepos: {
      type: Number,
      default: 0,
    },
    publicGists: {
      type: Number,
      default: 0,
    },
    profileUrl: {
      type: String,
      default: '',
    },
    hireable: {
      type: Boolean,
      default: false,
    },
    createdAtGithub: {
      type: Date,
    },
    lastFetched: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

export default User;
