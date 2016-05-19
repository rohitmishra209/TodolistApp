// $(document).ready(function() {
// // Datepicker Popups calender to Choose date.
//       $(function() {
//       $("#datepicker").datepicker();
// });
//       $(function() {
//       $("#datepickerend").datepicker();
// });
// });
var collection =[];
var temp = '';
//console.log(collection.length);

function operation(){

    if(temp !== ""){
     for(var i=0; i<collection.length; i++){
        if(collection[i].id===temp){

          var task = document.getElementById('Task').value;
          var description = document.getElementById('description').value;
          var status = document.getElementById('status').value;
          var startdate = document.getElementById('datepicker').value;
          var enddate = document.getElementById('datepickerend').value;

          var task = collection[i].task = task;
          var description = collection[i].description = description;
          var status = collection[i].status = status;
          var startdate = collection[i].startdate = startdate;
          var enddate = collection[i].enddate = enddate;
          temp ="";
          structure();
      }

     }
   }else{
    var value = validation();
         if(value === true){

           var id = Math.random();
           var task = document.getElementById('Task').value;
           var description = document.getElementById('description').value;
           var status = document.getElementById('status').value;
           var startdate = document.getElementById('datepicker').value;
           var enddate = document.getElementById('datepickerend').value;

    var details = {
                "id": id,
                "task": task,
                "description":description,
                "status":status,
                "startdate":startdate,
                "enddate":enddate
    }

    collection.push(details);
         structure();

    }
    }
  }


function structure(){

  var html = "<table border= 'border-collapse: collapse;width:30px;'>";

         html+="<tr>";
              html+="<th>"+"Task"+"</th>";
              html+="<th>"+"Description"+"</th>";
              html+="<th>"+"Status"+"</th>";
              html+="<th>"+"StartDate"+"</th>";
              html+="<th>"+"EndDate"+"</th>";
          html+="</tr>";

     for(var i=0; i<collection.length; i++){
     var abc = collection.length;
     //console.log(abc);
     html+="<tr>";
            html+="<td>"+collection[i].task+"</td>";
            html+="<td>"+collection[i].description+"</td>";
              //  html+="<td>"+collection[i].status+"</td>";
            html+="<td>"+'<select name="status" id="status">';
              if(collection[i].status==='pending'){
                  html+= '<option value="pending">'+collection[i].status+'</option>';
                  html+='<option value="inprogress">Inprogress</option>';
                  html+='<option value="completed" disabled>Completed</option>';
              }else {
                  html+= '<option value="inprogress">'+collection[i].status+'</option>';
                  html+='<option value="pending">Pending</option>';
                  html+='<option value="completed"  disabled>Completed</option>';
                }
              // }else{
              //     html+= '<option value="completed">'+collection[i].status+'</option>';
              //     html+='<option value="pending">Pending</option>';
              //     html+='<option value="inprogress">Inprogress</option>';
              // }
            html+= '</select>'+"</td>";
            html+="<td>"+collection[i].startdate+"</td>";
            html+="<td>"+collection[i].enddate+"</td>";
          //  var index = collection.indexOf(i);
          //  console.log(index);
            html+="<td>"+'<input type="button" id="button" value="Delete" onclick="DeleteItem('+collection[i].id+')"/>'+"</td>";
            html+="<td>"+'<input type="button" id="editbutton" value="Edit" onclick="ChangeValue('+collection[i].id+')"/>'+"</td>";
          // html+="<td>"+"delete"+"</td>";
     html+="</tr>";

   }
  html+="</table>";
  document.getElementById("display").innerHTML = html;
  clear();

}


function clear(){

       document.getElementById("Task").value = '';
       document.getElementById("description").value = '';
       document.getElementById("datepicker").value = '';
       document.getElementById("datepickerend").value = '';

  }


function DeleteItem(id){


      if(collection.length === 0 ){
          console.log("reload");
          location.reload();
        }else{
          for(var i=0; i<collection.length; i++){
        // var index = collection.indexOf(i);
        // console.log(index);
          if(collection[i].id === id){
          var index = collection.indexOf(i);
           //console.log(index);
           collection.splice(i,1);
           structure();
           }else{
           structure();

         }
        }
      }
    }



function ChangeValue (id) {
     temp = id;

    for(var i=0; i<collection.length; i++){
      console.log(collection[i].id);
    if(collection[i].id === id){
      console.log("inside");
          var task = collection[i].task;
          // console.log(task);
          var description = collection[i].description;
          // console.log(description);
          var status = collection[i].status;
          console.log(status);
          var startdate = collection[i].startdate;
          // console.log(startdate);
          var enddate = collection[i].enddate;
          // console.log(enddate);

          document.getElementById('Task').value= task;
          document.getElementById('description').value= description;
          document.getElementById('status').value= status;
          document.getElementById('datepicker').value= startdate;
          document.getElementById('datepickerend').value= enddate;


       //structure();
       }else{
        //  console.log("outside");
      //  structure();
    }
    }
}


function validation(){

    var task = document.getElementById('Task').value;
    var description = document.getElementById('description').value;
    var status = document.getElementById('status').value;
    var startdate = document.getElementById('datepicker').value;
    var enddate = document.getElementById('datepickerend').value;


            if(task === ''){
                alert("Please Enter the task");
                var flags = false;

            }else if(description ===""){
                alert("Please Enter the Description");
                var flags = false;

            }else if(status ===""){
                  alert("Please enter the Status");
                  var flags = false;

            }else if(startdate ===""){
                  alert("Please Enter the Startdate");
                  var flags = false;

            }else{
              var flags = true;
            }
            return flags

}
