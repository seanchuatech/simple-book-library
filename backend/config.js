import 'dotenv/config';

export const PORT = process.env.PORT;

export const mongoDBURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.xuymich.mongodb.net/books-collection?retryWrites=true&w=majority`