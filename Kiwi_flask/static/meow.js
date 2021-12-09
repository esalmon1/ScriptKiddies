
    var vote =0;
    var totalVotes =0;
    var score= 0;
    function displayScore()
    {
    score = vote/totalVotes;

    document.getElementById('count').innerHTML = Math.round(score);
    }

    function HelpfulCount()
    {
      totalVotes++;
      vote+=75;
      displayScore();
    }

    function NotHelpfulCount()
    {
      totalVotes++;
      vote+=25;
      displayScore();
    }

    function KindaHelpfulCount()
    {
      totalVotes++;
      vote+=50;
      displayScore();
    }

    function SuperHelpfulCount()
    {
      totalVotes++;
      vote+=100;
      displayScore();
    }
