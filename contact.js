$(document).ready(function(){ 

// Used to keep track of users being added
        // stores details of user as object
        var myusers = []; 

        // Generates view for name//
         var getNameView = function(user) { 
            return $("<div class='person'><div><h4>" + user.first_name + " " + user.last_name + "</h4><p>Click for more details</p></div></div>")
        };

        // Generates searchview for contact
        var getcontactView = function(user) { 
            return $("<div class='person'><div><h4>" + user.search + " " + "</h4><p>Click to go back</p></div></div>")
        };


        // Listen for form submit
        $('form').submit(function() {

            // Stores details of user being added
            var user = {
                first_name: $('#first_name').val(),
                last_name: $('#last_name').val(),
                email: $("#email").val()

            }; 

            // Add user to list of users
            myusers.push(user);

            // Append name view for user
            $('#searchme').append(getNameView(user))

            // Clear fields 
            $("#first_name").val("")
            $("#last_name").val("")
            $("#email").val("")

            return false

        }); 

});
