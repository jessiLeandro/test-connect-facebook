// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// This file contains the configuration options for this sample app.

const config = {};

// The OAuth client ID from the Google Developers console.
config.oAuthClientID =
  "264652981469-c4hg47dm5kt5t2as0bmrdp8krv7lacnq.apps.googleusercontent.com";

// The OAuth client secret from the Google Developers console.
config.oAuthclientSecret = "4AtTR6vmhNl6ePDHijACYtnd";

// The callback to use for OAuth requests. This is the URL where the app is
// running. For testing and running it locally, use 127.0.0.1.
config.oAuthCallbackUrl = "http://127.0.0.1:8000/auth/google/callback";

// The port where the app should listen for requests.
config.port = 8080;

// The scopes to request. The app requires the photoslibrary.readonly and
// plus.me scopes.
config.scopes = [
  "https://www.googleapis.com/auth/photoslibrary.readonly",
  "profile"
];

// The number of photos to load for search requests.
config.photosToLoad = 150;

// The page size to use for search requests. 100 is reccommended.
config.searchPageSize = 100;

// The page size to use for the listing albums request. 50 is reccommended.
config.albumPageSize = 50;

// The API end point to use. Do not change.
config.apiEndpoint = "https://photoslibrary.googleapis.com";

module.exports = config;

// https://accounts.google.com/o/oauth2/auth?redirect_uri=storagerelay%3A%2F%2Fhttp%2Flocalhost%3A8000%3Fid%3Dauth565626&response_type=permission%20id_token&scope=email%20profile%20openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcontacts.readonly&openid.realm=&client_id=264652981469-7p3j5emctou0agrkfqo4cr2skm5hnve3.apps.googleusercontent.com&ss_domain=http%3A%2F%2Flocalhost%3A8000&fetch_basic_profile=true&gsiwebsdk=2
