//Menu
for(let i = 0; i <= document.querySelectorAll("h2.option").length - 1; i++) {
    document.querySelectorAll("h2.option")[i].addEventListener("click", function() {
        let audio = new Audio("https://vgmsite.com/soundtracks/pokemon-gameboy-sound-collection/znqhqixi/111-pokemon%20recovery.mp3");
        audio.play();
        
        switch (this.innerHTML) {
            case "Controls":
                document.querySelector(".controlLobby").style.display="block";
                document.querySelector(".menu").style.display="none";
                break;

            case "Play":
                document.querySelector(".menu").style.display="none";
                document.querySelector(".choosePlayer").style.display="block";

                for(let z = 0; z <= document.querySelectorAll(".choosePlayer h4").length - 1; z++) {
                    document.querySelectorAll(".choosePlayer h4")[z].addEventListener("click", function() {
                        switch (this.innerHTML) {
                            //Red
                            case "Red":
                                document.querySelector(".choosePlayer").style.display="none"; 
                                document.querySelector(".fight img.red").style.display="block";
                                document.querySelector(".choosePlayer2").style.display="block";

                                for(let zz = 0; zz <= document.querySelectorAll(".choosePlayer2 h4").length - 1; zz++) {
                                    document.querySelectorAll(".choosePlayer2 h4")[zz].addEventListener("click", function() {
                                        switch (this.innerHTML) {
                                            case "Misty":
                                                document.querySelector(".fight img.misty").style.display="block";
                                                document.querySelector(".choosePlayer2").style.display="none";
                                                document.querySelector(".game").style.display="block";
                                                break;
                                        }
                                    });
                                }
                                for(let yy = 0; yy <= document.querySelectorAll(".choosePlayer2 h4").length - 1; yy++) {
                                    document.querySelectorAll(".choosePlayer2 h4")[yy].addEventListener("click", function() {
                                        switch (this.innerHTML) {
                                            case "Marlon":
                                                document.querySelector(".fight img.marlon").style.display="block";
                                                document.querySelector(".choosePlayer2").style.display="none";
                                                document.querySelector(".game").style.display="block";
                                                break;
                                        
                                            default:
                                                break;
                                        }
                                    });
                                }
                                for(let xx = 0; xx <= document.querySelectorAll(".choosePlayer2 h4").length - 1; xx++) {
                                    document.querySelectorAll(".choosePlayer2 h4")[xx].addEventListener("click", function() {
                                        switch (this.innerHTML) {
                                            case "Juan":
                                                document.querySelector(".fight img.juan").style.display="block";
                                                document.querySelector(".choosePlayer2").style.display="none";
                                                document.querySelector(".game").style.display="block";
                                                
                                                break;
                                        }
                                    });
                                }
                                break;
                             
                            //Gold
                            case "Gold":
                                document.querySelector(".choosePlayer").style.display="none"; 
                                document.querySelector(".fight img.gold").style.display="block";
                                document.querySelector(".choosePlayer2").style.display="block";

                                for(let zzzz = 0; zzzz <= document.querySelectorAll(".choosePlayer2 h4").length - 1; zzzz++) {
                                    document.querySelectorAll(".choosePlayer2 h4")[zzzz].addEventListener("click", function() {
                                        switch (this.innerHTML) {
                                            case "Misty":
                                                document.querySelector(".fight img.misty").style.display="block";
                                                document.querySelector(".choosePlayer2").style.display="none";
                                                document.querySelector(".game").style.display="block";
                                                
                                                break;
                                        
                                            default:
                                                break;
                                        }
                                    });
                                }
                                for(let yyyy = 0; yyyy <= document.querySelectorAll(".choosePlayer2 h4").length - 1; yyyy++) {
                                    document.querySelectorAll(".choosePlayer2 h4")[yyyy].addEventListener("click", function() {
                                        switch (this.innerHTML) {
                                            case "Marlon":
                                                document.querySelector(".fight img.marlon").style.display="block";
                                                document.querySelector(".choosePlayer2").style.display="none";
                                                document.querySelector(".game").style.display="block";
                                                
                                                break;
                                        
                                            default:
                                                break;
                                        }
                                    });
                                }
                                for(let xxxx = 0; xxxx <= document.querySelectorAll(".choosePlayer2 h4").length - 1; xxxx++) {
                                    document.querySelectorAll(".choosePlayer2 h4")[xxxx].addEventListener("click", function() {
                                        switch (this.innerHTML) {
                                            case "Juan":
                                                document.querySelector(".fight img.juan").style.display="block";
                                                document.querySelector(".choosePlayer2").style.display="none";
                                                document.querySelector(".game").style.display="block";
                                                
                                                break;
                                        }
                                    });
                                }
                                break;

                                //May
                                case "May":
                                document.querySelector(".choosePlayer").style.display="none"; 
                                document.querySelector(".fight img.may").style.display="block";
                                document.querySelector(".choosePlayer2").style.display="block";

                                for(let zzz = 0; zzz <= document.querySelectorAll(".choosePlayer2 h4").length - 1; zzz++) {
                                    document.querySelectorAll(".choosePlayer2 h4")[zzz].addEventListener("click", function() {
                                        switch (this.innerHTML) {
                                            case "Misty":
                                                document.querySelector(".fight img.misty").style.display="block";
                                                document.querySelector(".choosePlayer2").style.display="none";
                                                document.querySelector(".game").style.display="block";
                                                
                                                break;
                                        
                                            default:
                                                break;
                                        }
                                    });
                                }
                                for(let yyy = 0; yyy <= document.querySelectorAll(".choosePlayer2 h4").length - 1; yyy++) {
                                    document.querySelectorAll(".choosePlayer2 h4")[yyy].addEventListener("click", function() {
                                        switch (this.innerHTML) {
                                            case "Marlon":
                                                document.querySelector(".fight img.marlon").style.display="block";
                                                document.querySelector(".choosePlayer2").style.display="none";
                                                document.querySelector(".game").style.display="block";
                                                
                                                break;
                                        
                                            default:
                                                break;
                                        }
                                    });
                                }
                                for(let xxx = 0; xxx <= document.querySelectorAll(".choosePlayer2 h4").length - 1; xxx++) {
                                    document.querySelectorAll(".choosePlayer2 h4")[xxx].addEventListener("click", function() {
                                        switch (this.innerHTML) {
                                            case "Juan":
                                                document.querySelector(".fight img.juan").style.display="block";
                                                document.querySelector(".choosePlayer2").style.display="none";
                                                document.querySelector(".game").style.display="block";
                                                
                                                break;
                                        }
                                    });
                                }
                                break;

                                default:
                                    break;
                        }
                    });
                }
                switch (this.innerHTML) {
                    case "Red":
                        alert("hi");
                        break;
                
                    default:
                        break;
                }
            }
    });
}


