

var database = firebase.database();
//there also appears to be two approaches: https://firebase.google.com/docs/database/admin/save-data
//one is an sdk style, the other is more of js

//there is also an API style as well: this is standard across all web apps though
//there is a difference between web and admin!

//firebase freindly chat might be better since it will give a more ocmplete/holisitic view of how firebase exists with
//existing things

var my_entry = "a field";
var name = "my name";
var email="some field";

database.ref('users/' + my_entry).set({
    username: name,
    email: email,
    profile_picture : null
});
