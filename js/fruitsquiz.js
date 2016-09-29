var score = 0;
$(document).ready(function() {
  var images = ["images/df.jpg","images/papaya.jpg","images/olive.jpg","images/bb.jpg","images/veg.jpg","images/berries.jpg","images/lyc.jpg","images/peach.jpg"];
  var setOfQns = [
    {
      question: 'Fruits are developed from the ovaries of a flower. Select the fruit that is derived from a plant known as moonflower because its flowers bloom only at night.',
      choices: [{id: '0', text: 'Dragon Fruit'},
                {id: '1', text: 'Kiwi'},
                {id: '2', text: 'Apple'},
                {id: '3', text: 'Plum'}],
      answer: 0,
      detail: '<span id="colorRed">Dragon Fruit</span>. <br> It is also known as Pitaya. Its flowers bloom only at night and hence, it is called Moonflower. Vietman is currently the main exporter of this fruit. <br> When you are eating Dragon Fruit the next time, do remember the interesting story behind it. Learn more about <a target="_blank" href="http://eresources.nlb.gov.sg/infopedia/articles/SIP_768_2005-01-11.html">Dragon Fruit</a>.'
    },
    {
      question: 'Based on the options given, select the fruit that contain a enzyme called Papain. It can be used to tenderize meat.',
      choices: [{id: '0', text: 'Lemon'},
                {id: '1', text: 'Mango'},
                {id: '2', text: 'Papaya'},
                {id: '3', text: 'Pear'}],
      answer: 2,
      detail: '<span id="colorRed">Papaya</span>. <br> Apart from the above benefits, Papain found in Papaya is also used as natural exfoliant to remove dead skin cells! Discover more on <a target="_blank" href="http://superfoodprofiles.com/papaya-enzymes-digestion">Papaya</a>.'
    },
    {
      question: 'What is the fruit that has its branches made as wreaths at Olympic Games to congratulate champions?',
      choices: [{id: '0', text: 'Cherry'},
                {id: '1', text: 'Pomegranate'},
                {id: '2', text: 'Olive'},
                {id: '3', text: 'Fig'}],
      answer: 2,
      detail: '<span id="colorRed">Olive</span>. <br> Olive branch also symbolizes Peace in Greek culture. Today, it is more famous for its health properties. Read more about <a target="_blank" href="http://justfunfacts.com/interesting-facts-about-olives/">Olives</a>.'
    },
    {
      question: 'Blueberries are known to be rich in a type of flavonoid making them appear deep blue. What are they? ',
      choices: [{id: '0', text: 'Isoflavones'},
                {id: '1', text: 'Catechins'},
                {id: '2', text: 'Quercetin'},
                {id: '3', text: 'Anthocyanidins'}],
      answer: 3,
      detail: '<span id="colorRed">Anthocyanidins</span>. <br> Do not be afraid of those scientific terms! They are antioxidants available in different fruits, vegtables and sometimes teas! Green tea, for example, have Catechins. <a target="_blank" href="http://www.whfoods.com/genpage.php?tname=nutrient&dbid=119">Flavonoid FTW</a>!'
    },
    {
      question: 'Identify the fruit listed below that is commonly mistaken as vegetable.',
      choices: [{id: '0', text: 'Beet'},
                {id: '1', text: 'Cucumber'},
                {id: '2', text: 'Carrot'},
                {id: '3', text: 'Kale'}],
      answer: 1,
      detail: '<span id="colorRed">Cucumber</span>. <br> Surprise surprise! Cucumber have always been assumed as Vegtable, but technically because it have seeds, it is classified as Fruits. <a target="_blank" href="http://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/expert-blog/fruit-vegetable-difference/bgp-20056141">Other clarification here</a>!'
    },
    {
      question: 'Given the list shown below, choose the fruit with highest amount of Calcium.',
      choices: [{id: '0', text: 'Blueberry'},
                {id: '1', text: 'Blackcurrant'},
                {id: '2', text: 'Strawberry'},
                {id: '3', text: 'Raspberry'}],
      answer: 1,
      detail: '<span id="colorRed">Blackcurrant</span>. <br> Apart from Milk, there are other calcium-rich foods available. The choices listed all contain Calcium. Find out the other <a target="_blank" href="https://www.healthaliciousness.com/articles/high-calcium-fruits.php">fruits containing Calcium</a>. The next time you yearn milk, do give other calcium-filled fruits a try!'
    },
    {
      question: 'All fruits contain sugar called Fructose. Select the fruit listed below that has the highest content of sugar (per cup).',
      choices: [{id: '0', text: 'Avocado'},
                {id: '1', text: 'Blackberry'},
                {id: '2', text: 'Lychee'},
                {id: '3', text: 'Pineapple'}],
      answer: 2,
      detail: '<span id="colorRed">Lychee</span>. <br> Hey, sweet tooth! Replace your sweet snacks with <a target="_blank" href="http://www.womenshealthmag.com/food/high-low-sugar-fruits/slide/2">some fruits</a> here. Remember fruits are advised to be eaten in moderation. Excess servings might bring adverse effect.'
    },
    {
      question: 'Identify the country which Peach was first originated from.',
      choices: [{id: '0', text: 'China'},
                {id: '1', text: 'Australia'},
                {id: '2', text: 'Iran'},
                {id: '3', text: 'Turkey'}],
      answer: 0,
      detail: '<span id="colorRed">China</span>. <br> Peaches are not only tender and juicy, but it also represent longevity in Chinese culture. Check out <a target="_blank" href="http://www.npm.gov.tw/exh94/form9407/english/page02_06.html">the association of Peach and Immortality</a>.'
    }

  ];

  var currentIndex = 0;

  function navAlert(){
    alert("You will be redirect to the Homepage.");
  }

  $('#next').hide();

  $('#next').click(function() {
    $(this).slideUp();
      $(".wrongmsg").hide();
      $(".correctmsg").hide();
      if ((currentIndex < images.length - 1) && (currentIndex < setOfQns.length - 1) ) {
        currentIndex = currentIndex + 1;
      }
       else{
         endQuiz();
       }
      showQn();
      showAnswer();
      changeImage();
      $('.choicesbtn').prop( "disabled", false);
  });

  function showQn() {
    var individualQuestion = setOfQns[currentIndex];
    $('#qn').text(individualQuestion.question);
  }
  showQn();

  function showAnswer() {
    var individualQuestion = setOfQns[currentIndex];
    var choices = individualQuestion.choices;
    var choicebuttons = $('.choicesbtn');
    for(i = 0; i<choices.length; i++) {
      var choice = choices[i];
      var choicebutton = choicebuttons[i];
      $(choicebutton).text(choice.text);
      $(choicebutton).attr('data-id',choice.id);
    }
  }
  showAnswer();

  function changeImage(){
    $('#quiz').css({"background-image":"url("+images[currentIndex]+")", "background-size":'cover', "background-repeat":'no-repeat', "background-position":'bottom', "background-attachment":'fixed'});
  }
  changeImage();

  function checkAnswer() {
    $('.choicesbtn').click(function()
    {
      $(this).data('clicked', true);
      $('#next').slideDown();
      var individualQuestion = setOfQns[currentIndex];
      var detail = individualQuestion.detail;
      var answer = individualQuestion.answer;
      console.log(detail)
      if ($(this).data('id') !== answer){
        $('.wrongmsg').fadeIn();
        //use html() because any content previously within the element will be completely replaced
        $('.wrongmsg').html("<span class='colorMsg'> Sorry, you have selected a wrong option!</span> <br> The correct answer is " +detail);

      }
      else {
        $('.correctmsg').fadeIn();
        $('.correctmsg').html("<span class='colorMsg'> Yes, you got it!</span> <br> The correct answer is " +detail);
        score++;
        $('#scoreResult').text(score);
      }
    $('.choicesbtn').prop( "disabled", true);
    });
  }
  checkAnswer();

  function endQuiz(){
    $(".navbuttons").css("visibility", "hidden");
    $('.questionsPanel').hide();
    $('.endQuiz').slideDown();
    $('.endQuiz').append($('#scoreResult'));
    $('.endQuiz').append("<br>Take the <a href='index.html'>Quiz</a> again!");
    $('.msg').removeClass("correctmsg");
    $('.msg').removeClass("wrongmsg");
  }
});
