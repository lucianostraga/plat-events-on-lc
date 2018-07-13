# Lightning Components and Platform Events

## Auto Refresh Opportunities Report Chart example 

This example provides a Lightning Component that could be placed anywhere and will be listen for Platform Events. The implementation is based on a regular trigger on opportunity that will create a Platform Event instance. The Lighting Component will import CometD library to listen for events of that type. Every time a new event is processed, the lightning component will refresh the chart.
