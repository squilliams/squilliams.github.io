var myApp = angular.module('myApp', ['firebase']);

myApp.controller('ProductsCtrl', ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {

    var myRegistrants = new Firebase('https://tedxbdgbimo.firebaseio.com/signed');
    
    var confirmed = new Firebase('https://tedxbdgbimo.firebaseio.com/confirmed');
<<<<<<< HEAD
    myRegistrants.push({
        
    });
=======

>>>>>>> 2f3177cc9c25b05c8aadf2acac4c402937f9371c
    $scope.registrants = $firebaseArray(myRegistrants);
    $scope.confirms = $firebaseArray(confirmed);
    //$scope.registrants = myRegistrants;
    
<<<<<<< HEAD
    
    
=======
>>>>>>> 2f3177cc9c25b05c8aadf2acac4c402937f9371c
    function clearForm() {
        $scope.uid = '';
        $scope.name = '';
        $scope.phone = '';
        $scope.email = '';
    }
<<<<<<< HEAD
    
=======


>>>>>>> 2f3177cc9c25b05c8aadf2acac4c402937f9371c
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
<<<<<<< HEAD
            uid: $scope.uid,
            name: $scope.name,
            email: $scope.email,
            phone: $scope.phone
=======
            uid: product.uid,
            name: product.name,
            email: product.email,
            phone: product.phone
>>>>>>> 2f3177cc9c25b05c8aadf2acac4c402937f9371c
        });
    };
}]);
