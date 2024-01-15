export default function Home() {
  return <div>Hello World</div>;
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
