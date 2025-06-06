export const API_ROUTE = {
    // HOME: "/trang-chu-hacom",
  
    // //Banner
    // GET_LIST_BANNER: "TblBanner/get-list",
  
  LOGIN: "/api/v1/login/access-token",
  REGISTER:"/api/v1/users/signup",
    SENDEMAIL: "/api/v1/password-recovery/{email}",
    LOGIN_USERNAME:"/api/v1/users/me",
    /////apiarea
    GET_AREA:"/192.168.100.101/zone/pk",
    GET_AREA_DETAIL:"/192.168.100.101/zone/pk/Phân Khu",
   GET_HOUSE_TYPE_DETAIL: (zone: string, type: string) =>
    `/192.168.100.101/zone/pk/${encodeURIComponent(zone)}/${encodeURIComponent(type)}`,
  };