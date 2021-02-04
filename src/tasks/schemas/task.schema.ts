import * as moongose from 'mongoose';

export const TaskSchema = new moongose.Schema({
  description: String,
  completed: Boolean,
});
