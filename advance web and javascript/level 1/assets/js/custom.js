$(document).ready(function(){


   $.ajax({
    url:"https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json",
    dataType:"json",
    success:function(data)
    {
      var pokemon_names = [];
      var pokemon_weakness = [];

      console.log(data);
      for(var i=0;i<data.pokemon.length;i++)
      {
        pokemon_names.push(data.pokemon[i].name);

        for(var j=0;j<data.pokemon[i].weaknesses.length;j++)
        {
          pokemon_weakness.push(data.pokemon[i].weaknesses[j]);
        }
      }
    //  console.log(pokemon_names);
    //  console.log(pokemon_weakness);

      var pokemon_weaknesses = [];
    	for (var i = 0; i < pokemon_weakness.length; i++)
    	{
    		if (($.inArray(pokemon_weakness[i], pokemon_weaknesses)) == -1)
    		{
    			pokemon_weaknesses.push(pokemon_weakness[i]);
    		}
    	}

    //	console.log(pokemon_weaknesses);

      var pokemon_names_weaknesses = $.merge(pokemon_names, pokemon_weaknesses);

    //  console.log(pokemon_names_weaknesses);


      var options = {
      	data: pokemon_names_weaknesses,

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
    			time: 400,
    			callback: function() {}
    		}
       }

      };

      $("#pokemon_names_weaknesses").easyAutocomplete(options);



    }
  });




    $("#get_info").click(function(){

     var get_name = $("#pokemon_names_weaknesses").val();

    if($.trim(get_name) != '')
    {
      $('#input_errors').html('');
      $('#pokemon_info').empty();

          $.ajax({
           url:"https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json",
           dataType:"json",
           success:function(data)
           {
             var pokemon_names = [];
             var pokemon_weakness = [];

             var pokemon_weaknesses = [];

             for(var i=0;i<data.pokemon.length;i++)
             {
               pokemon_names.push(data.pokemon[i].name);

               for(var j=0;j<data.pokemon[i].weaknesses.length;j++)
               {
                 pokemon_weakness.push(data.pokemon[i].weaknesses[j]);
               }
             }


             	for (var i = 0; i < pokemon_weakness.length; i++)
             	{
             		if (($.inArray(pokemon_weakness[i], pokemon_weaknesses)) == -1)
             		{
             			pokemon_weaknesses.push(pokemon_weakness[i]);
             		}
             	}


              if(($.inArray(get_name, pokemon_names)) !== -1)
              {
                //alert("name exists");
                pokemon_details(get_name);
                pokemon_next_evolution(get_name);
              }
              else if(($.inArray(get_name, pokemon_weaknesses)) !== -1)
              {
                //alert("Weakness exists");
                pokemon_weaknesses_list(get_name);
              }
              else
              {
                $('#get_response').html('');
                $('#input_errors').html('Not a valid name or weakness');
              }

           }
         });

          }
          else
          {
            $('#get_response').html('');
            $('#input_errors').html('Please enter pokemon name or weakness');
          }


          });


});


