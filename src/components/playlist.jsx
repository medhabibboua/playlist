
import React from 'react';
import styles from './style.module.css';
class Playlist extends React.Component {
    render() {
      return (
        
            <body>
                
            
          <main className={styles.container}>
            <section className={styles.mainVideo}>
                <video src="videos/my_video.mp4" controls autoPlay muted></video>
                <h3 className={styles.title}>Rabbit</h3>
            </section>
            <section className={styles.videoPlaylist}>
                <h3 className={styles.title}>playlist</h3>
                <p>10 lessons &nbsp; . &nbsp; 50m48s</p>
                <div className={styles.videos}>
                    <div className={styles.video}>
                        <img src="/play.svg" alt="" />
                        <p>01.</p>
                        <h3 className={styles.title}>Title of video added in playlist</h3>
                        <p className={styles.time}>3:46</p>
                    </div>
                    <div className={styles.video}>
                        <img src="/play.svg" alt="" />
                        <p>02.</p>
                        <h3 className={styles.title}>Title of video added in playlist</h3>
                        <p className={styles.time}>3:46</p>
                    </div>
                    <div className={styles.video}>
                        <img src="/play.svg" alt="" />
                        <p>03.</p>
                        <h3 className={styles.title}>Title of video added in playlist</h3>
                        <p className={styles.time}>3:46</p>
                    </div>
                    <div className={styles.video}>
                        <img src="/play.svg" alt="" />
                        <p>04.</p>
                        <h3 className={styles.title}>Title of video added in playlist</h3>
                        <p className={styles.time}>3:46</p>
                    </div>
                    <div className={styles.video}>
                        <img src="/play.svg" alt="" />
                        <p>05.</p>
                        <h3 className={styles.title}>Title of video added in playlist</h3>
                        <p className={styles.time}>3:46</p>
                    </div>
                    <div className={styles.video}>
                        <img src="/play.svg" alt="" />
                        <p>06.</p>
                        <h3 className={styles.title}>Title of video added in playlist</h3>
                        <p className={styles.time}>3:46</p>
                    </div>
                    <div className={styles.video}>
                        <img src="/play.svg" alt="" />
                        <p>07.</p>
                        <h3 className={styles.title}>Title of video added in playlist</h3>
                        <p className={styles.time}>3:46</p>
                    </div>
                </div>
            </section>

          </main>
          </body>
        
      );
    }
  }
  export default Playlist;
  
