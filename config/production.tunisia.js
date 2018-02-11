// App config the for production environment.
// Do not require this directly. Use ./src/config instead.

import winston from "winston"


const apiBaseUrl = process.env.API_URL || `https://www.openfisca.tn/api/v0.13.0`,
  gitHubProject = "openfisca/openfisca-tunisia",
  gitWebpageUrl = "https://github.com/openfisca/legislation-explorer",
  piwikConfig = {
    url: "https://stats.data.gouv.fr",
    siteId: 4,
    trackErrors: true
  },
  useCommitReferenceFromApi = true,
  websiteUrl = "http://www.openfisca.org/",
  winstonConfig = {
    transports: [
      new (winston.transports.Console)({timestamp: true}),
    ]
  }


export default {
  apiBaseUrl,
  gitHubProject,
  gitWebpageUrl,
  piwikConfig,
  useCommitReferenceFromApi,
  websiteUrl,
  winstonConfig
}
