class Youtube {
    
    //properties of youtube class start
    private channelName : string;
    private channelSubscribers : number;
    private videoUploadedDate : string;
    private videoTitle : string;
    private videoDescription : string;
    private videoViews : number;
    private videoLikes : number;
    private videoDisLikes : number;
    private videoComments : any;
    private videoRelatedVideos : any;
    //properties of youtube class end

    // a constructer which is used to initialize a class fields
    constructor (channelName : string, channelSubscribers : number, videoUploadedDate : string, videoTitle : string, videoDescription : string, videoViews : number, videoLikes : number, videoDisLikes : number, videoComments : any, videoRelatedVideos : any){
        this.channelName = channelName;
        this.channelSubscribers = channelSubscribers;
        this.videoUploadedDate =videoUploadedDate;
        this.videoTitle = videoTitle;
        this.videoDescription = videoDescription;
        this.videoViews = videoViews;
        this.videoLikes = videoLikes;
        this.videoDisLikes = videoDisLikes;
        this.videoComments = videoComments;
        this.videoRelatedVideos = videoRelatedVideos;
    }// end constructer

    // methods which can access and modify

    getChannelName = () =>{
        return this.channelName;
    }    


    getChannelSubscribers = () =>{
        return this.channelSubscribers;
    }    
    setChannelSubscribers = (channelSubscribers : number)=>{
        this.channelSubscribers = channelSubscribers;
    }

    getVideoUploadedDate = () =>{
        return this.videoUploadedDate;
    }    


    getVideoTitle = () =>{
        return this.videoTitle;
    }    


    getVideoDescription = () =>{
        return this.videoDescription;
    }    


    getVideoViews = () =>{
        return this.videoViews;
    }  
    setVideoViews = (videoViews : number) =>{
         this.videoViews = videoViews;
    }    


    getVideoLikes = () =>{
        return this.videoLikes;
    }    
    setVideoLikes = (videoLikes : number)=>{
        this.videoLikes = videoLikes;
    }

    getVideoDisLikes = () =>{
        return this.videoDisLikes;
    }    
    setVideoDisLikes = (videoDisLikes : number)=>{
        this.videoDisLikes = videoDisLikes;
    }

    getVideoComments = () =>{
        return this.videoComments;
    }    
    setVideoComments = (videoComments : any)=>{
        this.videoComments = this.videoComments.concat(videoComments);
    }

    getVideoRelatedVideos = () =>{
        return this.videoRelatedVideos;
    } 

}


class Facebook{

    constructor(private fb_id:string, private fb_username:string, private workAndEducation:any, private placesYouLived:any, private contactAndBasicInfo:any, private familyMembersRelationShipStatus:any, private detailsAboutYou:any, private allFriends:string[]){

        this.fb_id = fb_id;
        this.fb_username = fb_username;
        this.workAndEducation = workAndEducation;
        this.placesYouLived = placesYouLived;
        this.contactAndBasicInfo = contactAndBasicInfo;
        this.familyMembersRelationShipStatus = familyMembersRelationShipStatus;
        this.detailsAboutYou = detailsAboutYou;
        this.allFriends = allFriends;
    }

    getFB_id = ()=>{
        return this.fb_id;
    }

    getFB_username = ()=>{
        return this.fb_username;
    }
    setFB_username = (fb_username:string)=>{
        return this.fb_username = fb_username;
    }

    getWorkAndEducation = ()=>{
        return this.workAndEducation;
    }
    setWorkAndEducation = (Work?:any,Highschool?:any,University?:any)=>{
        //this.videoComments = videoComments.concat(videoComments);

         this.workAndEducation[0].work = this.workAndEducation[0].work.concat(Work);
         this.workAndEducation[1].education[0].highSchool = this.workAndEducation[1].education[0].highSchool.concat(Highschool);
         this.workAndEducation[1].education[1].university = this.workAndEducation[1].education[1].university.concat(University);
    }

    getPlacesYouLived = ()=>{
        return this.placesYouLived;
    }
    setPlacesYouLived = (PlacesYouLived:any)=>{
         this.placesYouLived = PlacesYouLived;
    }


    getContactAndBasicInfo = ()=>{
        return this.contactAndBasicInfo;
    }
    setContactAndBasicInfo = (ContactAndBasicInfo:any)=>{
         this.contactAndBasicInfo = ContactAndBasicInfo;
    }

