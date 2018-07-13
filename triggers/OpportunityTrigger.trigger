trigger OpportunityTrigger on Opportunity (after update) {
    for(Opportunity newOpp : trigger.new){
        EventBus.publish(new CandidateUpdate__e(Message__c = 'Opportunity with name: "'+newOpp.name+'"" was updated!'));
    }
}