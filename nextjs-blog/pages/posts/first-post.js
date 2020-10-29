import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

const FirstPost = () => {
    return (
        <div>
            <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>FIRST POST OH YEAH</h1>
            <h2>
                <Link href = "/">
                    <a> Back to home </a>
                </Link>
            </h2>
            </Layout>
            
        </div>
    )
}


export default FirstPost;