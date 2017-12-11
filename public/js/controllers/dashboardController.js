var features = {
    'Upload Resource':{'Description':"Upload Resources",'Button':'Upload' +
    ' Resource'},

    'Request Specialist':{'Description':"Request Specialist",'Button':'Request'},

    'Other Instructor Materials':{'Description':"Find What Other" +
    " Instructors are Doing",'Button':'Find'},

    'Find Funding Organizations':{'Description':'Find Funding Organizations','Button':'Find Donors'},

    'Raise Funds':{'Description':'Set up gofundme','Button':'Set up'},

    'Offer Human Capital':{'Description':'Offer Human Capital','Button':'Find Educators'},

    'Offer Funds to Educators':{'Description':'Offer funds to Educators','Button':'Find Educators'},

    'Access Resources':{'Description':'Access Resources','Button':'Find' +
    ' Resource'}
};

function dashboardController($scope,$compile){
    //"use strict";
    //$scope.createCard('Upload Resource');
}

function createCard(featureName) {

    var html =  "<h3 class='card-title'>"+featureName +"</h3> " +
        "<p class='card-text'>"+features[featureName].Description+"</p>"+
        "<a href='#' class='btn btn-primary'>"+features[featureName].Button+"</a>";
    //var compiledElement = $compile(html)($scope);
    if(featureName == "Upload Resource"){
        html = "<h3>Upload Form</h3><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSefqodRV5ZgCYJUsxQbt2RrQZ9QYlyRDqotiADJv4acvKj8dw/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>";
    }
                                                   
    var target = document.getElementById('card');
    $(target).empty();
    $(target).append(html);
    //angular.element(target).append(compiledElement);
    
}

createCard("Access Resources");

$(function() {
    $('#nav1 li a').click(function() {
        $('#nav1 li a').removeClass('active');
        $(this).addClass('active');
    });
});

function logOutProfile(){
    localStorage.setItem("uName", "");
    window.location = "/logout";
}