    getFamilyMembersRelationShipStatus = ()=>{
        return this.familyMembersRelationShipStatus;
    }
    setFamilyMembersRelationShipStatus = (FamilyMembersRelationShipStatus:any)=>{
         this.familyMembersRelationShipStatus = FamilyMembersRelationShipStatus;
    }

    getDetailsAboutYou = ()=>{
        return this.detailsAboutYou;
    }
    setDetailsAboutYou = (DetailsAboutYou:any)=>{
         this.detailsAboutYou.aboutYou = DetailsAboutYou;
    }

    getAllFriends = ()=>{
        return this.allFriends;
    }
    setAllFriends = (allFriends:any)=>{
         this.allFriends = this.allFriends.concat(allFriends);;
    }
}





 let channelName:string = "edwisor";
 let channelSubscribers:number = 12300;
 let videoUploadedDate:string = "13 june 2018";
 let videoTitle:string = "Type script basics";
 let videoDescription:string = "Typescript basics are prerequisites to learn angular. So please learn Typescript thoroughly and start the Typescript assignment and submit it and access angular module lessons.";
 let videoViews:number = 624;
 let videoLikes:number = 501;
 let videoDisLikes:number = 2;
 let videoComments:any = [{name: "Rohan", email: "rohan@gmail.com",comment: "good"},{name: "Srujana", email: "srujana@gmail.com", comment: "Thanks a lot ! You saved me."},{name:"Koushik", email: "koushik@gmail.com",comment: "Great tutorials !!! I love to see more tutorials from you."},{name: "funny", email: "funny@gmail.com", comment: "Nice tutorials..!"}];
 let videoRelatedVideos:any = [{channel: "edwisor", title: "Jquery ajax", views: 4210},{channel: "edwisor", title: "Jquery basics", views: 5010},{channel: "edwisor", title: "Responsive web design", views: 3115},{channel: "edwisor", title: "Angular", views: 210}, {channel: "edwisor", title: "Node js", views: 4312}];
 

let youtubeVideo = new Youtube(channelName, channelSubscribers, videoUploadedDate, videoTitle, videoDescription, videoViews, videoLikes, videoDisLikes, videoComments, videoRelatedVideos);


let getYoutubeData:any = [{channelName:youtubeVideo.getChannelName() , channelSubscribers:youtubeVideo.getChannelSubscribers() , videoUploadedDate:youtubeVideo.getVideoUploadedDate(), videoTitle:youtubeVideo.getVideoTitle(), videoDescription:youtubeVideo.getVideoDescription(), videoViews:youtubeVideo.getVideoViews(), videoLikes:youtubeVideo.getVideoLikes(), videoDisLikes:youtubeVideo.getVideoDisLikes(), videoComments:youtubeVideo.getVideoComments(), recommendedVideos:youtubeVideo.getVideoRelatedVideos()}]; 
let completeYoutubeData:any ={youtubeData:getYoutubeData}; 

console.log("Youtube class data");

console.log(completeYoutubeData);

console.log("After setting some data to youtube class");

youtubeVideo.setChannelSubscribers(12340);
youtubeVideo.setVideoViews(700);
youtubeVideo.setVideoLikes(600);
youtubeVideo.setVideoDisLikes(4);
youtubeVideo.setVideoComments([{name: "Ravi", email: "ravi@gmail.com",comment: "Very great tutorials"},{name: "Sanjana", email: "sanjana@gmail.com", comment: "Thanks."},{name:"Karthik", email: "karthik@gmail.com",comment: "I really appreciate you."},{name: "phaneendra", email: "phaneendraraosuddapalli@gmail.com", comment: "Keep it up, great tutorials"}]);

getYoutubeData = [{channelName:youtubeVideo.getChannelName() , channelSubscribers:youtubeVideo.getChannelSubscribers() , videoUploadedDate:youtubeVideo.getVideoUploadedDate(), videoTitle:youtubeVideo.getVideoTitle(), videoDescription:youtubeVideo.getVideoDescription(), videoViews:youtubeVideo.getVideoViews(), videoLikes:youtubeVideo.getVideoLikes(), videoDisLikes:youtubeVideo.getVideoDisLikes(), videoComments:youtubeVideo.getVideoComments(), recommendedVideos:youtubeVideo.getVideoRelatedVideos()}]; 
completeYoutubeData ={youtubeData:getYoutubeData}; 
console.log(completeYoutubeData);


