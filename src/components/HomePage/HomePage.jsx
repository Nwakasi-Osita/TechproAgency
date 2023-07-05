import Head from "next/head";
import Nav from "../Nav/Nav";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Techpro Agency</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.techproBanner}>
          <Nav />
          <div className={styles.techproBannerText}>
            <h2>
              Transforming Ideas into <br />
              Technological{" "}
              <span className={styles.excellenceTransform}>Excellence</span>
            </h2>

            <p>
              Are you ready to revolutionize your digital presence? Look no
              further than TechPro Agency - your ultimate partner in harnessing
              the power of technology to transform your business.We are a
              dynamic agency specializing in designing and developing
              cutting-edge applications and APIs taliored to your unique needs
            </p>
          </div>
          <div className={styles.techproBlurDesignSection}>
            <div className={styles.techproBlurDesign}></div>
          </div>
        </div>

        <div className={styles.techproServiceSection}>
          <div className={styles.techproServiceSectionTitle}>
            <h2>Our services</h2>
          </div>

          <div className={styles.techproServices}>
            <div className={styles.techproServiceTypes}>
              <div className={styles.techproServiceTitle}>
                <h2>UI/UX Design</h2>
              </div>
              <p>
                We create stunning and user-friendly applications for various
                platforms, including web, mobile, and desktop
              </p>
            </div>

            <div className={styles.techproServiceTypes}>
              <div className={styles.techproServiceTitle}>
                <h2>Web Development</h2>
              </div>
              <p>
                We create stunning and user-friendly applications for various
                platforms, including web, mobile, and desktop
              </p>
            </div>

            <div className={styles.techproServiceTypes}>
              <div className={styles.techproServiceTitle}>
                <h2>System Design</h2>
              </div>
              <p>
                We create stunning and user-friendly applications for various
                platforms, including web, mobile, and desktop
              </p>
            </div>

            <div className={styles.techproServiceTypes}>
              <div className={styles.techproServiceTitle}>
                <h2>Devops</h2>
              </div>
              <p>
                We create stunning and user-friendly applications for various
                platforms, including web, mobile, and desktop
              </p>
            </div>

            <div className={styles.techproServiceTypes}>
              <div className={styles.techproServiceTitle}>
                <h2>Cloud Engineering</h2>
              </div>
              <p>
                We create stunning and user-friendly applications for various
                platforms, including web, mobile, and desktop
              </p>
            </div>

            <div className={styles.techproServiceTypes}>
              <div className={styles.techproServiceTitle}>
                <h2>API Design and Development</h2>
              </div>
              <p>
                We create stunning and user-friendly applications for various
                platforms, including web, mobile, and desktop
              </p>
            </div>

            <div className={styles.techproServiceTypes}>
              <div className={styles.techproServiceTitle}>
                <h2>Desktop App and Development</h2>
              </div>
              <p>
                We create stunning and user-friendly applications for various
                platforms, including web, mobile, and desktop
              </p>
            </div>
          </div>
        </div>

        {/* ////////HOW DO WE WORK//////// */}

        <div className={styles.techproWorkDetailSection}>
          <div className={styles.techproWorkDetailSectionTitle}>
            <h2>How we work</h2>
          </div>
          <div className={styles.techproWorkDetails}>
            <div className={styles.techproWorkDetail}>
              <h1>01</h1>
              <div className={styles.techproWorkDetailImg}>
                {/* <img src="public/images/firstPhoto.png" /> */}
                <img src="images/firstPhoto.png" />
              </div>
              <h2>Discovery</h2>
              <p>
                We employ the best design and code solution that fits your{" "}
                requirements, and then we construct the prototype.
              </p>
            </div>
            <div className={styles.techproWorkDetail}>
              <h1>02</h1>
              <div className={styles.techproWorkDetailImg}>
                <img src="images/secondPhoto.png" />
              </div>
              <h2>Strategy</h2>
              <p>
                We employ the best design and code solution that fits your{" "}
                requirements, and then we construct the prototype.
              </p>
            </div>
            <div className={styles.techproWorkDetail}>
              <h1>03</h1>
              <div className={styles.techproWorkDetailImg}>
                <img src="images/thirdPhoto.png" />
              </div>
              <h2>Design</h2>
              <p>
                We employ the best design and code solution that fits your{" "}
                requirements, and then we construct the prototype.
              </p>
            </div>
            <div className={styles.techproWorkDetail}>
              <h1>04</h1>
              <div className={styles.techproWorkDetailImg}>
                <img src="images/forthPhoto.png" />
              </div>
              <h2>Development</h2>
              <p>
                We employ the best design and code solution that fits your{" "}
                requirements, and then we construct the prototype.
              </p>
            </div>
          </div>
        </div>

        {/* /////Want an MVP for your start up/// */}

        <div className={styles.wantAnMvpSection}>
          <div className={styles.wantAnMvpSectionHeading}>
            <h1>Want an MVP for your start up</h1>
            <p>
              Instead of spending lots of time and money on complicated
              development processes, we start by making a basic model that
              facilitates swift adaptations or seamless scalability with the
              inclusion of supplementary technologies, if required
            </p>
          </div>
          <div className={styles.wantAnMvpSteps}>
            <div className={styles.wantAnMvpStep}>
              <h6>DAY 1 - 2</h6>
              <p>
                Once you tell us about your idea, goals, and needs, we carefully
                examine and analyze them.
              </p>
            </div>

            <div className={styles.wantAnMvpStep}>
              <h6>DAY 3 - 30</h6>
              <p>
                We employ the best design and code solution that fits your
                requirements, and then we construct the prototype.
              </p>
            </div>

            <div className={styles.wantAnMvpStep}>
              <h6>DAY 30 - 45</h6>
              <p>
                We put the prototype to the test with real users, discovering
                areas for improvement and figuring out how to make it better.
              </p>
            </div>

            <div className={styles.wantAnMvpStep}>
              <h6>NEXT ITERATION</h6>
              <p>
                We make refinements and adjustments to enhance its quality or
                expand its capacity to accommodate millions of users.
              </p>
            </div>
          </div>

          <div className={styles.elevatingDigitalPresense}>
            <h2> Ready to elevate your digital presence?</h2>
          </div>

          <div className={styles.contactSection}>
            <div className={styles.contactSectionWriteToUs}>
              <h2>
                {" "}
                Write to us <img src="images/arrow.png" />{" "}
              </h2>
            </div>
            <div className={styles.contactSectionOrText}>
              <h3>or</h3>
            </div>
            <div className={styles.contactSectionSetUpACall}>
              <h2>
                Set up a call with us <img src="images/arrow.png" />
              </h2>
            </div>
          </div>
        </div>

        <div className={styles.techproFooterSection}>
          <div className={styles.techproFooter}>
            <div className={styles.techproFooterText}>
              <h4>TechPro </h4>
            </div>
            <div className={styles.techproFooterCopyRightText}>
              <h4>Copyright 2023 All Right Reserved TechPro </h4>
            </div>

            <div className={styles.contactLogoSection}>
              <div className={styles.contactLogo}>
                <ul>
                  <li>
                    <a
                      className={styles.fontawesome}
                      href="https://www.twitter.com"
                      target={"_blank"}
                      referrerPolicy={"no-referrer"}
                    >
                      <img src="/images/Twitter.png" />
                    </a>
                  </li>

                  <li>
                    <a
                      className={styles.fontawesome}
                      href="https://www.instagram.com"
                      target={"_blank"}
                      referrerPolicy={"no-referrer"}
                    >
                      <img src="/images/Instagram.png" />
                    </a>
                  </li>

                  <li>
                    <a
                      className={styles.fontawesome}
                      href="https://www.facebook.com"
                      target={"_blank"}
                      referrerPolicy={"no-referrer"}
                    >
                      <img src="/images/Facebook.png" />
                    </a>
                  </li>

                  {/* <li>
                <a
                  className={styles.fontawesome}
                  href="#"
                  target={"_blank"}
                  referrerPolicy={"no-referrer"}
                >
                  <Image
                    src="/images/twitter-icon.svg"
                    width={20}
                    height={20}
                  />
                </a>
              </li> */}
                </ul>
              </div>

              {/*END OF CONTACT LOGO */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
