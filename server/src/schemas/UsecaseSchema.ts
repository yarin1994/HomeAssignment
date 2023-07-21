import mongoose, { Document, Schema } from 'mongoose';

export interface UsecaseDocument extends Document {
  subject: string;
  description: string;
  action: string;
  salesforce_action: string;
  notes: string;
}

const useCaseSchema: Schema<UsecaseDocument> = new Schema<UsecaseDocument>({
  _id: mongoose.Types.ObjectId,
  subject: { type: String, required: true },
  description: [{ type: String, required: false }],
  action: { type: String, required: false },
  salesforce_action: { type: String, required: false },
  notes: { type: String, required: false },
});

export default mongoose.model<UsecaseDocument>('UseCase', useCaseSchema);
