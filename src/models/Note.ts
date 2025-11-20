import mongoose, { Schema, models } from 'mongoose';

export interface INote {
  userId: string;
  title: string;
  author: string;
  category: string;
  description: string;
  isFavourite: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const noteSchema = new Schema<INote>(
  {
    userId: {
      type: String,
      required: true,
      index: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Note = models.Note || mongoose.model<INote>('Note', noteSchema);

export default Note;
