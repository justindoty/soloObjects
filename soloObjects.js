var lawTeam = {
  show: 'Suits',
  profession: 'lawyers',
  location: 'New York',
  partner1: 'Pearson',
  partner2: 'Specter',
  partner3: 'Litt',
  harveyTallent: 'closer',
  mikeTallent: 'photographic memory',
  addMainCharacters: function (allStar , giftedFraud) {
        lawTeam.allStar = allStar;
        lawTeam.giftedFraud = giftedFraud;
      },
  aTeam: function() {
    return this.allStar + " and " + this.giftedFraud;
      },
  about: function(aTeam) {
         console.log(this.show + " is a tv show about bad ass " + this.profession + ". The show centers around my favorite team on tv, the "+this.profession+ " " + this.aTeam() + ".\n" + "It takes place in " + this.location + ", at the law firm " + this.partner1 + ", " + this.partner2 + ", " + this.partner3 + ". What makes this team unique, is that " + this.giftedFraud + " never went to\n" + "law school. Mike's gift is his " + this.mikeTallent + ", and Harvey's gift is he's an amazing " + this.harveyTallent + ".");
      },
};

//Call add function and add the main characters.
//Call the about function to console.log description.
lawTeam.addMainCharacters("Harvey Specter" , "Mike Ross");
lawTeam.about();
