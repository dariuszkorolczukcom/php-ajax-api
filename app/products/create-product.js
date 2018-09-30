$(document).ready(() => {

    // show html form when 'create product' button was clicked
    $(document).on('click', '.create-product-button', () => {
            var create_product_html = '';
            // 'read products' button to show list of products
            create_product_html += "<div id='read-products' class='btn btn-primary pull-right m-b-15px read-products-button'>";
            create_product_html += "<span class='glyphicon glyphicon-list'></span> Read Heroes";
            create_product_html += "</div>";
            // 'create product' html form
            create_product_html += "<form id='create-product-form' action='#' method='post' border='0'>";
            create_product_html += "<table class='table table-hover table-responsive table-bordered'>";

            // name field
            create_product_html += "<tr>";
            create_product_html += "<td>Name</td>";
            create_product_html += "<td><input type='text' name='name' class='form-control' required /></td>";
            create_product_html += "</tr>";

            // button to submit form
            create_product_html += "<tr>";
            create_product_html += "<td></td>";
            create_product_html += "<td>";
            create_product_html += "<button type='submit' class='btn btn-primary'>";
            create_product_html += "<span class='glyphicon glyphicon-plus'></span> Create Hero";
            create_product_html += "</button>";
            create_product_html += "</td>";
            create_product_html += "</tr>";

            create_product_html += "</table>";
            create_product_html += "</form>";
            // inject html to 'page-content' of our app
            $("#page-content").html(create_product_html);

            // chage page title
            changePageTitle("Create Product");
    });

    // will run if create product form was submitted
    $(document).on('submit', '#create-product-form', function (event) {
        event.preventDefault();
        // get form data
        var form_data = $(this).serializeJSON();
        console.log(form_data);
        // submit form data to api
        $.ajax({
            url: "http://localhost/php-api-codeofaninja/api/product/create.php",
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