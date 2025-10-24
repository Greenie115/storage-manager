export const appwriteConfig = {
  endpoint: process.env.NEXT_PUBLIC_ENDPOINT!,
  projectId: process.env.NEXT_PUBLIC_APPLICATION_ID!,
  databaseId: process.env.NEXT_PUBLIC_DATABASE_ID!,
  userId: process.env.NEXT_PUBLIC_USER_ID!,
  filesId: process.env.NEXT_PUBLIC_APPWRITE_FILES_DB!,
  bucketId: process.env.NEXT_PUBLIC_APPWRITE_BUCKET!,
  secretKey: process.env.NEXT_APPRITE_SECRET!,
};
