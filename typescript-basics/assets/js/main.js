var Youtube = /** @class */ (function () {
    //properties of youtube class end
    // a constructer which is used to initialize a class fields
    function Youtube(channelName, channelSubscribers, videoUploadedDate, videoTitle, videoDescription, videoViews, videoLikes, videoDisLikes, videoComments, videoRelatedVideos) {
        var _this = this;
        // methods which can access and modify
        this.getChannelName = function () {
            return _this.channelName;
        };
        this.getChannelSubscribers = function () {
            return _this.channelSubscribers;
        };
        this.setChannelSubscribers = function (channelSubscribers) {
            _this.channelSubscribers = channelSubscribers;
        };
        this.getVideoUploadedDate = function () {
            return _this.videoUploadedDate;
        };
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        this.getVideoDescription = function () {
            return _this.videoDescription;
        };
        this.getVideoViews = function () {
            return _this.videoViews;
        };
        this.setVideoViews = function (videoViews) {
            _this.videoViews = videoViews;
        };
        this.getVideoLikes = function () {
            return _this.videoLikes;
        };
        this.setVideoLikes = function (videoLikes) {
            _this.videoLikes = videoLikes;
        };
        this.getVideoDisLikes = function () {
            return _this.videoDisLikes;
        };
        this.setVideoDisLikes = function (videoDisLikes) {
            _this.videoDisLikes = videoDisLikes;
        };
        this.getVideoComments = function () {
            return _this.videoComments;
        };
        this.setVideoComments = function (videoComments) {
            _this.videoComments = _this.videoComments.concat(videoComments);
        };
        this.getVideoRelatedVideos = function () {
            return _this.videoRelatedVideos;
        };
        this.channelName = channelName;
        this.channelSubscribers = channelSubscribers;
        this.videoUploadedDate = videoUploadedDate;
        this.videoTitle = videoTitle;
        this.videoDescription = videoDescription;
        this.videoViews = videoViews;
        this.videoLikes = videoLikes;
        this.videoDisLikes = videoDisLikes;
        this.videoComments = videoComments;
        this.videoRelatedVideos = videoRelatedVideos;
    } // end constructer
    return Youtube;
}());
var Facebook = /** @class */ (function () {
    function Facebook(fb_id, fb_username, workAndEducation, placesYouLived, contactAndBasicInfo, familyMembersRelationShipStatus, detailsAboutYou, allFriends) {
        var _this = this;
        this.fb_id = fb_id;
        this.fb_username = fb_username;
        this.workAndEducation = workAndEducation;
        this.placesYouLived = placesYouLived;
        this.contactAndBasicInfo = contactAndBasicInfo;
        this.familyMembersRelationShipStatus = familyMembersRelationShipStatus;
        this.detailsAboutYou = detailsAboutYou;
        this.allFriends = allFriends;
        this.getFB_id = function () {
            return _this.fb_id;
        };
        this.getFB_username = function () {
            return _this.fb_username;
        };
        this.setFB_username = function (fb_username) {
            return _this.fb_username = fb_username;
        };
        this.getWorkAndEducation = function () {
            return _this.workAndEducation;
        };
        this.setWorkAndEducation = function (Work, Highschool, University) {
            //this.videoComments = videoComments.concat(videoComments);
            _this.workAndEducation[0].work = _this.workAndEducation[0].work.concat(Work);
            _this.workAndEducation[1].education[0].highSchool = _this.workAndEducation[1].education[0].highSchool.concat(Highschool);
            _this.workAndEducation[1].education[1].university = _this.workAndEducation[1].education[1].university.concat(University);
        };
        this.getPlacesYouLived = function () {
            return _this.placesYouLived;
        };
        this.setPlacesYouLived = function (PlacesYouLived) {
            _this.placesYouLived = PlacesYouLived;
        };
        this.getContactAndBasicInfo = function () {
            return _this.contactAndBasicInfo;
        };
        this.setContactAndBasicInfo = function (ContactAndBasicInfo) {
            _this.contactAndBasicInfo = ContactAndBasicInfo;
        };
        this.getFamilyMembersRelationShipStatus = function () {
            return _this.familyMembersRelationShipStatus;
        };
        this.setFamilyMembersRelationShipStatus = function (FamilyMembersRelationShipStatus) {
            _this.familyMembersRelationShipStatus = FamilyMembersRelationShipStatus;
        };
        this.getDetailsAboutYou = function () {
            return _this.detailsAboutYou;
        };
        this.setDetailsAboutYou = function (DetailsAboutYou) {
            _this.detailsAboutYou.aboutYou = DetailsAboutYou;
        };
        this.getAllFriends = function () {
            return _this.allFriends;
        };
        this.setAllFriends = function (allFriends) {
            _this.allFriends = _this.allFriends.concat(allFriends);
            ;
        };
        this.fb_id = fb_id;
        this.fb_username = fb_username;
        this.workAndEducation = workAndEducation;
        this.placesYouLived = placesYouLived;
        this.contactAndBasicInfo = contactAndBasicInfo;
        this.familyMembersRelationShipStatus = familyMembersRelationShipStatus;
        this.detailsAboutYou = detailsAboutYou;
        this.allFriends = allFriends;
    }
    return Facebook;
}());
var channelName = "edwisor";
var channelSubscribers = 12300;
var videoUploadedDate = "13 june 2018";
var videoTitle = "Type script basics";
var videoDescription = "Typescript basics are prerequisites to learn angular. So please learn Typescript thoroughly and start the Typescript assignment and submit it and access angular module lessons.";
var videoViews = 624;
var videoLikes = 501;
var videoDisLikes = 2;
var videoComments = [{ name: "Rohan", email: "rohan@gmail.com", comment: "good" }, { name: "Srujana", email: "srujana@gmail.com", comment: "Thanks a lot ! You saved me." }, { name: "Koushik", email: "koushik@gmail.com", comment: "Great tutorials !!! I love to see more tutorials from you." }, { name: "funny", email: "funny@gmail.com", comment: "Nice tutorials..!" }];
var videoRelatedVideos = [{ channel: "edwisor", title: "Jquery ajax", views: 4210 }, { channel: "edwisor", title: "Jquery basics", views: 5010 }, { channel: "edwisor", title: "Responsive web design", views: 3115 }, { channel: "edwisor", title: "Angular", views: 210 }, { channel: "edwisor", title: "Node js", views: 4312 }];
var youtubeVideo = new Youtube(channelName, channelSubscribers, videoUploadedDate, videoTitle, videoDescription, videoViews, videoLikes, videoDisLikes, videoComments, videoRelatedVideos);
var getYoutubeData = [{ channelName: youtubeVideo.getChannelName(), channelSubscribers: youtubeVideo.getChannelSubscribers(), videoUploadedDate: youtubeVideo.getVideoUploadedDate(), videoTitle: youtubeVideo.getVideoTitle(), videoDescription: youtubeVideo.getVideoDescription(), videoViews: youtubeVideo.getVideoViews(), videoLikes: youtubeVideo.getVideoLikes(), videoDisLikes: youtubeVideo.getVideoDisLikes(), videoComments: youtubeVideo.getVideoComments(), recommendedVideos: youtubeVideo.getVideoRelatedVideos() }];
var completeYoutubeData = { youtubeData: getYoutubeData };
console.log("Youtube class data");
console.log(completeYoutubeData);
console.log("After setting some data to youtube class");
youtubeVideo.setChannelSubscribers(12340);
youtubeVideo.setVideoViews(700);
youtubeVideo.setVideoLikes(600);
youtubeVideo.setVideoDisLikes(4);
youtubeVideo.setVideoComments([{ name: "Ravi", email: "ravi@gmail.com", comment: "Very great tutorials" }, { name: "Sanjana", email: "sanjana@gmail.com", comment: "Thanks." }, { name: "Karthik", email: "karthik@gmail.com", comment: "I really appreciate you." }, { name: "phaneendra", email: "phaneendraraosuddapalli@gmail.com", comment: "Keep it up, great tutorials" }]);
getYoutubeData = [{ channelName: youtubeVideo.getChannelName(), channelSubscribers: youtubeVideo.getChannelSubscribers(), videoUploadedDate: youtubeVideo.getVideoUploadedDate(), videoTitle: youtubeVideo.getVideoTitle(), videoDescription: youtubeVideo.getVideoDescription(), videoViews: youtubeVideo.getVideoViews(), videoLikes: youtubeVideo.getVideoLikes(), videoDisLikes: youtubeVideo.getVideoDisLikes(), videoComments: youtubeVideo.getVideoComments(), recommendedVideos: youtubeVideo.getVideoRelatedVideos() }];
completeYoutubeData = { youtubeData: getYoutubeData };
console.log(completeYoutubeData);
var Work = ["facebook", "microsoft", "google"];
var HighSchool = ["Sri Chaitanya Junior College", "SNVHS", "Bhashyam", "Triveni"];
var University = ["CMR College of engineering and technology"];
var Education = [{ highSchool: HighSchool }, { university: University }]; // clubs highschool and university = education
var CurrentCity = "Kukatpally";
var HomeTown = "Hyderabad";
var OtherCities = ["Yusufguda", "Madhapur", "Madhura Nagar"];
var BasicInfo = [{ dob: "27 November" }, { yearOfBirth: 1995 }, { gender: "Male" }];
var Email = "phaneendraraosuddapalli@gmail.com";
var Address = "4-39-245/c, hanuman nagar, jagadgirigutta, hyderabad 500037.";
var Phone = 9573210866;
var FamilyMembersID = ["100010506934961", "100010506932971", "100010506439949"];
var RelationShipStatus = "Single";
var AllFriendsIds = ["100010506934961", "100010506932971", "100010506439949", "100010506934961", "100010506932971", "100010506439949", "100010506934961", "100010506932971", "100010506439949"];
//all fields ready now
var FB_id = "100010506939961";
var FB_username = "phaneendra rao";
var WorkAndEducation = [{ work: Work }, { education: Education }]; // clubs work and education =  workandeducation
var PlacesYouLived = [{ currentCity: CurrentCity }, { homeTown: HomeTown }, { otherCities: OtherCities }]; // clubs Current city, hometown and otherplaces = places you lived
var ContactAndBasicDetailsInfo = [{ basicInfo: BasicInfo }, { email: Email }, { address: Address }, { phone: Phone }];
var FamilyMembersRelationShipStatus = [{ familyMembersID: FamilyMembersID }, { relationShipStatus: RelationShipStatus }];
var DetailsAboutYou = { aboutYou: "blah blah blah blah blah blah" };
var facebookData = new Facebook(FB_id, FB_username, WorkAndEducation, PlacesYouLived, ContactAndBasicDetailsInfo, FamilyMembersRelationShipStatus, DetailsAboutYou, AllFriendsIds);
var getFacebookData = [{ FB_ID: facebookData.getFB_id() }, { FB_username: facebookData.getFB_username() }, { WorkAndEducation: facebookData.getWorkAndEducation() }, { PlacesYouLived: facebookData.getPlacesYouLived() }, { ContactAndBasicDetailsInfo: facebookData.getContactAndBasicInfo() }, { FamilyMembersRelationShipStatus: facebookData.getFamilyMembersRelationShipStatus() }, { DetailsAboutYou: facebookData.getDetailsAboutYou() }, { AllFriends: facebookData.getAllFriends() }];
var completeFacebookData = { Facebook: getFacebookData };
console.log("Facebook class data");
console.log(completeFacebookData);
facebookData.setFB_username("Phaneendra rao suddapalli");
Work = ["facebook 1", "microsoft 1", "google 1"];
HighSchool = ["Sri Chaitanya Techno School", "Ramakrishna High School"];
University = ["JNTUH"];
facebookData.setWorkAndEducation(Work, HighSchool, University);
facebookData.setDetailsAboutYou("Its my about section");
// facebookData.setDetailsAboutYou();
// facebookData.setContactAndBasicInfo();
// facebookData.setFamilyMembersRelationShipStatus();
// facebookData.setPlacesYouLived();
// facebookData.setAllFriends();
console.log("After setting some data to facebook class");
getFacebookData = [{ FB_ID: facebookData.getFB_id() }, { FB_username: facebookData.getFB_username() }, { WorkAndEducation: facebookData.getWorkAndEducation() }, { PlacesYouLived: facebookData.getPlacesYouLived() }, { ContactAndBasicDetailsInfo: facebookData.getContactAndBasicInfo() }, { FamilyMembersRelationShipStatus: facebookData.getFamilyMembersRelationShipStatus() }, { DetailsAboutYou: facebookData.getDetailsAboutYou() }, { AllFriends: facebookData.getAllFriends() }];
completeFacebookData = { Facebook: getFacebookData };
console.log(completeFacebookData);
