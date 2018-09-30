required:
https://jquery.com/
https://github.com/macek/jquery-serialize-object
http://bootboxjs.com/

to test the REST PHP API use the following (with postman)

____----***C in Crud***----____
POST
http://localhost/php-api-codeofaninja/api/product/create.php

{"name":"My Laptop","price":10,"description":"old laptop with 32GB SSD drive and broken screen",
"category_id":1,"created":"2012-04-23T18:25:43.511Z"
}
____----***R in cRud***----____
GET
http://localhost/php-api-codeofaninja/api/product/read.php

{"name":"My New Laptop","price":50,"description":"laptop Effy bought me, with 1TB CORE i3 and Iris",
"category_id":1,"created":"2012-04-21T18:25:43-05:00"
}
____----***U in crUd***----____
PUT
http://localhost/php-api-codeofaninja/api/product/update.php
{"id":"64","name":"My New Laptop","price":40,"description":"old laptop with 32GB SSD drive and broken screen",
"category_id":1
}
____----***D in cruD***----____
DELETE
http://localhost/php-api-codeofaninja/api/product/delete.php

{"name":"My New Laptop"}

read_one
GET
http://localhost/php-api-codeofaninja/api/product/read_one.php?id=1
