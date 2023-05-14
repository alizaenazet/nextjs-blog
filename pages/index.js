import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import Link from 'next/link';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>saya faris sekolah di rumah
kesibukan sekarang lagi mastering oil paint
saya menekuni ilustrasi sebab saya suka gambar dan saya belajar secara otodidak, target ya jadi professional dong.</p>
        <p>
          more about me you can go to my social media,
          <a href="https://instagram.com/27rse?igshid=MzRlODBiNWFlZA=="> my Instagram</a>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Hasil belajar</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <footer>
      <p>
      if you want to make something like this (e.g kartu undangan nikah)<a href='https://www.linkedin.com/in/azet'> contact teman faris</a>  
      </p>
        
      </footer>
    </Layout>
  );
}

