import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class DiplomacyHelper extends LitElement {
  @property({ type: String }) title = 'Diplomacy Helper';

  static styles = css`
    /* :host {
    } */
    a:link {
      color: aqua;
      background-color: transparent;
      text-decoration: underline;
    }

    a:visited {
      color: red;
      background-color: transparent;
      text-decoration: underline;
    }

    a:hover {
      color: orange;
      background-color: transparent;
      text-decoration: underline;
    }

    a:active {
      color: red;
      background-color: transparent;
      text-decoration: underline;
    }
  `;

  render() {
    return html`
      <link rel="stylesheet" href="./assets/DiplomacyExtension1.css" />
      <div id="web">
        <div id="header" class="bottom-border">
          <h1>All Online Diplomacy Websites</h1>
          <h4>By Zev Oster</h4>
          <h6>
            DISCLAIMER: I don't really claim to have all sites written here. I
            will simply continually edit this until I have or might as well
            have.
          </h6>
        </div>
        <div id="content">
          <div id="backstabbr" class="content-padding bottom-border">
            <h3><a href="https://www.backstabbr.com/">Backstabbr</a></h3>
            <div id="backstabbr-text" class="play-text">
              <p>
                My favorite one, with simplistic graphics and relativly limited
                game building options <br />(with your choice of press type,
                ajudication increments, how much you punish players who arne't
                fun, privacy and draw settings), it is perfect for players who
                just want to cassually backstab.
              </p>
            </div>
            <figure>
              <img
                src="assets/BackstabbrMap.png"
                alt="Backstabbr"
                width="600"
                height="500"
              />
              <figcaption class="caption">
                <h5>
                  A screenshot (which I took) of a Backstabbr board in spring
                  1901. backsabbr.com
                </h5>
              </figcaption>
            </figure>
          </div>
          <div id="playdiplomacy" class="content-padding bottom-border">
            <h3><a href="https://www.playdiplomacy.com/">PlayDiplomacy</a></h3>
            <p>
              If Backstabbr is a method of quicky and simply playing the game,
              playDimplomacy is its mirror opisite. Built on a ratings system
              simaler to <a href="https://www.chess.com/">chess.com</a>,<br />
              and with a class system that shows off how good at the game you
              are, It has an awkward seriousness that can only be accepted by
              no-nonsense players.<br />It also has an extreamly complex game
              building process, with a wide range of ajudication options,
              privacy settings, press types, draw settings, the graphic quality
              of the map, <br />the unit icons(!), and for a subscrtion price,
              map and game variants. It also has seperate acounts for teachers
              and a Forum.
            </p>
            <p>
              I wanted to put a picture of the PlayDiplomacy board here, but the
              site rules don't like when you take screenshots and I'm not taking
              any chances.
            </p>
          </div>
          <div id="webdiplomacy" class="content-padding bottom-border">
            <h3><a href="https://webdiplomacy.net/">WebDiplomacy</a></h3>
            <div id="webdiplomacy-text" class="play-text">
              <p>
                In basic terms, WebDiplomacy is a mix of the defining
                charecterestics of Backstabbr and PlayDiplomacy into an average
                site, although it came before both of them. <br />It has a
                Forum, and it's game creation process is a lot like Backstabbr,
                except it allows public press, some variants, and, more
                importantly, has a betting system. <br />The currecy used by web
                diplomacy, which bet on your games with, is "Diplomacy
                Points":as you win and lose games, your colletion and loss of
                bets is a good metric <br />for how good you are. I supose the
                principal is, the higher the skill and hence points for each
                player is, the more willing they are to lose points; hence, they
                bet higher. <br />So, your collention of a large pot shows your
                ability to defeat good players. Anyway, the eluiveness of this
                system has caused it to be near overshadowed by a rating system
                like PlayDiplomacy's,<br />but points still exsist.
              </p>
            </div>
            <figure>
              <img
                src="assets/Web.png"
                alt="WebDiplomacy"
                width="600"
                height="500"
              />
              <figcaption class="caption">
                <h5>
                  A zoomed in sreenshot(which I took) of A WebDiplomacy board in
                  Fall 1901. Its graphics aren't simple like backstabbr, just
                  bad.
                  <a href="https://webdiplomacy.net/board.php?gameID=377134"
                    >The game this picture is from.</a
                  >
                </h5>
              </figcaption>
            </figure>
          </div>
          <div id="vdiplomacy" class="content-padding bottom-border">
            <h3>
              <a href="https://www.vdiplomacy.com/index.php?">VDiplomacy</a>
            </h3>
            <div class="play-text">
              <p>
                Literally built on WebDiplomacy's software, but with hundreds
                more variant types and a Forum reserved for mods to comment on,
                so it's perfect for reporting bugs.
              </p>
            </div>
            <figure>
              <img
                src="assets/Vdip.png"
                alt="VDiplomacy"
                width="600"
                height="500"
              />
              <figcaption class="caption">
                <h5>
                  There are too many variants for you to get anything out of a
                  screenshot of a map, so I took a picture of the welcome
                  screen. vdiplomacy.com
                </h5>
              </figcaption>
            </figure>
          </div>
          <!-- <div id="redscape" class="content-padding bottom-border">
              <h3><a href = "http://www.redscape.com/">Redscape</a></h3>
              <div class="play-text">
                  <p>A forum based play by email type ordeal. I don't know much more about since I didn't register(I've already registered on WebDiplomacy in the<br />name of this website, thank you very much), but that shoud be enough to get you started.</p>
              </div>
              <figure>
                  <img src="assets/Red.png" alt="Redscape" width = "600" height="500">
                  <figcaption class="caption"><h5>Redscape Homepage. redscape.com</h5></figcaption>
              </figure>
          </div> -->
          <div id="Dipgame" class="content-padding bottom-border">
            <h3><a href="http://www.dipgame.net/">Dipgame</a></h3>
            <div class="play-text">
              <p>
                Decent Interface all around, like backstabbr, except for the
                added benefit of having really good bots that can do the
                diplomatic part.
              </p>
            </div>
            <figure>
              <img
                src="assets/DipGame.png"
                alt="DipGame"
                width="600"
                height="500"
              />
              <figcaption class="caption">
                <h5>The Hompage's sample game. dipgame.net</h5>
              </figcaption>
            </figure>
          </div>
          <div class="link-list bottom-border content-padding">
            <h3>Play-By-Email Games</h3>
            <p>For people who want to take their game like this:</p>
            <ul>
              <li><a href="http://www.dipbounced.com/">Bounced</a></li>
              <li>
                <a href="http://www.diplomaticcorp.com/">Diplomaticcorp</a>
              </li>
              <li>
                <a href="http://www.redscape.com/">Redscape</a
                ><span>, which is forum based.</span>
              </li>
            </ul>
          </div>
        </div>
        <!--Maybe build a list of play by emails here?-->
        <!---
        <div>
            <h1>Currently Unworking Sites</h1>
            <hr />
            <h3><a href="http://www.amarriner.com/dip/">amarriner</a></h3>
            <p>The guy that runs the <a href="http://www.amarriner.com/">wider site</a> is too busy to work on it often, so most of the stuff is <br />old tech that doesn't work, including his diplomacy engine. Put he is going to get off work SOMEday, so the option will probably be open with time.</p>
            <p>Util that time, here's a picture of the sites homepage:</p>
            <img src="assets/Pictures/amarrier.png" alt = "amarrier" width = "600" height="500">
            <hr />
            <h3>Nexus Diplomacy</h3>
            <p>I don't really know if Nexus doesn't work, it simply takes such an unacetablly long time to load that I quit trying. I don't know the first thing about it, not even a link.</p>
            <hr />
            <h3><a href="http://stabbeurfou.org/">stabbeurfou</a></h3>
            <p>Just another free website, but they ran short on donations and google kicked them out. Maybe a family member will come in and pay their debts<br />and refill their funds, so who knows?</p>
            <figure>
                <img src="assets/Pictures/a.png" alt = "They can't afford to stay on :(" width="600" height="500">
                <figcaption>They can't afford to stay on :(</figcaption>
            </figure>
        </div>
        --->
        <div class="link-list bottom-border content-padding">
          <hr class="line" />
          <h2>Sources</h2>
          <p>
            I did not know of all of these websites by myself. My main
            Importance Is gathering everyone's <br />hard work into a
            concentrated space. Not including the sites already mentioned, here
            are those sites:
          </p>
          <ul>
            <li>
              <a
                href="https://boardgamegeek.com/thread/980251/best-place-play-diplomacy-online"
                >boardgamegeek</a
              >
            </li>
            <li>
              <a href="https://diplomacygames.com/where-play-diplomacy/"
                >diplomacygames</a
              >
            </li>
            <li>
              <a href="https://www.ultraboardgames.com/diplomacy/links.php"
                >ultraboardgames</a
              >
            </li>
          </ul>
          <hr class="line" />
        </div>
        <div id="updated">
          <hr class="line" />
          <p>Last updated on October 3.</p>
        </div>
      </div>
    `;
  }
}
