import Head from 'next/head'
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Header from '../components/Header';
const DynamicAbout = dynamic(() => import('../components/About'), {
  loading: <p>Load....</p>
})
import Project from '../components/Project.tsx';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import Layout from '../components/LayoutScrollEffect';

export default function Home() {
  return (
      <div>
        <Head>
          <title>Hatr's portfolio</title>
        </Head>
        <main>
          <Header />
          <DynamicAbout/>
          <Project/>
          <Layout animation='animate__zoomIn'>
            <Skills></Skills>
          </Layout>
          <Contact/>
          <Footer/>
          <ScrollToTop></ScrollToTop>
        </main>
      </div>
  )
}