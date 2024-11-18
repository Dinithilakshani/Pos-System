import ItemModel from "../model/itemModel.js";
import {item_arr} from "../db/database.js";
import {loadItems} from "./OrderController.js";


$(document).ready(function (){
    $("#item_code").val(generateItemCode());
})


let generateItemCode = function generateItemCode(){

    let id = item_arr.length + 1;
    return "I0" + id;
}

let setItemCode = () => {
    $("#item_code").val(generateItemCode());
}
const loadItemTable=()=>{
    $("#itemTableBody").empty();

    item_arr.map((item)=>{
        console.log(item)
        let data=`<tr><td>${item.item_code}</td><td>${item.name}</td><td>${item.unitPrice}</td><td>${item.qty}</td><td>${item.description}</td></tr>`;
        $("#itemTableBody").append(data);
    });
}
let itemCount = 0;
$('#item-count').text(itemCount);

const cleanItemForm  = () => {
    $('#name').val("");
    $('#unitPrice').val("")
    $('#qty').val("");
    $('#description').val("");
}

$("#itbtn").on("click", function () {
    let item_code = generateItemCode();
    let name = $('#name').val();
    let unit_price = $('#unitPrice').val();
    let qty= $('#qty').val();
    let description = $('#description').val();


    if(name.length===0) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid Name",
        });
    } else if(unit_price.length===0) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid unitPrice",
        });
    } else if(qty.length===0) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid qty",
        });

    } else if(description.length===0) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid Description",
        });
    } else {

        let item = new ItemModel(
            item_code,
            name,
            unit_price,
            qty,
            description
        );


        item_arr.push(item);
        // itemCount += 1;
        // $('#item-count').text(itemCount);

        // clean customer form
        cleanItemForm();
        loadItems();
        loadItemTable();
        setItemCode();

    }
});

let item_update_index;
let item_delete_index;

$("#itemTableBody").on("click",'tr',function (){

    let value=$(this).text();
    let index=$(this).index();
    console.log(index);
    let item_obj=item_arr[index];
    console.log(item_obj);

    //update customer
    item_update_index=index;

    //delete customer
    item_delete_index=index;

    let item_code = item_obj.item_code;
    let name = item_obj.name;
    let unit_price= item_obj.unitPrice;
    let qty = item_obj.qty;
    let description =item_obj.description;

    $("#item_code").val(item_code);
    $("#name").val(name);
    $("#unitPrice").val(unit_price);
    $("#qty").val(qty);
    $("#description").val(description);

});

$("#item_update_btn").on("click",function (){
    let index=item_update_index;

    let item_code = $('#item_code').val();
    let name = $('#name').val();
    let unit_price = $('#unitPrice').val();
    let qty = $('#qty').val();
    let description = $('#description').val();


    let item =new ItemModel(
        item_arr[index].item_code,
        name,
        unit_price,
        qty,
        description
    );
    item_arr[item_update_index]=item;
    cleanItemForm();
    loadItemTable();
    setItemCode();
});

$("#item_delete_btn").on("click",function (){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
            });
        }
    });

    item_arr.splice(item_delete_index);



    cleanItemForm();
    loadItemTable();
    setItemCode();

});

$("#item_clean_btn").on("click",function (){
    cleanItemForm();
});

