import NextHead from 'next/head';

export default function PageTitle({ children, ...props }) {
  return(
    <NextHead>
      <title {...props}>{ children }</title>
    </NextHead>
  );
}