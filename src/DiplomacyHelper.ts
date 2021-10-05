import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import './diplomacy-website.js';

export class DiplomacyHelper extends LitElement {
  @property({ type: String }) title = 'Diplomacy Helper';

  static styles = css`
    /* :host {
    } */
    a:link {
      color: aqua;
      background-color: white;
      text-decoration: underline;
    }

    a:visited {
      color: red;
      background-color: white;
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
          <diplomacy-website
            name="Backstabbr"
            url="https://www.backstabbr.com/"
            background="assets/Backsabbr2.png"
            image="assets/BackstabbrMap.png"
            caption="A screenshot (which I took) of a Backstabbr board in spring 1901. backsabbr.com"
          >
            <p>
              My favorite one, with simplistic graphics and relativly limited
              game building options <br />(with your choice of press type,
              adjudication increments, how much you punish players who arne't
              fun, privacy and draw settings), it is perfect for players who
              just want to casually backstab.
            </p>
          </diplomacy-website>
          <diplomacy-website
            name="PlayDiplomacy"
            url="https://www.playdiplomacy.com/"
          >
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
          </diplomacy-website>
          <diplomacy-website
            name="WebDiplomacy"
            url="https://www.webdiplomacy.net/"
            background="assets/WebCombat.png"
            image="assets/Web.png"
            caption="A zoomed in sreenshot(which I took) of A WebDiplomacy board in Fall 1901. Its graphics aren't simple like backstabbr, just bad."
          >
            <p>
              In basic terms, WebDiplomacy is a mix of the defining
              characteristics of Backstabbr and PlayDiplomacy into an average
              site, although it came before both of them. <br />It has a Forum,
              and it's game creation process is a lot like Backstabbr, except it
              allows public press, some variants, and, more importantly, has a
              betting system. <br />The currency used by web diplomacy, which
              bet on your games with, is "Diplomacy Points":as you win and lose
              games, your collection and loss of bets is a good metric <br />for
              how good you are. I suppose the principal is, the higher the skill
              and hence points for each player is, the more willing they are to
              lose points; hence, they bet higher. <br />So, your collection of
              a large pot shows your ability to defeat good players. Anyway, the
              elusiveness of this system has caused it to be near overshadowed
              by a rating system like PlayDiplomacy's,<br />but points still
              exist.
            </p>
          </diplomacy-website>
          <diplomacy-website
            name="VDiplomacy"
            url="https://www.vdiplomacy.com/index.php"
            background="assets/VCombat.png"
            image="assets/Vdip.png"
            caption="There are too many variants for you to get anything out of a screenshot of a map, so I took a picture of the welcome screen. vdiplomacy.com"
          >
            <p>
              Literally built on WebDiplomacy's software, but with hundreds more
              variant types and a Forum reserved for mods to comment on, so it's
              perfect for reporting bugs.
            </p>
          </diplomacy-website>
          <diplomacy-website
            name="Dipgame"
            url="https://www.dipgame.net/"
            background="assets/Dipgame2.png"
            image="assets/DipGame.png"
            caption="The Hompage's sample game. dipgame.net"
          >
            <p>
              Decent Interface all around, like backstabbr, except for the added
              benefit of having really good bots that can do the diplomatic
              part.
            </p>
          </diplomacy-website>
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
        <div class="link-list bottom-border content-padding">
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
        </div>
        <div id="updated" class="bottom-border">
          <p>Last updated on October 3.</p>
        </div>
        <!--Please don't destroy this just because it's javascript.-->
        <div>
          <a href='https://www.free-counters.org/'>https://www.free-Counters.org</a> <script type='text/javascript' src='https://www.freevisitorcounters.com/auth.php?id=f02fbf1fb5675d80b7c2300e89983c1123bf87bb'></script>
          <script type="text/javascript" src="https://www.freevisitorcounters.com/en/home/counter/874049/t/0"></script>
        </div>
      </div>
    `;
  }
}
