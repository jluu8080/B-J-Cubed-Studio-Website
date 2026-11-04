/*
    <--
    <img src="images/studioLogo_Transparent_White.webp" class="gameStudioLogo">
    !-->

    Logo Container Code
*/


export default 
`
<section class="index_heroSection">
    <div class="logoContainer">
        <p id="logoHeader">⎯ BOARD GAME STUDIO ⎯</p>

        <div class="gameStudioLogo"></div>
    </div>

    <p class="heroContent">B&J³ Games is a small, independent board game studio made up of four creators: Ben Fox, Jacob Fox, Julian Banks, and Jason Luu. The studio brings together game design, writing, art, and programming to create tabletop experiences.</p>

    
</section>


<section class="index_teamSection">
    <div class="header">
        <p>Meet The Team</p>
        <a href="#team">Learn More →</a>
    </div>


    <div class="middleDiv">
        <div class="line"></div>
        
        <div class="circleList">
            <div class="circle ben_bColor"></div>
            <div class="circle jacob_bColor"></div>
            <div class="circle julian_bColor"></div>
            <div class="circle jason_bColor"></div>
        </div>
    </div>

    <div class="teamCardsDiv">
        <div class="teamCard">
            <div class="teamImg ben_bColor">Photo Coming Soon</div>

            <div class="teamContent">
                <h2>Ben Fox</h2>

                <div class="rolesContainer">
                    <p class="mainRole ben_textColor">PRESIDENT</p>

                    <p class="subRoles">Game Designer • Game Writer • Play Tester</p>
                </div>
                
                <p>Coming Soon...</p>
            </div>
        </div>

        <div class="teamCard">
            <div class="teamImg jacob_bColor">Photo Coming Soon</div>

            <div class="teamContent">
                <h2>Jacob Fox</h2>

                <div class="rolesContainer">
                    <p class="mainRole jacob_textColor">GAME DESIGNER</p>

                    <p class="subRoles">Game Writer • Play Tester</p>
                </div>


                <p>Coming Soon...</p>
            </div>
        </div>

        <div class="teamCard">
            <div class="teamImg julian_bColor">Photo Coming Soon</div>

            <div class="teamContent">
                <h2>Julian Banks</h2>

                <div class="rolesContainer">
                    <p class="mainRole julian_textColor">GAME DESIGNER</p>

                    <p class="subRoles">Game Writer • Play Tester • Marketer</p>
                </div>
                
                <p>Coming Soon...</p>
            </div>
        </div>

        <div class="teamCard">
            <div class="teamImg">Photo Coming Soon</div>

            <div class="teamContent">
                <h2>Jason Luu</h2>

                <div class="rolesContainer">
                    <p class="mainRole jason_textColor">PROGRAMMER</p>

                    <p class="subRoles">UI/UX Designer • Game Designer • <br>Play Tester • Marketer</p>
                </div>

                
                <p>Coming Soon...</p>
            </div>
        </div>
    </div>
</section>

<section class="index_progressSection">
    <div class="header">
        
        <div class="progressSectionHeader">
            <p>Current Project:</p>
            
            <img src="images/WayfarerStainedLogosvg.svg" class="wayfarerGameLogo">
        </div>
        
        
        <a href="#projects">Learn More →</a>
    </div>

    <div class="phasesDiv">
        <p class="phasesDivHeader">Phases</p>
        <p>Every game starts as an idea, but turning it into something people can sit down and play takes time, testing, and a lot of revisions. At B&J³ Games, we build Wayfarer in phases, so each step gives us a solid foundation for the next. Here's where we've been and where we're headed.</p>
    </div>

    <h1>Our Progress:</h1>

    <div class="progress_BarCardsContainer">

        <div class="progress_barCard">

            <div class="progressTrack isActive">
                <div class="progressFill isCompleted"></div>
            </div>

            <div class="progress_barCard_Header">
                <p class="header">Alpha Build</p>

                <div class="state finished">
                    <p>FINISHED</p>
                </div>
            </div>

            <p class="progress_desc">We defined Wayfarer's core idea, finalized its name, and assigned roles across the team.</p>
        </div>

        <div class="progress_barCard">

            <div class="progressTrack isActive">
                <div class="progressFill isCompleted"></div>
            </div>

            <div class="progress_barCard_Header">
                <p class="header">Beta Build</p>

                <div class="state finished">
                    <p>FINISHED</p>
                </div>
            </div>

            <p class="progress_desc">We built the first gameplay loop and character sheet, then put core mechanics like time, movement, exhaustion, inventory, and food and water to the test.</p>
        </div>

        <div class="progress_barCard">

            <div class="progressTrack isActive">
                <div class="progressFill"></div>
            </div>

            <div class="progress_barCard_Header">
                <p class="header">Prime</p>

                <div class="state current">
                    <p>CURRENT</p>
                </div>
            </div>

            <p class="progress_desc">With a playable beta build in hand, we're refining balance, polishing the rules, and building out the companion app and website</p>
        </div>

        <div class="progress_barCard">

            <div class="progressTrack">
                <div class="progressFill"></div>
            </div>

            <div class="progress_barCard_Header">
                <p class="header">Redeacted</p>

                <div class="state">
                    <p></p>
                </div>
            </div>

            <p class="progress_desc">Redacted</p>
        </div>

    </div>
</section>
`;