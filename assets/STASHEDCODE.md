# Teams
## HTML
<!-- Teams -->
    <section class="teams" id="teams">
        <div class="max-width">
            <h2 class="title">Team</h2>
            <div class="carousel owl-carousel">
                <div class="card">
                    <div class="box">
                        <img src="">
                        <p></p>
                </div>
            </div>
        </div>
    </section>
# Skills
## HTML
<!-- Skills -->
    <section class="skills" id="skills">
        <div class="max-width">
            <h2 class="title">My skills</h2>
            <div class="skills-content">
                <div class="column left">
                    <div class="text">My creative skills & experiences.</div>
                    <p>These are some furthur than above</p>
                    <a href="#teams">My Team</a>
                </div>
                <div class="column right">
                    <div class="bars">
                        <div class="info">
                            <span>HTML</span>
                            <span>90%</span>
                        </div>
                        <div class="line html"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>CSS</span>
                            <span>60%</span>
                        </div>
                        <div class="line css"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>JavaScript</span>
                            <span>50%</span>
                        </div>
                        <div class="line js"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>React</span>
                            <span>70%</span>
                        </div>
                        <div class="line php"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>Python</span>
                            <span>80%</span>
                        </div>
                        <div class="line mysql"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
# Contact
## HTML
<!-- Contact -->
    <section class="contact" id="contact">
        <div class="max-width">
            <h2 class="title">Contact me</h2>
            <div class="contact-content">
                <div class="column left">
                    <div class="text">Get in Touch</div>
                    <p>If you want an advice, Contact me</p>
                    <div class="icons">
                        <div class="row">
                            <i class="fas fa-user"></i>
                            <div class="info">
                                <div class="head">Name</div>
                                <div class="sub-title">Tadeesha Nithesh</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="info">
                                <div class="head">Address</div>
                                <div class="sub-title">No 08, Poregedara, Padukka, Sri Lanka</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-envelope"></i>
                            <div class="info">
                                <div class="head">Email</div>
                                <div class="sub-title">avtnbinuditha@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column right">
                    <div class="text">Message me</div>
                    <form action="#">
                        <div class="button-area">
                            <a href="https://forms.gle/zNAejgHxS5xknCmW8"><button type="button">Contact</button></a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
# About
## HTML
<!-- About -->
    <section class="about" id="about">
        <div class="max-width">
            <h2 class="title">About Me</h2>
            <div class="about-content">
                <div class="column left">
                    <img src="images/me.png" alt="">
                </div>
                <div class="column right">
                    <div class="text">I'm Brody and I'm an <span class="typing-2"></span></div>
                    <p>About</p>
                    <a href="https://brodynewell.com/projects">Projects</a>
                </div>
            </div>
        </div>
    </section>

# Notification Bar
## HTML
<!-- Notification Bar HTML -->
  <div id="hellobar-bar" class="regular closable">
    <div class="hb-content-wrapper">
        <div class="hb-text-wrapper">
            <div class="hb-headline-text">
                <p><span>Text</span></p>
            </div>
        </div>
        <a href="https://brodynewell.com" target="_blank" class="hb-cta hb-cta-button">
            <div class="hb-text-holder">
                <p>Button</p>
            </div>
        </a>
    </div>
    <div class="hb-close-wrapper">
        <a href="javascript:void(0);" class="icon-close">&#10006;</a>
    </div>
  </div>
## CSS
<!-- Notification Bar CSS -->
  body{
    margin: 0;
    padding: 0;
    width: 100%;
  }
  .hellobar-bar {
    font-family: "Open Sans", sans-serif;
    width: 100%;
    margin: 0;
    height: 30px;
    display: table;
    font-size: 17px;
    font-weight: 400;
    padding: .33em .5em;
    -webkit-font-smoothing: antialiased;
    color: #5c5e60;
    position: fixed;
    background-color: #007FFF;
    box-shadow: 0 1px 3px 2px rgba(0,0,0,0.15);
  }
  .hellobar-bar.regular {
    height: 30px;
    font-size: 14px;
    padding: .2em .5em;
  }
  .hb-content-wrapper {
    text-align: center;
    position: relative;
    display: table-cell;
    vertical-align: middle;
  }
  .hb-content-wrapper p {
    margin-top: 0;
    margin-bottom: 0;
  }
  .hb-text-wrapper {
    margin-right: .67em;
    display: inline-block;
    line-height: 1.3;
  }
  .hb-text-wrapper .hb-headline-text {
    font-size: 1em;
    display: inline-block;
    vertical-align: middle;
  }
  .hellobar-bar .hb-cta {
    display: inline-block;
    vertical-align: middle;
    margin: 5px 0;
    color: #111;
    background-color: #007FFF;
    border-color: #007FFF
  }
  .hb-cta-button {
    opacity: 1;
    color: #fff;
    display: block;
    cursor: pointer;
    line-height: 1.5;
    max-width: 22.5em;
    text-align: center;
    position: relative;
    border-radius: 3px;
    white-space: nowrap;
    margin: 1.75em auto 0;
    text-decoration: none;
    padding: 0;
    overflow: hidden;
  }
  .hb-cta-button .hb-text-holder {
    border-radius: inherit;
    padding: 5px 15px;
  }
  .hb-close-wrapper {
    display: table-cell;
    width: 1.6em;
  }
  .hb-close-wrapper .icon-close {
    font-size: 14px;
    top: 15px;
    right: 25px;
    width: 15px;
    height: 15px;
    opacity: .3;
    color: #111;
    cursor: pointer;
    position: absolute;
    text-align: center;
    line-height: 15px;
    z-index: 1000;
    text-decoration: none;
  }