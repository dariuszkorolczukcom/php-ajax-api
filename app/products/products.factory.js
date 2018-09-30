app.factory("productsFactory", function($http){
 
    var factory = {};
 
    // read all products
    factory.readProducts = function(){
        return $http({
            method: 'GET',
            url: 'http://localhost/php-api-codeofaninja/api/product/read.php'
        });
    };
     
    // create product
factory.createProduct = function($scope){
    return $http({
        method: 'POST',
        data: {
            'name' : $scope.name,
            'description' : $scope.description,
            'price' : $scope.price,
            'category_id' : 1
        },
        url: 'http://localhost/php-api-codeofaninja/api/product/create.php'
    });
};
 
// read one product
factory.readOneProduct = function(id){
    return $http({
        method: 'GET',
        url: 'http://localhost/php-api-codeofaninja/api/product/read_one.php?id=' + id
    });
};
 
// update product
factory.updateProduct = function($scope){
 
    return $http({
        method: 'POST',
        data: {
            'id' : $scope.id,
            'name' : $scope.name,
            'description' : $scope.description,
            'price' : $scope.price,
            'category_id' : 1
        },
        url: 'http://localhost/php-api-codeofaninja/api/product/update.php'
    });
};
 
// deleteProduct will be here
     
    return factory;
});