public class AutoRefreshReportChartController {
   
 	@AuraEnabled
    public static String getSessionId() {
      return UserInfo.getSessionId();
    }

}