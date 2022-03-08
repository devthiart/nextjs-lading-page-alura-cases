import FAQScreen from '../src/screens/FAQScreen';

export default FAQScreen; 

// SSG - Static Site Generation
// SSR - Server Side Rendering
// ISG - Incremental Static Generation

// export async function getServerSideProps() {
//   console.log("Runs every time the site is accessed.");
export async function getStaticProps() { 
  console.log("Run only in build time.");
  const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
  const faq = await fetch(FAQ_API_URL)
    .then((serverResponse) => {
      return serverResponse.json();
    })
    .then((response) => {
      return response;
    });

  return {
    props: {
      faq
    }
  };
}