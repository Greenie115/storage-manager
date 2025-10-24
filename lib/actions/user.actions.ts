"use server";

import { createAdminClient } from "@/lib/appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";
import { Query } from "node-appwrite";

const getUserByEmail = async (email: string) => {
  const { databases } = await createAdminClient();
  const result = await databases.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.userId,
    [Query.equal("email", email)],
  );
  return result.total > 0 ? result.documents[0] : null;
};

const sendEmail = async (email: string) => {};

const createAccount = async ({
  fullName,
  email,
}: {
  fullName: string;
  emailL: string;
}) => {
  const exsistingUser = await getUserByEmail(email);

  const accountId = await sendEmailOTP({ email });
};
