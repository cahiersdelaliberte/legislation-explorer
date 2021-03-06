description: "Navigating to a parameter should show its current and past values",

steps: [
  SearchBarComponent.searchFor(smicQuery),
  AppComponent.goToFirstResult(),
  {
    "ParameterComponent.title": smicResultTitle,
    "ParameterComponent.description": smicResultDescription,
    "ParameterTableComponent.firstLineCaption": ongoingDateRange,
    "ParameterTableComponent.firstLineValue": floatValue,
    "ParameterTableComponent.secondLineCaption": dateRange,
    "ParameterTableComponent.secondLineValue": floatValue,
  },
  ParameterComponent.goBack(),
]
