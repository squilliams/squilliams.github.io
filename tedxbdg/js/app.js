
var myApp = angular.module('myApp', ['firebase']);

myApp.controller('ProductsCtrl', ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {

    var myRegistrants = new Firebase('https://tedxbdgbimo.firebaseio.com/signed');
    
    var confirmed = new Firebase('https://tedxbdgbimo.firebaseio.com/confirmed');
    
    var ref = new Firebase("https://tedxbdgbimo.firebaseio.com");
    
    $scope.registrants = $firebaseArray(myRegistrants);
    $scope.confirms = $firebaseArray(confirmed);
    //$scope.registrants = myRegistrants;
    
    function clearForm() {
        $scope.uid = '';
        $scope.name = '';
        $scope.phone = '';
        $scope.email = '';
    }
    $scope.clearSearch = function() {
        $scope.filter = null;
    }

    $scope.showForm = function () {
        $scope.addFormShow = true;
//        $scope.editFormShow = false;
        clearForm();
    };
    
    $scope.hideForm = function () {
        $scope.addFormShow = false;
    };
    
        
//    $scope.showProduct = function (registrant) {
//        $scope.editFormShow = true;
//        $scope.addFormShow = false;
//        $scope.no = registrant.no;
//        $scope.name = registrant.name;
//        $scope.e-mail = registrant.e-mail;
//        $scope.phone = registrant.phone;
//        $scope.id = registrant.$id;
//    };
    
    $scope.addFormSubmit = function () {
        $scope.registrants.$add({
            uid: $scope.uid,
            name: $scope.name,
            email: $scope.email,
            phone: $scope.phone
        });
        
        clearForm();
    };


    $scope.confirmAttend = function (product) {
        $scope.confirms.$add({
            uid: product.uid,
            name: product.name,
            email: product.email,
            phone: product.phone
        });
    };
    
    $scope.deleteProduct = function (product) {
        var r = confirm("Are you sure you want to delete " + product.name + "?");
        if (r == true) {
            $scope.confirms.$remove(product);
        } else {
        }
    };

}]);