function pokemon_details(name)
{
  $.ajax({
   url:"https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json",
   dataType:"json",
   success:function(data)
   {
     var pokemon_names = [];
     var pokemon_weakness = [];

     var pokemon_weaknesses = [];

     for(var i=0;i<data.pokemon.length;i++)
     {
       if(data.pokemon[i].name == name)
       {
         //alert(data.pokemon[i].num);
         //alert(data.pokemon[i].next_evolution);
         //var img = "http://www.serebii.net/pokemongo/pokemon/002.png";
         var name_1 = data.pokemon[i].name;
         var img = data.pokemon[i].img;
         var num = data.pokemon[i].num;

         if(data.pokemon[i].egg!=null)
         {
           var egg = data.pokemon[i].egg;
         }
         else {
           var egg = "Not defined";
         }

         var type = [];
         var multipliers = [];
         var next_evolution = [];
         var prev_evolution = [];
         var weaknesses = [];

         var height = data.pokemon[i].height;
         var weight = data.pokemon[i].weight;
         var avg_spawns = data.pokemon[i].avg_spawns;
         var spawn_chance = data.pokemon[i].spawn_chance;
         var spawn_time = data.pokemon[i].spawn_time;
         var candy = data.pokemon[i].candy;
         var candy_count = data.pokemon[i].candy_count;


         if((data.pokemon[i].type!=null))
         {
           for(var j = 0;j<data.pokemon[i].type.length;j++)
           {
             type.push(data.pokemon[i].type[j]);
           }
         }
         else {
           type.push("Not defined");
         }



         if((data.pokemon[i].multiplers!=null))
         {
           for(var j = 0;j<data.pokemon[i].multiplers.length;j++)
           {
             multipliers.push(data.pokemon[i].multipliers[j]);
           }
         }
         else {
           multipliers.push("Not defined");
         }

          if(data.pokemon[i].next_evolution!=null)
          {
            for(var j = 0;j<data.pokemon[i].next_evolution.length;j++)
            {
              next_evolution.push(data.pokemon[i].next_evolution[j].name);
            }
          }
          else {
            next_evolution.push("Not defined");
          }

          if(data.pokemon[i].prev_evolution!=null)
          {
            for(var j = 0;j<data.pokemon[i].prev_evolution.length;j++)
            {
              prev_evolution.push(data.pokemon[i].prev_evolution[j].name);
            }
          }
          else {
            prev_evolution.push("Not defined");
          }


          if(data.pokemon[i].weaknesses!=null)
          {
            for(var j = 0;j<data.pokemon[i].weaknesses.length;j++)
            {
              weaknesses.push(data.pokemon[i].weaknesses[j]);
            }
          }
          else {
            weaknesses.push("Not defined");
          }

       }
     }

     $('#get_response').html('<div class="panel panel-default"><div class="panel-heading"><center><img src="'+img+'" class="img img-responsive" alt="'+img+'"><h3>'+name_1+'</h3></center></div><div class="panel-body"><div class="col-md-5"><table class="table table-responsive table-bordered table-condensed"><h3>Pokemon details<hr style="margin:6px 0px;"></h3><tbody><tr><td><b>Pokemon Num :</b></td><td>'+num+'</td></tr><tr><td><b>Pokemon Name :</b></td><td>'+name_1+'</td></tr><tr><td><b>Pokemon Type :</b></td> <td>'+type.toString()+'</td></tr><tr><td><b>Pokemon Multipliers :</b></td> <td>'+multipliers.toString()+'</td></tr><tr><td><b>Pokemon Next Evolution :</b></td> <td>'+next_evolution.toString()+'</td></tr><tr><td><b>Pokemon Prev Evolution :</b></td> <td>'+prev_evolution.toString()+'</td></tr><tr><td><b>Pokemon Height :</b></td> <td>'+height+'</td></tr><tr><td><b>Pokemon Weight :</b></td><td>'+weight+'</td></tr><tr><td><b>Pokemon Egg :</b></td><td>'+egg+'</td></tr><tr><td><b>Average Spawns :</b></td><td>'+avg_spawns+'</td></tr><tr><td><b>Spawn Chance :</b></td><td>'+spawn_chance+'</td></tr><tr><td><b>Spawn Time :</b></td><td>'+spawn_time+'</td></tr><tr><td><b>Candy :</b></td><td>'+candy+'</td></tr><tr><td><b>Candy Count :</b></td> <td>'+candy_count+'</td></tr><tr><td><b>Pokemon Weaknesses :</b></td><td>'+weaknesses.toString()+'</td></tr></tbody></table></div><div class="col-md-7" id="get_next_evolution"></div></div></div>');



     }
   });
}

