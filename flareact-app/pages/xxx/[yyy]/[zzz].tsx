export async function getEdgeProps({ params }) {
  return {
    props: {
      params,
    },
    revalidate: 10,
  };
}
export default function Index(props) {
  return (
    <h1>
      xxx/yyy/zzz
      <pre>{JSON.stringify(props)}</pre>
    </h1>
  );
}