let Work:string[]= ["facebook","microsoft","google"];  

let HighSchool:string[] = ["Sri Chaitanya Junior College","SNVHS","Bhashyam","Triveni"];
let University:string[] = ["CMR College of engineering and technology"];

let Education:any = [{highSchool:HighSchool},{university:University}]; // clubs highschool and university = education


let CurrentCity:string = "Kukatpally";
let HomeTown:string = "Hyderabad";
let OtherCities:string[] = ["Yusufguda","Madhapur","Madhura Nagar"];


let BasicInfo:any = [{dob:"27 November"},{yearOfBirth:1995},{gender:"Male"}];
let Email:string = "phaneendraraosuddapalli@gmail.com";
let Address:string = "4-39-245/c, hanuman nagar, jagadgirigutta, hyderabad 500037.";
let Phone:number = 9573210866;

let FamilyMembersID:string[] = ["100010506934961","100010506932971","100010506439949"];


let RelationShipStatus:string = "Single";


let AllFriendsIds:string[] = ["100010506934961","100010506932971","100010506439949","100010506934961","100010506932971","100010506439949","100010506934961","100010506932971","100010506439949"];

//all fields ready now
let FB_id:string = "100010506939961";  
let FB_username:string = "phaneendra rao";  
let WorkAndEducation:any = [{work:Work},{education:Education}] // clubs work and education =  workandeducation
let PlacesYouLived:any = [{currentCity:CurrentCity},{homeTown:HomeTown},{otherCities:OtherCities}]; // clubs Current city, hometown and otherplaces = places you lived
let ContactAndBasicDetailsInfo:any = [{basicInfo:BasicInfo},{email:Email},{address:Address},{phone:Phone}]; 
let FamilyMembersRelationShipStatus:any = [{familyMembersID:FamilyMembersID},{relationShipStatus:RelationShipStatus}];
let DetailsAboutYou:any = {aboutYou:"blah blah blah blah blah blah"};
 

let facebookData = new Facebook(FB_id, FB_username, WorkAndEducation, PlacesYouLived, ContactAndBasicDetailsInfo, FamilyMembersRelationShipStatus, DetailsAboutYou, AllFriendsIds);

let getFacebookData:any = [{FB_ID:facebookData.getFB_id()},{FB_username:facebookData.getFB_username()},{WorkAndEducation:facebookData.getWorkAndEducation()},{PlacesYouLived:facebookData.getPlacesYouLived()},{ContactAndBasicDetailsInfo:facebookData.getContactAndBasicInfo()},{FamilyMembersRelationShipStatus:facebookData.getFamilyMembersRelationShipStatus()},{DetailsAboutYou:facebookData.getDetailsAboutYou()},{AllFriends:facebookData.getAllFriends()}]; 
let completeFacebookData:any ={Facebook:getFacebookData}; 

console.log("Facebook class data");

console.log(completeFacebookData);



facebookData.setFB_username("Phaneendra rao suddapalli");

Work = ["facebook 1","microsoft 1","google 1"];
HighSchool = ["Sri Chaitanya Techno School","Ramakrishna High School"];
University = ["JNTUH"];

facebookData.setWorkAndEducation(Work,HighSchool,University);
facebookData.setDetailsAboutYou("Its my about section");

// facebookData.setDetailsAboutYou();
// facebookData.setContactAndBasicInfo();
// facebookData.setFamilyMembersRelationShipStatus();
// facebookData.setPlacesYouLived();
// facebookData.setAllFriends();

console.log("After setting some data to facebook class");
getFacebookData = [{FB_ID:facebookData.getFB_id()},{FB_username:facebookData.getFB_username()},{WorkAndEducation:facebookData.getWorkAndEducation()},{PlacesYouLived:facebookData.getPlacesYouLived()},{ContactAndBasicDetailsInfo:facebookData.getContactAndBasicInfo()},{FamilyMembersRelationShipStatus:facebookData.getFamilyMembersRelationShipStatus()},{DetailsAboutYou:facebookData.getDetailsAboutYou()},{AllFriends:facebookData.getAllFriends()}]; 
completeFacebookData ={Facebook:getFacebookData}; 
console.log(completeFacebookData);

