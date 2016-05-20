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
      console.log(typeof(Storage));
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
          if(status === 'completed'){
          var status = collection[i].status = status;
           document.getElementById('statuschange').disabled = true;
        }else{
          var status = collection[i].status = status;
        }
          var startdate = collection[i].startdate = startdate;
          var enddate = collection[i].enddate = enddate;
          temp ="";
          structure();
          document.getElementById('status').disabled = false;

      }

     }
   }else{
    var value = validation();
         if(value === true){

           var id = Math.random();
           var task = document.getElementById('Task').value;
           var description = document.getElementById('description').value;
           if(document.getElementById('status').value==='completed'){
           var status = document.getElementById('status').value;
               document.getElementById('status').disabled = true;
           }else {
           var status = document.getElementById('status').value;}
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
         document.getElementById('status').disabled = false;

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
            html+="<td>"+'<select name="status" id="statuschange" onChange="fixcompletedstatus('+collection[i].id+')">';
              if(collection[i].status==='pending'){
                  html+= '<option value="pending">'+collection[i].status+'</option>';
                  html+='<option value="inprogress">Inprogress</option>';
                  html+='<option value="completed">Completed</option>';
              }else if(collection[i].status==='inprogress'){
                  html+= '<option value="inprogress">'+collection[i].status+'</option>';
                  html+='<option value="pending">Pending</option>';
                  html+='<option value="completed">Completed</option>';
               }else{
                   if(collection[i].status==='completed'){
                     html+= '<option value="completed">'+collection[i].status+'</option>';
                     //document.getElementById('statuschange').disabled = true;
                    // html+='<option value="pending">Pending</option>';
                    // html+='<option value="inprogress">Inprogress</option>';
                   }
               }
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
  // if(document.getElementById('statuschange').value==='completed'){
  // document.getElementById('statuschange').disabled = true;
  // }
  clear();

}


function clear(){

       document.getElementById("Task").value = '';
       document.getElementById("description").value = '';
       document.getElementById("datepicker").value = '';
       document.getElementById("status").value = 'pending';
       document.getElementById("datepickerend").value = '';

  }


function DeleteItem(id){

console.log(collection.length);
      if(collection.length === 1){
          console.log("reload");
          location.reload();
        }else{
          console.log("inside for loop");
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
          if(document.getElementById('statuschange').value ==='completed'){
          document.getElementById('statuschange').value= status;
          document.getElementById('statuschange').disabled = true;
          document.getElementById('status').value = status;
          document.getElementById('status').disabled = true;
          }else{
            document.getElementById('statuschange').value = status;
          }
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

function fixcompletedstatus(id){

   statuschange(id);

  console.log(document.getElementById('statuschange').value);

            if(document.getElementById('statuschange').value==='completed'){

              document.getElementById('statuschange').disabled = true;
            }else{
            document.getElementById('statuschange').disabled = false;

        }

    }


    function statuschange(id){

      temp = id;
      console.log(temp);

       var newstatus = document.getElementById('statuschange').value;
       console.log(newstatus);

      for(var i=0; i<collection.length; i++){
        console.log(collection[i].id);
      if(collection[i].id === id){
        console.log("inside of status");

            // var task = collection[i].task;
            // var description = collection[i].description;
            // document.getElementById('statuschange').value= newstatus;
            // var startdate = collection[i].startdate;
            // var enddate = collection[i].enddate;

            document.getElementById('Task').value= collection[i].task;
            document.getElementById('description').value= collection[i].description;
            if(newstatus ==='completed'){
            document.getElementById('statuschange').value= newstatus;
            document.getElementById('statuschange').disabled= true;
            document.getElementById('status').value= newstatus;
            document.getElementById('status').disabled = true;
            }else{
              console.log("inside else statment");
            document.getElementById('statuschange').value = newstatus;
            document.getElementById('status').value = newstatus;
            }
            document.getElementById('datepicker').value=  collection[i].startdate;
            document.getElementById('datepickerend').value= collection[i].enddate;
            operation();
            //temp ="";


            // document.getElementById('datepicker').value= startdate;
            // document.getElementById('datepickerend').value= enddate;


         //structure();
         }else{
          //  console.log("outside");
        //  structure();
      }
      }
  }

  function fixstatus(){

    console.log(document.getElementById('status').value);

              if(document.getElementById('status').value==='completed'){

                document.getElementById('status').disabled = true;
              }else{
              document.getElementById('status').disabled = false;

          }

      }
