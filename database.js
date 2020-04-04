let user;
let review;
let business;

function assignCustomer(userName) {
    this.user = userName;
    if (this.user === undefined) {
        this.user = "undefined";
    }
}

function assignBusiness(businessName) {
    this.business = businessName;
    if (this.business === undefined) {
        this.business = "undefined";
    }
}

function createReview(userReview) {
    this.review = userReview;
    if (this.userReview === undefined) {
        this.userReview = "undefined";
    }
}

