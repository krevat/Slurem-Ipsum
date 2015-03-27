/*
this code has been significantly edited from the flatiron-ipsum
github: http://github.com/meowist/flatiron-ipsum
*/


//document ready is a safety precaution that makes sure all of the HTML document has loaded before we try to add behavior.
$(document).ready(function(){

//Start event listener for click
$("#ipsum-form").submit(function() { 
  var paragraphs = '';

//Determine which of the check boxes is checked 
  var chosen_button = $("#ipsum-form input[name='choice']:checked").val();
  
//Grab the paragraph number the user enters
  var paragraph_number = $("#paragraph_count").val();

//Define var words as an empty array
  var words = [];

//Create an array of words to randomize later
  var words_drunk = ["look", "at", "her", "butt", "oh my god becky","im not drunkk","lol","tbh","just stop","shotsss","hahahaha","waa","i no rite","bye","felicia","YASSS","aww","baby","vodka","shitfaced","bro","brah","bottom's up","were r uuuuu","stahhp","lololol","i luv uu","chipotle","nOW","dsjkaewi;d", "i meen it", "xoxoxoxoxo", "xxoo", "X O", "yaway", "noway", "cosmo", "margz", "see u soon", "call an uber", "michael buble", "i only had half a cider", "im good", "too real", "captain", "jack", "love", "actually", "mean", "girls", "senorita", "bloombito", "facebook", "like it", "text", "don't do it", "look", "i", "really", "think", "you", "should", "beer", "bud light", "coronoa", "karaoke", "kahlua", "tequila", "whiskey", "sour", "rum", "coke", "triple sec", "martini", "single", "double", "i'll have a", "lager", "the red and blue", "hurrah hurrah", "wine", "always more wine", "gin", "sake bomb", "mimosa", "BRUNCH", "tonic", "ginger", "lawn gisland", "sex on the beach", "mister grey will see you now", "blue moon", "old fashioned", "Don draper", "expelliarmus", "lumos", "with hermione granger", "fkuc bitchez", "i", "assure you", "for", "feel", "the", "same", "sleeping", "work tomorrow", "highly", "last night", "drunk dial", "let's get", "are you", "THAnkS for", "my cat", "Dude", "why arent u", "eh", "one chatty bitch", "bonito", "this is bad lol", "sandwich", "i think that", "wanna go to", "hit me in the feels", "?", "it's britney bitch", "you go glen coco", "AAH"];
  var words_lorem = ['a','abhorreant','ac','accommodare','accumsan','accusam','accusamus','accusata','ad','adhuc','adipisci','adipiscing','admodum','adolescens','adversarium','aenean','aeque','aeterno','affert','agam','albucius','alia','alienum','alii','aliquam','aliquando','aliquet','aliquid','aliquip','altera','alterum','amet','an','ancillae','animal','ante','antiopam','apeirian','aperiam','aperiri','appareat','appellantur','appetere','aptent','arcu','argumentum','assentior','assueverit','assum','at','atomorum','atqui','auctor','audiam','audire','augue','autem','bibendum','blandit','bonorum','brute','case','causae','cetero','ceteros','choro','cibo','civibus','class','clita','commodo','commune','complectitur','comprehensam','conceptam','concludaturque','conclusionemque','condimentum','congue','consectetuer','consectetur','consequat','consequuntur','consetetur','constituam','constituto','consul','consulatu','contentiones','conubia','convallis','convenire','copiosae','corpora','corrumpit','cotidieque','cras','cu','cubilia','cum','curabitur','curae','cursus','dapibus','debet','debitis','decore','definiebas','definitionem','definitiones','delectus','delenit','deleniti','delicata','delicatissimi','democritum','denique','deseruisse','deserunt','deterruisset','detracto','detraxit','diam','dicam','dicant','dicat','diceret','dicit','dico','dicta','dictas','dictum','dicunt','dignissim','dis','discere','disputando','disputationi','dissentias','dissentiet','dissentiunt','docendi','doctus','dolor','dolore','dolorem','dolores','dolorum','doming','donec','dui','duis','duo','ea','eam','efficiantur','efficiendi','efficitur','egestas','eget','ei','eirmod','eius','elaboraret','electram','eleifend','elementum','eligendi','elit','elitr','eloquentiam','enim','eos','epicurei','epicuri','equidem','erant','erat','eripuit','eros','errem','error','erroribus','eruditi','esse','essent','est','et','etiam','eu','euismod','eum','euripidis','everti','evertitur','ex','exerci','expetenda','expetendis','explicari','fabellas','fabulas','facer','facete','facilis','facilisi','facilisis','falli','fames','fastidii','faucibus','felis','fermentum','ferri','feugait','feugiat','fierent','finibus','forensibus','fringilla','fugit','fuisset','fusce','gloriatur','graece','graeci','graecis','graeco','gravida','gubergren','habemus','habeo','harum','has','hendrerit','himenaeos','hinc','his','homero','honestatis','iaculis','id','idque','ignota','iisque','illud','illum','impedit','imperdiet','impetus','in','inani','inceptos','inciderint','incorrupte','indoctum','inermis','inimicus','insolens','instructior','integer','integre','intellegam','intellegat','intellegebat','interdum','interesset','interpretaris','invenire','invidunt','ipsum','iracundia','iriure','iudicabit','iudico','ius','iusto','iuvaret','justo','labitur','laboramus','labore','labores','lacinia','lacus','laoreet','latine','laudem','lectus','legendos','legere','legimus','leo','liber','liberavisse','libero','libris','ligula','litora','lobortis','lorem','lucilius','luctus','ludus','luptatum','maecenas','magna','magnis','maiestatis','maiorum','malesuada','malis','malorum','maluisset','mandamus','massa','mattis','mauris','maximus','mazim','mea','mediocrem','mediocritatem','mei','meis','mel','meliore','melius','menandri','mentitum','metus','mi','minim','minimum','mnesarchum','moderatius','modo','modus','molestiae','molestie','mollis','montes','morbi','movet','mucius','mundi','munere','mus','mutat','nam','nascetur','natoque','natum','ne','nec','necessitatibus','neglegentur','nemore','neque','nibh','nihil','nisi','nisl','no','nobis','noluisse','nominati','nominavi','non','nonumes','nonumy','noster','nostra','nostro','nostrud','nostrum','novum','nulla','nullam','numquam','nunc','nusquam','oblique','ocurreret','odio','offendit','officiis','omittam','omittantur','omnes','omnesque','omnis','omnium','oporteat','oportere','option','oratio','orci','ornare','ornatus','partem','partiendo','parturient','patrioque','paulo','pellentesque','penatibus','per','percipit','percipitur','perfecto','pericula','periculis','perpetua','persecuti','persequeris','persius','pertinacia','pertinax','petentium','phaedrum','pharetra','phasellus','philosophia','placerat','platonem','ponderum','populo','porro','porta','porttitor','posidonium','posse','possim','possit','postea','postulant','posuere','praesent','pretium','pri','prima','primis','principes','pro','probatus','probo','prodesset','proin','prompta','propriae','pulvinar','purto','purus','putant','putent','quaeque','quaerendum','quaestio','qualisque','quam','quando','quas','quem','qui','quidam','quis','quisque','quo','quod','quodsi','quot','rationibus','rebum','recteque','recusabo','referrentur','reformidans','regione','reprehendunt','reprimique','repudiandae','repudiare','reque','rhoncus','ridens','ridiculus','risus','rutrum','sadipscing','saepe','sagittis','sale','salutandi','salutatus','sanctus','saperet','sapien','sapientem','scaevola','scelerisque','scripserit','scripta','scriptorem','sea','sed','sem','semper','senserit','sensibus','sententiae','signiferumque','similique','simul','singulis','sint','sit','sociis','sociosqu','sodales','soleat','solet','sollicitudin','solum','soluta','sonet','splendide','stet','suas','suavitate','summo','sumo','suscipiantur','suscipit','suspendisse','tacimates','taciti','tale','tamquam','tantas','tation','te','tellus','tempor','temporibus','theophrastus','tibique','timeam','tincidunt','tollit','torquatos','torquent','tortor','tota','tractatos','tristique','tritani','turpis','ubique','ullamcorper','ullum','ultrices','ul'];
  var words_all = words_drunk.concat(words_lorem);

//ELSE IF determines which array of words to show the user
  if (chosen_button == "mixed-lorem") {
   words = words_all;
} else if (chosen_button == "just-slorem") {
   words = words_drunk; 
} 

if (paragraph_number >= 1){
  //for each paragraph
  //paragraphs += stringReplaceAt("quaint",5,"t",3);
  paragraphs += "<p>Slurem ipsum dol0r noooo ";
  for (var z=0; z < paragraph_number; z++){
  //determine how many sentences in this paragraph
    var sentence_number = randomIntFromInterval(3,7);
    if (z != 0) {
      paragraphs += "<p>";
    }
    //for each sentence
    for (var y = 0; y < sentence_number; y++){
      //determine how many words in this sentence
      var words_number = randomIntFromInterval(3,10);
      var current_sentence = '';
      //assemble sentence. add a period and a space at the end!
      for (var x = 0; x < words_number; x++){
        //find a random word in the array
        var randomNum = randomIntFromInterval(0,words.length-1);
        // this is which word we are adding
        var theWord = words[randomNum];
        // this is the index of the letter we will change
        var randomLetterIndex = randomIntFromInterval(0,theWord.length-1);
        // this is the letter we are changing
        var randomLetter = theWord.charAt(randomLetterIndex);
        // this is how many times we are going to repeat the number
        var randomMultiplyer =  randomIntFromInterval(0,12);
        // word,i,char,num
        theWord = stringReplaceAt(theWord,randomLetterIndex, randomLetter, randomMultiplyer);
        // capitalize if it's the first word some percent of the time
        var xPercent = randomIntFromInterval (0, 10);
        if (x == 0 && xPercent < 8){
          theWord = capitalizeFirstLetter(theWord);
        }
        current_sentence += (" " + theWord);
        //current_sentence += (" " + words[randomNum]);
        //current_sentence += "word";
      }
      current_sentence += ". ";
      paragraphs += current_sentence;

    }
    paragraphs += "</p>"
  }//end giant for loop  
}
else {
  paragraphs = "<p>R u drunk?</p>";
}


 $("#print-paragraphs").empty().html("<p>" + paragraphs + "</p>");

// //Prevent form from actually submitting so page does not reload
 return false; 
//End jQuery event listener
  });

//End document ready
});
 
 function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function stringReplaceAt(word,i,char,num){
    if (num > 6){
      return word;
    }
    else {
      var int = 1;
    // acount for edge case
    if (i == 0){
      int = 2;
    }
    var tempchar = char;
    while (int < num){
      char += tempchar;
      int++;
    }
    if (i == word.length - 1){
      return word.substr(0, i) + char;
    }
    else {
      return word.substr(0, i) + char + word.substr(i + 1, word.length - 1);
    }
  }  
}

function capitalizeFirstLetter(s){
    return s.charAt(0).toUpperCase() + s.slice(1);
}
