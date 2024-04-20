$(document).ready(function(){
    var api_key = "QxXSf5cL90OeLprOd1hDi36lzpOwthWFhE7lNRy3kiRoN2VrxadH0FjT";
    var image = '';

    $("#form").submit(function(event){
        event.preventDefault();
        var search = $("#search").val();
        imagesearch(search);
    });

    function imagesearch(search){
        $.ajax({
            method: 'GET',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", api_key);
            },
            url: "https://api.pexels.com/v1/search?query="+search+"&per_page=15&page=1",
            success: function (data) {
                console.log(data);
                data.photos.forEach(photo=> {
                    image = `
                    <img src="${photo.src.original}" width="400" height="300" alt=""/>
                    `;
                    $("#images").append(image);
                });

            },
            error: function (error) {
                console.log(error);
            }
        });
    }
});
