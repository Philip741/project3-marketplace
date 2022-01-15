//const dotenv = require('dotenv');

// /**
//  * TODO(developer): Uncomment the following lines before running the sample.
//  */
// // The ID of your GCS bucket
// const bucketName = 'project3-marketplace';

// // The path to your file to upload
// const filePath = '../../public/furniture-yellow-chair.jpg';

// // The new ID for your GCS file
// const destFileName = 'furniture-yellow-chair.jpg';

// // Imports the Google Cloud client library
// const {Storage} = require('@google-cloud/storage');

// // Creates a client
// const storage = new Storage();

// async function uploadFile() {
//   await storage.bucket(bucketName).upload(filePath, {
//     destination: destFileName,
//   });

//   console.log(`${filePath} uploaded to ${bucketName}`);
// }

// uploadFile().catch(console.error);


// Imports the Google Cloud client library.
const {Storage} = require('@google-cloud/storage');

const gc = new Storage({
    projectId: 'composite-map-338013',
    scopes: 'https://www.googleapis.com/auth/cloud-platform',
    credentials: {
      client_email: "https://console.cloud.google.com/iam-admin/serviceaccounts/details/107743790399601501451?project=composite-map-338013",
      private_key: "./keyfile.json"
    }
})
// Instantiates a client. Explicitly use service account credentials by
// specifying the private key file. All clients in google-cloud-node have this
// helper, see https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/docs/authentication.md
//const projectId = 'composite-map-338013'
//const keyFilename = './keyfile.json'
//const storage = new Storage({projectId, keyFilename});

// Makes an authenticated API request.
async function listBuckets() {
  try {
    const [buckets] = await gc.getBuckets();

    console.log('Buckets:');
    buckets.forEach(bucket => {
      console.log(bucket.name);
    });
  } catch (err) {
    console.error('ERROR:', err);
  }
}
listBuckets();