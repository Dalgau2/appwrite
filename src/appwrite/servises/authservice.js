import conf from "../../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthServices {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) // Your API Endpoint
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  //   create th ethe account
  async createUserAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // login the user
        return this.loginUser({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }
  //   ----------------

  // Login user Method----->
  async loginUser({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }
  // ---------------->

  // getCurrentUser
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      
      throw error
    }
    return null;
  }
  // ---------->

  // logoutUser
  async logoutUser() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      throw new Error("account logout successfully");
    }
  }
}


const authServices = new AuthServices();
export default authServices;
