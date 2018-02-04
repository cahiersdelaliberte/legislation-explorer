// App config in a production environment.

const HOST = process.env.HOST || 'https://www.openfisca.tn'
  apiBaseUrl = process.env.API_URL || 'https://www.openfisca.tn/api/v0.13.0',
  gitHubProject = 'openfisca/openfisca-tunisia',
  gitWebpageUrl = 'https://github.com/openfisca/legislation-explorer',
  piwikConfig = {
    url: 'https://stats.data.gouv.fr',
    siteId: 4,
    trackErrors: true
  },
  useCommitReferenceFromApi = false,
  websiteUrl = 'https://openfisca.org',
  ui = {
    en: {
      countryName: 'Tunisia',
    },
    fr: {
      countryName: 'Tunisie',
    }
  }


export default {
  apiBaseUrl,
  gitHubProject,
  gitWebpageUrl,
  piwikConfig,
  ui,
  useCommitReferenceFromApi,
  websiteUrl
}
