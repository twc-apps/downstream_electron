"use strict";

const Manifest = require("../../manifest/loader/manifest").Manifest;
const translation = require('../../translation/index');

module.exports = function (api, onSuccess, onFailure, target, manifestUrl) {
  let manifest = new Manifest();
  manifest.load(manifestUrl)
      .then(() => {
        api.manifestController.cacheManifest(manifest);
        onSuccess(manifest.getJsonInfo());
      }, (err) => {
        onFailure(translation.getError(translation.e.manifests.LOADING_FAILED, manifestUrl), err);
      });
};
