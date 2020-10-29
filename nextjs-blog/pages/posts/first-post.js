import Link from 'next/link';
import Head from 'next/head';

const FirstPost = () => {
    return (
        <div>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>FIRST POST OH YEAH</h1>
            <h2>
                <Link href = "/">
                    <a> Back to home </a>
                </Link>
            </h2>
        </div>
    )
}


export default FirstPost;