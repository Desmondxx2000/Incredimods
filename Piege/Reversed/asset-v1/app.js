/* 1.1.5 2020-11-19 18:12:34 */
var app=new function(){this.name="Piege",this.version="1",this.date="2023",this.folder="asset-v1/",this.looptime=7105,this.bpm=135,this.totalframe=340,this.nbpolo=7,this.nbloopbonus=4,this.bonusloopA=!0,this.bonusendloopA=!0,this.recmaxloop=68,this.recminloop=4,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepicto="game-picto.png",this.colBck="#001e1e",this.col0="#00ffff",this.col1="#00bcbc",this.col2="#008a8a",this.col3="#005555",this.col4="#005555",this.animearray=[{name:"1_klare",color:"328050",uniqsnd:!0},{name:"2_snare",color:"328050",uniqsnd:!0},{name:"3_clock",color:"328050",uniqsnd:!1},{name:"4_bbox",color:"328050",uniqsnd:!0},{name:"5_barru",color:"328050",uniqsnd:!1},{name:"6_bass",color:"58B69B",uniqsnd:!1},{name:"7_arpxeno",color:"58B69B",uniqsnd:!0},{name:"8_hey",color:"58B69B",uniqsnd:!1},{name:"9_annihilate",color:"58B69B",uniqsnd:!1},{name:"10_aracnid",color:"58B69B",uniqsnd:!0},{name:"11_lucas",color:"556CC9",uniqsnd:!1},{name:"12_woah",color:"556CC9",uniqsnd:!1},{name:"13_stand",color:"556CC9",uniqsnd:!1},{name:"14_destroy",color:"556CC9",uniqsnd:!0},{name:"15_pixel",color:"556CC9",uniqsnd:!1},{name:"16_sammy",color:"01A2C5",uniqsnd:!1},{name:"17_metaphor",color:"01A2C5",uniqsnd:!0},{name:"18_tom",color:"01A2C5",uniqsnd:!1},{name:"19_sunny",color:"01A2C5",uniqsnd:!1},{name:"20_beware",color:"01A2C5",uniqsnd:!1}],this.bonusarray=[];for(var n=0,o=this.animearray.length;n<o;n++){var a=this.animearray[n].name;this.animearray[n].soundA=a+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?a+"_a":a+"_b",this.animearray[n].anime=a+"-sprite.png",this.animearray[n].animeData=a+".json"}};