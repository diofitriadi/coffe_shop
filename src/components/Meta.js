import Head from 'next/head'
import Script from 'next/script'

const Meta = ({meta}) => {
    return(
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="keyword" content={meta.keyword}/>
        <meta name='description' content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet='utf-8'/>
      </Head>
    </>
    )
}

Meta.defaultProps = {
  meta: {
    title: "Coffee Shop",
    keyword: "Buy coffee",
    description: "Best Place to buy coffee online"
  } 
}

export default Meta