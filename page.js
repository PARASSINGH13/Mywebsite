import Head from 'next/head';
import Nav from '../app/components/Nav';
import Image from 'next/image';  // Import the Image component from Next.js
import styles from '../app/styles/Home.module.css';
import Footer from '../app/components/Footer';

export default function Home() {
  return (
    <div>
      <Nav /> {/* Nav is now outside of the container */}
      
      <div className={styles.container}>
        <Head>
          <title>Home Page</title>
        </Head>
        
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to My Project</h1>
          <p className={styles.description}>
            Made by Paras Singh
          </p>
          
          <div className={styles.imageContainer}>
            <Image
              src="/images/IMG_1649.JPG"  // Path to your image in the 'public' folder
              alt="Profile Picture"
              width={200}   // Adjust the width as per your requirement
              height={200}  // Adjust the height as per your requirement
              className={styles.profileImage}  // Optional: Add a class for custom styling
            />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
