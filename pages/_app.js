import Layout from "../components/Layout/Layout";
/* import '../styles/style.scss'*/
export default function MyApp({ Component, pageProps }) {
    //providers- context/providers, theme, data, etc
    //layout
    //props adicionales

    return(
    <Layout>
        <Component {...pageProps} />
    </Layout>
    )
  }