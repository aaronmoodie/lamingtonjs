import { MDXProvider } from '@mdx-js/react'

export default function Page(props) {
	return (
		<div className='flex flex-col w-full max-w-screen-sm mx-auto'>
      <MDXProvider>
        <h1 className='text-4xl font-bold text-center my-12'>
          {props.meta.title}
        </h1>
        <article {...props} />
      </MDXProvider>
		</div>
	)
}