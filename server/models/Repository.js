import mongoose from 'mongoose';

const repositorySchema = new mongoose.Schema(
  {
    githubRepoId: {
      type: Number,
      required: true,
      unique: true,
    },
    owner: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    language: {
      type: String,
      default: '',
    },
    stars: {
      type: Number,
      default: 0,
    },
    forks: {
      type: Number,
      default: 0,
    },
    issues: {
      type: Number,
      default: 0,
    },
    visibility: {
      type: String,
      default: 'public',
    },
    defaultBranch: {
      type: String,
      default: 'main',
    },
    repoUrl: {
      type: String,
      default: '',
    },
    updatedAtGithub: {
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

const Repository = mongoose.model('Repository', repositorySchema);

export default Repository;
