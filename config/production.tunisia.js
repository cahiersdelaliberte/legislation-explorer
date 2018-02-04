// App config the for production environment.
// Do not require this directly. Use ./src/config instead.

const apiBaseUrl = process.env.API_URL || `https://www.openfisca.tn/api/v0.13.0`,
  gitHubProject = "openfisca/openfisca-tunisia",
  gitWebpageUrl = "https://github.com/openfisca/legislation-explorer",
  piwikConfig = {
    url: "https://stats.data.gouv.fr",
    siteId: 4,
    trackErrors: true
  },
  useCommitReferenceFromApi = false,
  websiteUrl = "http://www.openfisca.org/"


export default {
  apiBaseUrl,
  gitHubProject,
  gitWebpageUrl,
  piwikConfig,
  useCommitReferenceFromApi,
  websiteUrl
}