function playGame() {
    let hp1 = 100;
    let hp2 = 100;

    // Attack
    for(let a = 0; a <= document.querySelectorAll(".message button").length - 1; a++) {
        document.querySelectorAll(".message button")[a].addEventListener("click", function() {
            switch (this.innerHTML) {
                case "Attack":
                    //Random Numbers which will reduce the the lives
                    let randomOpp = Math.floor(Math.random() * 4);
                    let ran1 = Math.floor(Math.random() * 4);
                    hp1 = hp1 - ran1;
                    //This will tell what move opponent pokemon did and will show the damage
                    setTimeout(function() {
                        hp2 = hp2 - randomOpp;
                        document.querySelector(".hP1").innerHTML = "HP:- <br><span>" + hp2 + "</span>";
                        if(randomOpp <= 1) {
                            document.querySelector("h1.mess").innerHTML="Opponent Pokemon used Tackle";
                            document.querySelector("h1.mess").innerHTML="Opponent Pokemon used Tackle";
                        
                        document.querySelector(".pokemon1").style.visibility="visible";
                        setTimeout(function() {
                            document.querySelector(".pokemon1").style.visibility="hidden";
                            setTimeout(function() {
                                document.querySelector(".pokemon1").style.visibility="visible";
                                setTimeout(function() {
                                    document.querySelector(".pokemon1").style.visibility="hidden";
                                    setTimeout(function() {
                                        document.querySelector(".pokemon1").style.visibility="visible";
                                        setTimeout(function() {
                                            document.querySelector(".pokemon1").style.visibility="hidden";
                                        }, 300);
                                        setTimeout(function() {
                                            document.querySelector(".pokemon1").style.visibility="visible";
                                        }, 300);
                                    }, 300);
                                }, 300);
                            }, 300);
                        }, 300);
                        let tackle1 = new Audio("https://vgmsite.com/soundtracks/pokemon-sfx-gen-3-attack-moves-rse-fr-lg/izqqhmeayp/Tackle.mp3");
                        tackle1.play();
                        } else if(randomOpp >= 2) {
                            document.querySelector("h1.mess").innerHTML="Opponent Pokemon used Water Gun";
                            let fireDisplay1 = document.querySelector("img.fire-effect1");
                            fireDisplay1.style.display="block";
                            setTimeout(function() {
                                fireDisplay1.style.display="none";
                            }, 2500);
                            let flame1 = new Audio("https://vgmsite.com/soundtracks/pokemon-sfx-gen-3-attack-moves-rse-fr-lg/yztrjeemjs/Flame%20Wheel%20part%202.mp3");
                            flame1.play();
                        } 
                    }, 3000);

                    document.querySelector("button.attack").style.display="none";
                    document.querySelector("button.spAtt").style.display="none";

                    setTimeout(function() {
                        document.querySelector("button.attack").style.display="block";
                    }, 5500);
                    setTimeout(function() {
                        document.querySelector("button.spAtt").style.display="block";
                    }, 20000);

                    document.querySelector(".hP2").innerHTML = "HP:- <br><span>" + hp1 + "</span>";
                    //This will show what my pokemon performed and show the damage it gave
                    if(ran1 <= 1) {
                        document.querySelector("h1.mess").innerHTML="Your Pokemon used Tackle <br>";
                        
                        document.querySelector(".pokemon2").style.visibility="visible";
                        setTimeout(function() {
                            document.querySelector(".pokemon2").style.visibility="hidden";
                            setTimeout(function() {
                                document.querySelector(".pokemon2").style.visibility="visible";
                                setTimeout(function() {
                                    document.querySelector(".pokemon2").style.visibility="hidden";
                                    setTimeout(function() {
                                        document.querySelector(".pokemon2").style.visibility="visible";
                                        setTimeout(function() {
                                            document.querySelector(".pokemon2").style.visibility="hidden";
                                        }, 300);
                                        setTimeout(function() {
                                            document.querySelector(".pokemon2").style.visibility="visible";
                                        }, 300);
                                    }, 300);
                                }, 300);
                            }, 300);
                        }, 300);
                        let tackle2 = new Audio("https://vgmsite.com/soundtracks/pokemon-sfx-gen-3-attack-moves-rse-fr-lg/izqqhmeayp/Tackle.mp3");
                        tackle2.play();
                        
                    } else if(ran1 >= 2) {
                        document.querySelector("h1.mess").innerHTML="Charizard used Flame Thrower";
                        //This will add fire to the opponent the moment
                        let fireDisplay = document.querySelector("img.fire-effect");
                        fireDisplay.style.display="block";
                        setTimeout(function() {
                            fireDisplay.style.display="none";
                        }, 3000);
                        let flame2 = new Audio("https://vgmsite.com/soundtracks/pokemon-sfx-gen-3-attack-moves-rse-fr-lg/yztrjeemjs/Flame%20Wheel%20part%202.mp3");
                        flame2.play();
                    } 

                    //This will show who won and who lost
                    setTimeout(function() {
                        if(hp2 <= 0) {
                            document.querySelector(".hP1").innerHTML = "Charizard HP:- <br> 0 And you lose";
                            document.querySelector("h1.mess").innerHTML = "You:- That was a good match! I will train more and defeat you next time";
                            document.querySelector(".lost").style.display="none";
                            
                            setTimeout(function() {
                                document.querySelector(".game").style.display="none";
                                document.querySelector(".lost").style.display="block";   
                            });
                            
                        } else if(hp1 <= 0) {
                            document.querySelector(".hP2").innerHTML = "Blaziken HP:- <br> 0 And you win";
                            document.querySelector("h1.mess").innerHTML = "Opponent:- That was a good match! I will train more and defeat you next time";
                            document.querySelector(".won").style.display="none";
                            
                            setTimeout(function() {
                                document.querySelector(".game").style.display="none";
                                document.querySelector(".won").style.display="block";
                            });
                        }
                    }, 5000);
                    break;

                    //Special Attack
                    case "Special Attack":
                        let ran2 = Math.floor(Math.random() * 8);
                        let randomOpp2 = Math.floor(Math.random() * 8);

                        hp1 = hp1 - ran2;
                        //This will tell what move opponent pokemon did and will show the damage
                        setTimeout(function() {
                            hp2 = hp2 - randomOpp2;
                            document.querySelector(".hP1").innerHTML = "HP:- <br><span>" + hp2 + "</span>";

                            if(randomOpp2 <= 4) {
                                document.querySelector("h1.mess").innerHTML="Opponent Pokemon used Special Attack";
                                let slam3 = new Audio("https://vgmsite.com/soundtracks/pokemon-sfx-gen-1-attack-moves-rby/wxhwsygnxt/RockThrow.mp3");
                                slam3.play();

                                document.querySelector(".pokemon1").style.visibility="visible";
                                
                                setTimeout(function() {
                                    document.querySelector(".pokemon1").style.visibility="hidden";
                                    setTimeout(function() {
                                        document.querySelector(".pokemon1").style.visibility="visible";
                                        setTimeout(function() {
                                            document.querySelector(".pokemon1").style.visibility="hidden";
                                            setTimeout(function() {
                                                document.querySelector(".pokemon1").style.visibility="visible";
                                                setTimeout(function() {
                                                    document.querySelector(".pokemon1").style.visibility="hidden";
                                                }, 300);
                                                setTimeout(function() {
                                                    document.querySelector(".pokemon1").style.visibility="visible";
                                                }, 300);
                                            }, 300);
                                        }, 300);
                                    }, 300);
                                }, 300);
                                
                                //This will print Opponent's attack was not effective after 1.5 seconds
                                setTimeout(function() {
                                    document.querySelector("h1.mess").innerHTML="Opponent's attack was not that effective";
                                }, 1500);
                            } else if(randomOpp2 >= 5) {
                                document.querySelector("h1.mess").innerHTML="Opponent Pokemon used Special Attack";
                                let slam4 = new Audio("https://vgmsite.com/soundtracks/pokemon-sfx-gen-1-attack-moves-rby/wxhwsygnxt/RockThrow.mp3");
                                slam4.play();  

                                document.querySelector(".pokemon2").style.visibility="visible";
                                
                                setTimeout(function() {
                                    document.querySelector(".pokemon1").style.visibility="hidden";
                                    setTimeout(function() {
                                        document.querySelector(".pokemon1").style.visibility="visible";
                                        setTimeout(function() {
                                            document.querySelector(".pokemon1").style.visibility="hidden";
                                            setTimeout(function() {
                                                document.querySelector(".pokemon1").style.visibility="visible";
                                                setTimeout(function() {
                                                    document.querySelector(".pokemon1").style.visibility="hidden";
                                                }, 300);
                                                setTimeout(function() {
                                                    document.querySelector(".pokemon1").style.visibility="visible";
                                                }, 300);
                                            }, 300);
                                        }, 300);
                                    }, 300);
                                }, 300);

                                //This will print Opponent's attack was too effective after 1.5 seconds
                                setTimeout(function() {
                                    document.querySelector("h1.mess").innerHTML="Opponent's attack was too effective";
                                }, 1500);
                            } 
                        }, 3000);

                        //This will remove the buttons
                        document.querySelector("button.attack").style.display="none";
                        document.querySelector("button.spAtt").style.display="none";

                        setTimeout(function() {
                            document.querySelector("button.attack").style.display="block";
                        }, 5500);
                        setTimeout(function() {
                            document.querySelector("button.spAtt").style.display="block";
                        }, 20000);

                        document.querySelector(".hP2").innerHTML = "HP:- <br><span>" + hp1 + "</span>";
                        //This will show what my pokemon performed and show the damage it gave
                        if(ran2 <= 4) {
                            document.querySelector("h1.mess").innerHTML="Your Pokemon used Special Attack";
                            let slam1 = new Audio("https://vgmsite.com/soundtracks/pokemon-sfx-gen-1-attack-moves-rby/wxhwsygnxt/RockThrow.mp3");
                            slam1.play();

                            document.querySelector(".pokemon2").style.visibility="visible";

                            setTimeout(function() {
                                document.querySelector(".pokemon2").style.visibility="hidden";
                                setTimeout(function() {
                                    document.querySelector(".pokemon2").style.visibility="visible";
                                    setTimeout(function() {
                                        document.querySelector(".pokemon2").style.visibility="hidden";
                                        setTimeout(function() {
                                            document.querySelector(".pokemon2").style.visibility="visible";
                                            setTimeout(function() {
                                                document.querySelector(".pokemon2").style.visibility="hidden";
                                            }, 300);
                                            setTimeout(function() {
                                                document.querySelector(".pokemon2").style.visibility="visible";
                                            }, 300);
                                        }, 300);
                                    }, 300);
                                }, 300);
                            }, 300);
                            
                            //This will print that my pokemon's attack was not that effective
                            setTimeout(function() {
                                document.querySelector("h1.mess").innerHTML="Your Pokemon's attack was not that effective";
                            }, 1500);
                        } else if(ran2 >= 5) {
                            document.querySelector("h1.mess").innerHTML="Your Pokemon used Special Attack";
                            let slam2 = new Audio("https://vgmsite.com/soundtracks/pokemon-sfx-gen-1-attack-moves-rby/wxhwsygnxt/RockThrow.mp3");
                            slam2.play();

                            document.querySelector(".pokemon2").style.visibility="visible";
                            
                            setTimeout(function() {
                                document.querySelector(".pokemon2").style.visibility="hidden";
                                setTimeout(function() {
                                    document.querySelector(".pokemon2").style.visibility="visible";
                                    setTimeout(function() {
                                        document.querySelector(".pokemon2").style.visibility="hidden";
                                        setTimeout(function() {
                                            document.querySelector(".pokemon2").style.visibility="visible";
                                            setTimeout(function() {
                                                document.querySelector(".pokemon2").style.visibility="hidden";
                                            }, 300);
                                            setTimeout(function() {
                                                document.querySelector(".pokemon2").style.visibility="visible";
                                            }, 300);
                                        }, 300);
                                    }, 300);
                                }, 300);
                            }, 300);

                            //This will print that my pokemon's attack was too effective
                            setTimeout(function() {
                                document.querySelector("h1.mess").innerHTML="Your Pokemon's attack was too effective";
                            }, 1500);
                        } 

                        //This will show who won and who lost
                        setTimeout(function() {
                            if(hp2 <= 0) {
                                document.querySelector(".hP1").innerHTML = "HP:- <br> <span>0</span>";
                                document.querySelector("h1.mess").innerHTML = "Me:- That was a good match! I will train more and defeat you next time";
                                document.querySelector("img.charizard").style.display="none";

                                document.querySelector(".lost").style.display="none";
                                setTimeout(function() {
                                    document.querySelector(".game").style.display="none";
                                    document.querySelector(".lost").style.display="block";
                                });
                                
                            } else if(hp1 <= 0) {
                                document.querySelector(".hP2").innerHTML = "HP:- <br> <span>0</span> And you win";
                                document.querySelector("h1.mess").innerHTML = "Opponent:- That was a good match! I will train more and defeat you next time";
                                document.querySelector("img.greninja").style.visibility = "hidden";
                                document.querySelector(".won").style.display="none";
                                setTimeout(function() {
                                    document.querySelector(".game").style.display="none";
                                    document.querySelector(".won").style.display="block";
                                });
                            }
                        }, 5000);
                        break;
                    default:
                        break;
                }   
        });
    }
} 
playGame();