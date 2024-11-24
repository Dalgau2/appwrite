import conf from "../../conf/conf";
import { ID, Client, Databases, Storage, Account, Query } from "appwrite";

export class Services {
  client = Client();
  account;
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) // Your API Endpoint
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  //   create post
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          userId,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      throw error;
    }
  }
  //   --------------------

  // update document
  async updatePost(slug, { title, content, featuredImage, status, userId }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      throw error;
    }
  }
  //   ------------------------

  // delete post
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      throw error;
      return false;
    }
  }
  //   -------------------

//   get particular one post
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      throw error;
      console.log("error in get post method");
      return false;
    }
  }
//   --------------------------

// get all post
async getPosts(queries=[Query.equal("status","active")]){
    try{
        return await this.databases.listDocuments(
            conf.appwriteDataBaseId,
            conf.appwriteCollectionId,
            queries
        )
    }catch(error){
        throw error
        console.log("error in get all post method")
        return false
    }
}
// -----------------

// Assigment file upload and file delete make them in differnet file

// file uploade
async uploadFile(file){
    try {

        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
        )

    }catch(erro){
        throw error
    }
}
// ---------------------

// delete file 
async deleteFile(fileId){
    try{
       return await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId
       )
       return true

    }catch(error){
        throw error
        return false
    }
}
// -----------------------

// get file preview
getFilePreview(fileId){
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
    )
}

}


const services=new Services()
export default services
