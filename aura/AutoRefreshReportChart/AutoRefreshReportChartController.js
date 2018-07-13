({
    onCometdLoaded : function(component, event, helper) {
      var cometd = new org.cometd.CometD();
      component.set('v.cometd', cometd);
      if (component.get('v.sessionId') != null)
        helper.connectCometd(component);
    },

	doinit : function(component, event, helper) { 
        
        // Disconnect CometD when leaving page
        window.addEventListener('unload', function(event) {
            helper.disconnectCometd(component);
        });
        
        // Retrieve session id
        var action = component.get('c.getSessionId');
        action.setCallback(this, function(response) {
            if (component.isValid() && response.getState() === 'SUCCESS') {
                component.set('v.sessionId', response.getReturnValue());
                if (component.get('v.cometd') != null)
                    helper.connectCometd(component);
            }
            else
                console.error(response);
        });
        $A.enqueueAction(action);
        
        component.set("v.frameSrc",'https://lucianoprototype--c.na59.visual.force.com/apex/AutoRefreshChart?id='+component.get("v.reportChartId"));
    }
})