function pokemon_next_evolution(name)
{
  $.ajax({
   url:"https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json",
   dataType:"json",
   success:function(data)
   {
     var pokemon_next_evolution_name = [];
     var pokemon_next_evolution_names = [];

     for(var i=0;i<data.pokemon.length;i++)
     {
       if(data.pokemon[i].next_evolution!=null)
       {
         for(var j = 0;j<data.pokemon[i].next_evolution.length;j++)
         {
           if(data.pokemon[i].next_evolution[j].name == name)
           {
             pokemon_next_evolution_name.push(data.pokemon[i].name);

             //console.log(data.pokemon[i].name);
             //console.log(pokemon_next_evolution_name);
           }
         }
       }
     }

     if(pokemon_next_evolution_name.length)
     {
       for (var i = 0; i < pokemon_next_evolution_name.length; i++)
       {
         if (($.inArray(pokemon_next_evolution_name[i], pokemon_next_evolution_names)) == -1)
         {
           pokemon_next_evolution_names.push(pokemon_next_evolution_name[i]);
         }
       }
       //console.log(pokemon_next_evolution_names);
       $('#get_next_evolution').html('<table class="table table-responsive table-bordered table-condensed"><h3>List of pokemons having '+name+' in their next evaluation <hr style="margin:6px 0px;"></h3><tbody id="pokemon_names_list"></tbody></table>');

       $('#pokemon_names_list').empty();

$.each(pokemon_next_evolution_names, function(index, value) {
  // use .text() instead of just writing the value to the <p> tag, so we're safe
  // if the value contains <, etc.
  $('#pokemon_names_list').append('<tr><td>'+value+'</td></tr>');
});


     }
     else
     {
       pokemon_next_evolution_names.push("No pokemons found");
       //console.log(pokemon_next_evolution_names);
       $('#get_next_evolution').html('<table class="table table-responsive table-bordered table-condensed"><h3>List of pokemons having '+name+' in their next evaluation <hr style="margin:6px 0px;"></h3><tbody><tr><td>'+pokemon_next_evolution_names.toString()+'</td></tr></tbody></table>');

     }







   }
 });


}

function pokemon_weaknesses_list(name)
{
  $.ajax({
   url:"https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json",
   dataType:"json",
   success:function(data)
   {
     var pokemon_weakness_name = [];
     var pokemon_weakness_names = [];

     for(var i=0;i<data.pokemon.length;i++)
     {
       if(data.pokemon[i].weaknesses!=null)
       {
         for(var j = 0;j<data.pokemon[i].weaknesses.length;j++)
         {
           if(data.pokemon[i].weaknesses[j] == name)
           {
             pokemon_weakness_name.push(data.pokemon[i].name);

             //console.log(data.pokemon[i].name);
             //console.log(pokemon_next_evolution_name);
           }
         }
       }
     }

     if(pokemon_weakness_name.length)
     {
             for(var i = 0; i < pokemon_weakness_name.length; i++)
             {
               if (($.inArray(pokemon_weakness_name[i], pokemon_weakness_names)) == -1)
               {
                 pokemon_weakness_names.push(pokemon_weakness_name[i]);
               }
             }

             pokemon_weakness_names.sort();

             $('#get_response').html('<div class="panel panel-default"><div class="panel-body"><table class="table table-bordered table-responsive table-condensed"><h3>List of pokemons having '+name+' as weakness <hr style="margin:6px 0px;"></h3><tbody id="pokemon_names_list"></tbody></table></div></div>');


             $('#pokemon_names_list').empty();

            $.each(pokemon_weakness_names, function(index, value) {
              // use .text() instead of just writing the value to the <p> tag, so we're safe
              // if the value contains <, etc.
              $('#pokemon_names_list').append('<tr><td>'+value+'</td></tr>');
            });


         }
         else
         {
           pokemon_weakness_names.push("No pokemons found");
           //console.log(pokemon_next_evolution_names);
           $('#get_response').html('<div class="panel panel-default"><div class="panel-body"><table class="table table-bordered table-responsive table-condensed"><h3>List of pokemons having '+name+' as weakness <hr style="margin:6px 0px;"></h3><tbody><tr><td>'+pokemon_weakness_names.toString()+'</td></tr></tbody></table></div></div>');

           //$('#get_next_evolution').html('<table class="table table-responsive table-bordered table-condensed"><h3>List of pokemons having '+name+' in their next evaluation <hr style="margin:6px 0px;"></h3><tbody><tr><td>'+pokemon_next_evolution_names.toString()+'</td></tr></tbody></table>');

         }

       }
     });
}
