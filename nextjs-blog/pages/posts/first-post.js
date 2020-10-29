import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import App from '../_app';

const FirstPost = () => {
    return (
        <div>
            <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1> The importance of continuous improvement </h1>
            <p>
                Life is too short to live a dull mediocre life. We all need to constantly sharpen our saws and become the best that we can be. 
            </p>
            </Layout>
            
        </div>
    )
}


export default FirstPost;