$(document).ready(function(){
$.ajax({
 url:"https://cors-anywhere.herokuapp.com/https://s3-ap-southeast-1.amazonaws.com/edwisor-india-bucket/assignments/web03/JSS1l2/bigbangtheory.json",
 dataType:"json",
 success:function(data)
 {
   let date = data.premiered;
   date = new Date(date).toUTCString();
   date = date.split(' ').slice(3, 4).join(' ');

   $('#title_and_description').html('<div class="col-md-3"><img src="'+data.image.medium+'" alt="big band theory" style="margin-bottom:50px;box-shadow: 0 0 46px #C0C0C0;border:10px solid white;border-radius:6px;" class="img img-responsive"></div><div class="col-md-9"><h3 style="text-shadow: 0 0 66px #C0C0C0;"><b>'+data.name+'</b></h3><h4>Rating : '+data.rating.average+' | Genre : '+data.genres[0]+' | '+date+' | Type : '+data.type+' | Language : '+data.language+'</h4><hr style="border: 1px solid #C0C0C0;">'+data.summary+'</div>');

   let episode_names = [];

   for(episode_name of data._embedded.episodes)
   {
     episode_names.push(episode_name.name);
   }


   let options = {
     data: episode_names,

     list: {
       match: {
         enabled: true
       },
       showAnimation: {
       type: "fade", //normal|slide|fade
       time: 300,
       callback: function() {}
     },

     hideAnimation: {
       type: "slide", //normal|slide|fade
       time: 300,
       callback: function() {}
     }
    }
   };

   $("#episode_name").easyAutocomplete(options);

 },

});


$("#season_episode_info").click(function(){
  let season_number = $("#season_number").val();
  let episode_number = $("#episode_number").val();

  let numbers = /^[0-9]+$/;

  if(($.trim(season_number) != '' && $.trim(episode_number) != ''))
  {
    if((!/^[0-9]+$/.test(season_number)) && (!/^[0-9]+$/.test(episode_number)))
    {
      $('#season_episode_errors').html('Invalid season number or episode number');
    }
    else
    {
        $('#season_episode_errors').html('');
        season_episode_numbers(season_number,episode_number);
    }
  }
  else
  {
    $('#season_episode_errors').html('').html('Invalid season number or episode number');
  }

});


$("#episode_ids_info").click(function(){
  let episode_ids = $("#episode_ids").val().split(',');
  let episode_ids_input = [];
  let final_episode_ids = [];



  $.ajax({
   url:"https://cors-anywhere.herokuapp.com/https://s3-ap-southeast-1.amazonaws.com/edwisor-india-bucket/assignments/web03/JSS1l2/bigbangtheory.json",
   dataType:"json",
   success:function(data)
   {
     let ids = [];
     for (id of data._embedded.episodes)
     {
       ids.push(id.id);
     }

     for(id in episode_ids)
     {
       episode_ids_input.push(parseInt(episode_ids[id]));
     }

     for(id in episode_ids_input)
     {
       if (($.inArray(episode_ids_input[id], final_episode_ids)) == -1)
       {
         final_episode_ids.push(episode_ids_input[id]);
       }
     }

     if(($.trim(season_number) != '' && $.trim(episode_number) != ''))
     {
           $('#episode_ids_errors').html('');
           episode_id_info(final_episode_ids,ids);
     }
     else
     {
       $('#episode_ids_errors').html('').html('Invalid episode ids provided');
     }

   }
  });

});



$("#episode_name_info").click(function(){
  let episode_name = $("#episode_name").val();

  $.ajax({
   url:"https://cors-anywhere.herokuapp.com/https://s3-ap-southeast-1.amazonaws.com/edwisor-india-bucket/assignments/web03/JSS1l2/bigbangtheory.json",
   dataType:"json",
   success:function(data)
   {
     let episode_names = [];
     for (id of data._embedded.episodes)
     {
       episode_names.push(id.name);
     }

     if($.trim(episode_name) != '')
     {
       if(episode_names.indexOf(episode_name)!=-1)
       {
         $('#episode_name_errors').html('');
         episode_name_info(episode_name);
       }
       else
       {
          $('#episode_name_errors').html('').html('Invalid episode name');
       }
     }
     else
     {
       $('#episode_name_errors').html('').html('Invalid episode name');
     }

   }
  });

});



let season_episode_numbers = (season_number, episode_number, season_data = "https://cors-anywhere.herokuapp.com/https://s3-ap-southeast-1.amazonaws.com/edwisor-india-bucket/assignments/web03/JSS1l2/bigbangtheory.json")=>{

  $.ajax({
  url:season_data,
  dataType:"json",
  success:function(data)
  {
    let flag = true;

    for(episode of data._embedded.episodes)
    {
      //console.log(episode.name);
      if(episode.season == season_number && episode.number == episode_number)
      {
        flag = false;

        console.log(episode.image.medium);
        let date = episode.airdate;
        date = new Date(date).toUTCString();
        date = date.split(' ').slice(0, 4).join(' ');
        $('#season_episode_response').html('').html('<div class="panel panel-default"><div class="panel-body"><div class="col-md-3"><img src="'+episode.image.medium+'" style="box-shadow: 0 0 46px #C0C0C0;margin-top:40px;margin-bottom:30px;border:6px solid white;border-radius:5px;" class="img img-responsive" alt=""></div><div class="col-md-9"><h3 style="text-shadow: 0 0 66px #C0C0C0;"><b>'+episode.name+'</b></h3><h4 style="font-size:1.4rem;font-weight:600;">Season : '+episode.season+' | Episode : '+episode.number+' | Duration : '+episode.runtime+'mins | Release date : '+date+'</h4><hr style="border: 1px solid #C0C0C0;">'+episode.summary+'</div></div></div>');

        break;

      }
    }

    if(flag == true)
    {
      $('#season_episode_response').html('').html('<div class="panel panel-default"><div class="panel-body"><b>No matches found</b></div></div>');

    }

  },
  complete:function(data) {
                    $('html, body').animate({
                        scrollTop: $("#season_episode_response").offset().top
                    }, 2000);
                }

 });

}


let episode_id_info = (final_episode_ids,ids, season_data = "https://cors-anywhere.herokuapp.com/https://s3-ap-southeast-1.amazonaws.com/edwisor-india-bucket/assignments/web03/JSS1l2/bigbangtheory.json")=>{

$('#season_episode_response').html('');

$.ajax({
  url:season_data,
  dataType:"json",
  success:function(data)
  {
    for (id in final_episode_ids)
    {
      if(ids.indexOf(final_episode_ids[id])!=-1)
      {
        for(episode of data._embedded.episodes)
        {
          if(episode.id == final_episode_ids[id])
          {

            let date = episode.airdate;
            date = new Date(date).toUTCString();
            date = date.split(' ').slice(0, 4).join(' ');
            $('#season_episode_response').append('<div class="panel panel-default"><div class="panel-body"><div class="col-md-3"><img src="'+episode.image.medium+'" style="box-shadow: 0 0 46px #C0C0C0;margin-top:40px;margin-bottom:30px;border:6px solid white;border-radius:5px;" class="img img-responsive" alt=""></div><div class="col-md-9"><h3 style="text-shadow: 0 0 66px #C0C0C0;"><b>'+episode.name+'</b></h3><h4 style="font-size:1.4rem;font-weight:600;">Season : '+episode.season+' | Episode : '+episode.number+' | Duration : '+episode.runtime+'mins | Release date : '+date+'</h4><hr style="border: 1px solid #C0C0C0;">'+episode.summary+'</div></div></div>');

          }

        }
      }
      else
      {
        $('#season_episode_response').append('<div class="panel panel-default"><div class="panel-body"><b>No matches found with episode id '+final_episode_ids[id]+'</b></div></div>');

      }
    }
  },
  complete:function(data) {
                    $('html, body').animate({
                        scrollTop: $("#season_episode_response").offset().top
                    }, 2000);
                }
});


}


let episode_name_info = (episode_name, season_data="https://cors-anywhere.herokuapp.com/https://s3-ap-southeast-1.amazonaws.com/edwisor-india-bucket/assignments/web03/JSS1l2/bigbangtheory.json")=>{

  $.ajax({
    url:season_data,
    dataType:"json",
    success:function(data)
    {

          for(episode of data._embedded.episodes)
          {
            if(episode.name == episode_name)
            {
              let date = episode.airdate;
              date = new Date(date).toUTCString();
              date = date.split(' ').slice(0, 4).join(' ');
              $('#season_episode_response').html('').html('<div class="panel panel-default"><div class="panel-body"><div class="col-md-3"><img src="'+episode.image.medium+'" style="box-shadow: 0 0 46px #C0C0C0;margin-top:40px;margin-bottom:30px;border:6px solid white;border-radius:5px;" class="img img-responsive" alt=""></div><div class="col-md-9"><h3 style="text-shadow: 0 0 66px #C0C0C0;"><b>'+episode.name+'</b></h3><h4 style="font-size:1.4rem;font-weight:600;">Season : '+episode.season+' | Episode : '+episode.number+' | Duration : '+episode.runtime+'mins | Release date : '+date+'</h4><hr style="border: 1px solid #C0C0C0;">'+episode.summary+'</div></div></div>');

            }

          }

    },
    complete:function(data) {
                      $('html, body').animate({
                          scrollTop: $("#season_episode_response").offset().top
                      }, 2000);
                  }
  });

}

});
