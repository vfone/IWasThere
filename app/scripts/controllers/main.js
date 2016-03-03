'use strict';

/**
 * @ngdoc function
 * @name herdApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the herdApp
 */
angular.module('herdApp')
  .controller('MainCtrl', function() {

    this.list1 = {
      title: 'AngularJS1 - Drag Me'
    };
    this.list2 = {
      title: 'AngularJS2 - Drag Me'
    };
    this.list3 = {
      title: 'AngularJS3 - Drag Me'
    };
    this.list4 = {};
    this.interpretation = {};
    this.keywords = [];
    this.commentsJSON = {
      "organic": [],
      "picked": []
    };
    this.noResult = false;
    this.addKeyword = function() {
        var keywordArr = this.search.keyword.split(',');
        var keywordArr_len = keywordArr.length;
        for (var i = 0; i < keywordArr_len; i++) {
          this.keywords.push(keywordArr[i]);
        }
        this.search.keyword = '';
      },
      this.removeKeyword = function(idx) {
        this.keywords.splice(idx, 1);
      },
      this.doSearch = function() {
          if(this.search.topic=='test'){
              this.commentsJSON.organic = this.fakecommentsJSON;
          }
      }
    this.pickComment = function(idx) {
      //add comment to picked object
      this.commentsJSON.picked.push(this.commentsJSON.organic[idx]);
      //remove it from organic object
      this.commentsJSON.organic.splice(idx, 1);
    };
    this.unpickComment = function(idx) {
      //add comment to organic object
      this.commentsJSON.organic.unshift(this.commentsJSON.picked[idx]);
      //remove it from picked object
       this.commentsJSON.picked.splice(idx, 1);
    };
    //this.searchKeywordArr = this.search.keyword.split(',');

    this.fakecommentsJSON = [{
      "Name": "Bruce Shaw",
      "Channel": "Facebook",
      "Email":"bruce.s@facebook.com",
      "Like": 1,
      "Date": "February 22 at 5:44pm",
      "Message": "Ask the minister o farts, surely he will help."
    }, {
      "Name": "Connie Handbury",
      "Channel": "Facebook",
      "Email":"connie.h@facebook.com",
      "Like": 1,
      "Date": "February 22 at 5:11pm",
      "Message": "Sorry guys, but if the art world did not knock back private sponsorship mega $$ it would not be in such deep dodo. What price our history? Ask the earth warriors for that answer."
    }, {
      "Name": "Hoppy Chandler",
      "Channel": "Facebook",
      "Email":"hoppy.c@facebook.com",
      "Like": 1,
      "Date": "February 22 at 5:11pm",
      "Message": "This sounds VERY familiar"
    }, {
      "Name": "Jennifer Crone",
      "Channel": "Facebook",
      "Email":"jennufer.c@facebook.com",
      "Like": 1,
      "Date": "February 23 at 9:13am",
      "Message": "36 million cut from other cultural institutions, 32 million given to the national war memorial. The rewriting of Australia's history as Homeric myth has to stop. I was shocked when I went to the National Gallery of Art in Canberra to see the whole place turned into a type of mall - Emporia selling all kinds of crap were everywhere & the Tom Roberts exhibition was jingoistic to say the least. Not only that but the glorious brutalist building with its soaring exhibition spaces has been lined with shopping mall style white plaster, an effect the corralling of the aboriginal poles behind a fence and the new mall like entrance only accentuate. All to make money presumably, since the budget cuts. So now we will not have art we will have consumption."
    }, {
      "Name": "Keith Levitt",
      "Channel": "News",
      "Email":"keith.l@news.com.au",
      "Like": 1,
      "Date": "February 22 at 5:24pm",
      "Message": "The reality is that we have more money going out than coming in, so sooner or later, money has to be pulled from somewhere.  Feel free to donate all your pay to these places - oh but you wont do that now will you"
    }, {
      "Name": "Terry Ryan",
      "Channel": "News",
      "Email":"terry.r@facebook.com",
      "Like": 1,
      "Date": "February 22 at 9:10pm",
      "Message": "Can you repeat the question...."
    }, {
      "Name": "Mark Joseph Williams",
      "Channel": "Guardian",
      "Email":"mark.w@guardian.com.au",
      "Like": 2,
      "Date": "February 22 at 6:05pm",
      "Message": "Why not put Dr Brendan Nelson in charge of everything (??) The numb  and apathetic reaction to  the Australia Day Lamb ad demonstrates to me that militarism is well and truly socialized."
    }, {
      "Name": "Ozixa Axizo",
      "Channel": "Guardian",
      "Email":"ozixa.a@guardian.com.au",
      "Like": 2,
      "Date": "February 22 at 10:19pm",
      "Message": "Militarisation of culture are happening in different scales too. Not impressed when at the citizenship cermony a navy band started playing music for audience. Expected a local band commneced the ceremony. Would be a nice venue to introduce local  culture, artists and talents to the new citizens."
    }, {
      "Name": "Matthew Doddrell",
      "Channel": "News",
      "Email":"matt.d@news.com.au",
      "Like": 3,
      "Date": "February 22 at 6:33pm",
      "Message": "As far as I can tell, all the Abbott/Turnbull govt wants to do, in the way of work, is administer the ADF."
    }, {
      "Name": "Dan Rossi",
      "Channel": "News",
      "Email":"dan.r@news.com.au",
      "Like": 4,
      "Date": "February 22 at 7:12pm",
      "Message": "They will soon start marking all their criminal donor developer ponzi scheme apartments as heritage listing while knocking down all heritage listed buildings and shipping off museums elsewhere to clear more land. Very vibrant I see. There will be nothing to do at all in the city like there isn't much already. No where to sit and eat, hardly any green spaces or trees."
    }, {
      "Name": "Linda Sutherland",
      "Channel": "News",
      "Email":"linda.s@guardian.com.au",
      "Like": 4,
      "Date": "February 22 at 6:50pm",
      "Message": "Been watching this creeping change for some time, and it's really alarming!"
    }, {
      "Name": "Beth Mansfield",
      "Channel": "Facebook",
      "Email":"beth.m@facebook.com",
      "Like": 5,
      "Date": "February 22 at 5:17pm",
      "Message": "Oh how I wish I could like this twice"
    }, {
      "Name": "Chris Adams",
      "Channel": "Guardian",
      "Email":"chris.a@guardian.com.au",
      "Like": 5,
      "Date": "February 22 at 8:49pm",
      "Message": "Reactionary still under Turnbull, the inappropriately and deceptively named Liberals continue to degrade Australia, seeking to make voters moredisengaged, ignorant and fearful."
    }, {
      "Name": "Peter Pearson",
      "Channel": "Facebook",
      "Email":"peter.p@facebook.com",
      "Like": 6,
      "Date": "February 22 at 5:35pm",
      "Message": "I have a great idea for an Efficiency Dividend. Halve all politicians salaries and scrub all their so-called 'entitlements'."
    }, {
      "Name": "David Matthews",
      "Channel": "Age",
      "Email":"david.m@theage.com.au",
      "Like": 7,
      "Date": "February 22 at 5:14pm",
      "Message": "Can't believe we are spending $100 million in France. For something most of us will never see."
    }, {
      "Name": "Jane Hallows",
      "Channel": "ABC",
      "Email":"jane.h@abc.net.au",
      "Like": 8,
      "Date": "February 22 at 5:54pm",
      "Message": "The irony is that the Australian arts and cultural sectors have repeatedly proved to be the highest % return on investment sector, as well as one the most efficient in terms of \"running on the smell of an oily rag\"."
    }, {
      "Name": "Robin Mavrick",
      "Channel": "Age",
      "Email":"robin.m@theage.com.au",
      "Like": 8,
      "Date": "February 22 at 5:20pm",
      "Message": "The Suvla Bay disaster was where the people of Australia found out that the federal government is an enemy of the people and do not have the national interests at heart. The federal government has never apologized to the families and loved ones of the fallen that were betrayed and threw their lives away for a war that had nothing to do with them."
    }, {
      "Name": "Geoff Emery",
      "Channel": "Age",
      "Email":"geoff.e@theage.com.au",
      "Like": 9,
      "Date": "February 22 at 5:15pm",
      "Message": "We have film and sound records deteriorating to obliteration because of these eternal funding cuts. Thankfully the ABC is also an archive but hey, it doesn't get a mention either. The barbarians are looting the citadel."
    }, {
      "Name": "Trevor Anderson",
      "Channel": "News",
      "Email":"Trevor.a@News.net.au",
      "Like": 17,
      "Date": "February 22 at 5:37pm",
      "Message": "During my time at the National Film and Sound Archive I took part in the heavy reduction of staff which was made necessary by previous \"efficiency dividends\". I was privileged to be there when a previous director shifted the focus of the archive slightly over to access and then was dismayed to see these earlier cuts force the NFSA to roll back those gains.With this latest round of cuts the core business of the archive will be under threat. Digitisation of the collection has rightly meant that the tape collection has been heavily prioritised due to its imminent deterioration. To operate successfully, NFSA requires investment in storage networks to accommodate the massive amount of data that this type of collection generates when digitised. They also need to find a way to get through the huge amount of tape, film, disc etc. that forms the 2 million odd items of analogue collection. Meanwhile contemporary \"born digital\" AV data needs to be collected and stored as well.Cuts at this point in the history of Australia's AV collection will inevitably mean that we will lose our ability to research and enjoy our AV past and at worst we may lose some of it altogether."
    }, {
      "Name": "Beth Mansfield",
      "Channel": "Guardian",
      "Email":"beth.m@guardian.com.au",
      "Like": 0,
      "Date": "February 22 at 5:24pm",
      "Message": "Please refer us to the refusal of any corproate sponsorship. Because from where I'm sitting, corproate sponsorship is pounced on with squeals of delight. Perhaps you haven't checked any of the donation boards in the front lobbey of each and every major and minor cultutral institution from here to the middle of nowhere."
    }, {
      "Name": "Bruce Shaw",
      "Channel": "Facebook",
      "Email":"bruce.s@facebook.com",
      "Like": 0,
      "Date": "February 22 at 5:24pm",
      "Message": "Connie, the LNP trolling Teletubby knitting fool who thinks art is Tony standing in front of ten flags."
    }, {
      "Name": "Connie Handbury",
      "Channel": "Guardian",
      "Email":"connie.h@guardian.com.au",
      "Like": 0,
      "Date": "February 22 at 5:24pm",
      "Message": "Sorry guys - I actually worked in the 'arts' raising funds (gratis) for longer that some of you have been alive, and I know exactly who funds who and unfortunately, for a great number of aspiring young artiste - )some of the most brilliant and creative souls in this generation) they were sacrificed for a greater er cough, cough, cause. Shame not all 'arts' board meetings take full minutes."
    }, {
      "Name": "Connie Handbury",
      "Channel": "Guardian",
      "Email":"connie.h@guardian.com.au",
      "Like": 0,
      "Date": "February 22 at 5:24pm",
      "Message": "Not so er strange Jane- it must feel good getting paid for something you love doing. Good for you."
    }, {
      "Name": "Connie Handbury",
      "Channel": "Guardian",
      "Email":"connie.h@guardian.com.au",
      "Like": 0,
      "Date": "February 22 at 5:24pm",
      "Message": "Your absolute right to do so. Mine right also to feel let down by this 'sweeping' self serving article. The 'community' like all such incestuous entities has grown beyond its original passionate charter- ergo the state it's in now. Back to basics would be the go."
    }, {
      "Name": "David Matthews",
      "Channel": "News",
      "Email":"david.m@news.com.au",
      "Like": 0,
      "Date": "February 22 at 5:14pm",
      "Message": "I'm sure there are many monuments to the fallen already."
    }, {
      "Name": "Emma Davis",
      "Channel": "Facebook",
      "Email":"emma.d@facebook.com",
      "Like": 0,
      "Date": "February 22 at 8:49pm",
      "Message": "Well said Trevor. More cuts to come, with no fat left to trim frown emoticon"
    }, {
      "Name": "Emma Davis",
      "Channel": "Facebook",
      "Email":"emma.d@facebook.com",
      "Like": 0,
      "Date": "February 22 at 5:24pm",
      "Message": "That $100m is enough to keep the NFSA running for almost 4 years... The cultural collecting agencies are hugely important - repositories of all that is good and bad in our society. Many argue that with the internet, dedicated digitisation programs are unnecessary. However, I would urge you to do some research into the stability of digital media. Most of what we watch today will be unreadable within 10 years, unless there are dedicated people ensuring that they transition to the new technologies."
    }, {
      "Name": "Gerry Satrapa",
      "Channel": "Facebook",
      "Email":"gerry.s@facebook.com",
      "Like": 0,
      "Date": "February 22 at 5:24pm",
      "Message": "Perhaps if the rich and big business contributed their fair share, rather than minimising and avoiding tax..."
    }, {
      "Name": "Gerumpy Auldmann",
      "Channel": "Facebook",
      "Email":"gerumpy.a@facebook.com",
      "Like": 0,
      "Date": "February 22 at 5:14pm",
      "Message": "France, like Gallipoli has many Australians resting their after the Great War. I'm not sure that $100million is appropriate, but it is a significant site of our nations history. In fact my sister had just been there specifically for historical interest."
    }, {
      "Name": "James Brown",
      "Channel": "ABC",
      "Email":"james.b@abc.net.au",
      "Like": 0,
      "Date": "February 22 at 10:19pm",
      "Message": "really this is all a legacy or our worst ever PM Rudd this and cuts to the CSIRO are all down to the mess they left the country in"
    }, {
      "Name": "Jane Hallows",
      "Channel": "SMH",
      "Email":"jane.h@smh.com.au",
      "Like": 0,
      "Date": "February 22 at 5:24pm",
      "Message": "The boycott of the Sydney Biennale by a large number of independent artists in 2014 was in protest against the receipt of funding for the Biennale from Transfield (one of the corporations responsible for running Australian detention centres).It was an independent decision on the part of this collective of contemporary visual artists, not a decision by the biennale.Other knock-backs of corporate funding and private sponsorship are virtually unheard of.None of the major cultural institutions listed in this article have ever declined corporate or private sponsorship, although the money received from those sources is relatively miniscule, and is very rarely available."
    }, {
      "Name": "Jane Hallows",
      "Channel": "SMH",
      "Email":"jane.h@smh.com.au",
      "Like": 0,
      "Date": "February 22 at 5:24pm",
      "Message": "Strange.I currently work in the Arts and Cultural sector, and have done so for over 35 years.I have been involved with numerous companies, institutions, individuals and organisations, including Arts funding bodies at national, state and local levels.I've also been involved with a variety of philanthropic trusts and private sponsorship bodies.I know much more than you think, Connie."
    }, {
      "Name": "Jane Hallows",
      "Channel": "SMH",
      "Email":"jane.h@smh.com.au",
      "Like": 0,
      "Date": "February 22 at 5:24pm",
      "Message": "The point is that I know enough to challenge your sweepingly false assertion."
    }, {
      "Name": "Jill Kawalilak",
      "Channel": "ABC",
      "Email":"jill.k@abc.net.au",
      "Like": 0,
      "Date": "February 22 at 10:45pm",
      "Message": "Tony still pulls the strings. Think long and hard at the next election. I think most of us agree, hard right ideology is not where we want to go; witness Abbots poles."
    }, {
      "Name": "Keith Levitt",
      "Channel": "SMH",
      "Email":"keith.levitt@smh.com.au",
      "Like": 0,
      "Date": "February 22 at 5:24pm",
      "Message": "Robin Mavrick What proof do you have to show those laws dont work"
    }, {
      "Name": "Keith Levitt",
      "Channel": "SMH",
      "Email":"keith.levitt@smh.com.au",
      "Like": 0,
      "Date": "February 22 at 5:24pm",
      "Message": "Rolf Schmidt That 100 million comes out of other areas.  Its not magically taken out of a bank we have, and that money normally comes out of the defence budget to pay for it"
    }, {
      "Name": "Keith Levitt",
      "Channel": "SMH",
      "Email":"keith.levitt@smh.com.au",
      "Like": 0,
      "Date": "February 22 at 5:24pm",
      "Message": "Gerry Satrapa That will replace some billions but not as much as people think.  Thats not the holy grail"
    }, {
      "Name": "Keith Levitt",
      "Channel": "SMH",
      "Email":"keith.levitt@smh.com.au",
      "Like": 0,
      "Date": "February 22 at 5:24pm",
      "Message": "Mark Calderwood Shows how you are nothing but a silly monkey to think that will just solve everything when it wont.  You have no ideas other than what you read in comments on fb Mark"
    }, {
      "Name": "Leena van Deventer",
      "Channel": "News",
      "Email":"leena.d@news.com.au",
      "Like": 0,
      "Date": "February 24 at 7:33am",
      "Message": "Weird how the \"get over it, it's past violence, we had nothing to do with it\" narrative so often heard by defensive types on Invasion Day is completely ignored when pissing away a hundred million on a war memorial."
    }, {
      "Name": "Mark Calderwood",
      "Channel": "News",
      "Email":"mark.c@news.com.au",
      "Like": 0,
      "Date": "February 22 at 5:24pm",
      "Message": "More idiotnomics from the LNP troll."
    }, {
      "Name": "Michael Duke",
      "Channel": "News",
      "Email":"michael.d@news.com.au",
      "Like": 0,
      "Date": "February 24 at 8:58am",
      "Message": "Stereotyping is much easier on the mind"
    }, {
      "Name": "Reg Fardell",
      "Channel": "Facebook",
      "Email":"Reg.f@nfacebook.com",
      "Like": 0,
      "Date": "February 22 at 10:19pm",
      "Message": "Still living in the past James. Catch up with what had been happenkng since Rudd will you please? And btw without Rudd you know Australia would not have got through the GFC."
    }, {
      "Name": "Richard Slade",
      "Channel": "Facebook",
      "Email":"Reg.f@facebook.com",
      "Like": 0,
      "Date": "February 23 at 2:25pm",
      "Message": "Conservatives like to rewrite history so as to make a narrative that concurs with their vision of \"world as it should be - the first step in the rewriting process is the erasure of inconvenient history"
    }, {
      "Name": "Robin Mavrick",
      "Channel": "News",
      "Email":"robin.m@news.com.au",
      "Like": 0,
      "Date": "February 22 at 5:24pm",
      "Message": "Don't apologise for what you want Connie, the reduction of Australian cultural awareness."
    }, {
      "Name": "Robin Mavrick",
      "Channel": "News",
      "Email":"robin.m@news.com.au",
      "Like": 0,
      "Date": "February 22 at 5:24pm",
      "Message": "Why spend $700 million on metadata laws when it is proved that is of no use in fighting terrorism? This government have doubled the debt remember trying to increase the military budget from 1.5% to 2% of GDP with no cost/benefit analysis."
    }, {
      "Name": "Rolf Schmidt",
      "Channel": "News",
      "Email":"rolf.s@news.com.au",
      "Like": 0,
      "Date": "February 22 at 5:24pm",
      "Message": "Did you read the article? The part that reminds us that money to the tune of $100 million can suddenly be found for a totally redundant new overseas World War memorial? But not a tenth of that to simply maintain what preserves our history right here?"
    }, {
      "Name": "Trevor Anderson",
      "Channel": "SBS",
      "Email":"trevot.a@sbs.com.au",
      "Like": 0,
      "Date": "February 22 at 10:19pm",
      "Message": "Geoff Emery, part of the 2%? Are you?No, well this government is not governing in your interest.Give me union influence if it means that health, education and welfare for the 60% gets funded. Because you know what. If you want to be safe on the streets and in bed, funding more cops will do nothing. What works is giving people the dignity of an income either through work or support when it is needed."
    }];
  });
