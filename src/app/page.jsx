    import Image from "next/image";
    import styles from "./page.module.css";

    import { Activity } from "lucide-react";
    import LightRaysBg from "@/components/Background/backgroundComp";

    import { Noto_Serif_Display } from "next/font/google";
    const noto_serif_display = Noto_Serif_Display({ subsets: ['latin'] });

    export default function Home() {
        return (
            <div className={styles.page}>
                <div className={styles.background}>
                  <LightRaysBg />
                </div>

                <main className={`${styles.main} ${noto_serif_display.className}`}>
                    <nav className={styles.nav_bar}>
                      <div className={styles.nav_logo}>
                        <Activity 
                          color="white"
                          size={24}
                        />
                        
                        <p> Remedy Vault </p>
                      </div>

                      <div className={styles.nav_links}>
                        <a href=""> Search </a>
                        <a href=""> Vault </a>
                      </div>
                    </nav>

                    <div className={styles.main_content}>
                      <section className={styles.main_sect_1}>
                        <h1> Unlock Your Health Secrets </h1>
                        <h4> Natural Remedies Await </h4>

                        <button className={styles.start_btn}>
                          Start
                        </button>
                      </section>
                    </div>

                    
                </main>
            </div>
        );
    }
