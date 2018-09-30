$(document).ready(function () {

    // show html form when 'update product' button was clicked
    $(document).on('click', '.update-product-button', function () {
        // get product id
        var id = $(this).attr('data-id');
        // read one record based on given product id
        $.getJSON("http://localhost/php-api-codeofaninja/api/product/read_one.php?id=" + id, function (data) {

            // values will be used to fill out our form
            var name = data.name;
                // store 'update product' html to this variable
                var update_product_html = "";

                // 'read products' button to show list of products
                update_product_html += "<div id='read-products' class='btn btn-primary pull-right m-b-15px read-products-button'>";
                update_product_html += "<span class='glyphicon glyphicon-list'></span> Read Products";
                update_product_html += "</div>";
                // build 'update product' html form
                // we used the 'required' html5 property to prevent empty fields
                update_product_html += "<form id='update-product-form' action='#' method='post' border='0'>";
                update_product_html += "<table class='table table-hover table-responsive table-bordered'>";

                // name field
                update_product_html += "<tr>";
                update_product_html += "<td>Name</td>";
                update_product_html += "<td><input value=\"" + name + "\" type='text' name='name' class='form-control' required /></td>";
                update_product_html += "</tr>";

                update_product_html += "<tr>";

                // hidden 'product id' to identify which record to delete
                update_product_html += "<td><input value=\"" + id + "\" name='id' type='hidden' /></td>";

                // button to submit form
                update_product_html += "<td>";
                update_product_html += "<button type='submit' class='btn btn-info'>";
                update_product_html += "<span class='glyphicon glyphicon-edit'></span> Update Product";
                update_product_html += "</button>";
                update_product_html += "</td>";

                update_product_html += "</tr>";

                update_product_html += "</table>";
                update_product_html += "</form>";
                // inject to 'page-content2' of our app
                $("#page-content").html(update_product_html);

                // chage page title
                changePageTitle("Update Product");

        });
    });

    // will run if 'create product' form was submitted
    $(document).on('submit', '#update-product-form', function () {

        // get form data
        var form_data = $(this).serializeJSON();
        // submit form data to api
        $.ajax({
            url: "http://localhost/php-api-codeofaninja/api/product/update.php",
            type: "POST",
            contentType: 'application/json',
            data: form_data,
            success: function (result) {
                // product was created, go back to products list
                showProducts();
            },
            error: function (xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });
        return false;
    });
});